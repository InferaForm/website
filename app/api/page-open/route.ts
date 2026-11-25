import { NextResponse } from 'next/server'
import { getProspect } from '@/app/lib/prospects'
import { getMailer, contactRecipients, escapeHtml } from '@/app/lib/email'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Link scanners, previewers and scripts: an email-security check of the link is not a person opening it.
const BOT = /bot|crawl|spider|slurp|preview|scanner|scan|monitor|curl|wget|python|httpclient|axios|node-fetch|go-http|java\/|headless|phantom|puppeteer|playwright|lighthouse|pagespeed|barracuda|mimecast|proofpoint|edgepilot|safelinks|symantec|forcepoint|cisco|ironport|trendmicro|sophos|fortinet|zscaler|vercel/i

/**
 * Called from a business's /for/<slug> page a few seconds after a real browser shows it.
 * Emails the team (CONTACT_EMAIL_TO, one email per address) that the business opened its page.
 * At most one alert per business per day, through Resend's idempotency keys.
 * Visits from PAGE_ALERT_SKIP_COUNTRIES (default PK, i.e. our own clicks) send nothing.
 */
export async function POST(request: Request) {
  let slug = ''
  try {
    slug = String(((await request.json()) as { slug?: unknown }).slug || '')
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
  const p = getProspect(slug)
  if (!p) return NextResponse.json({ ok: false }, { status: 404 })

  const ua = request.headers.get('user-agent') || ''
  if (!ua || BOT.test(ua)) return NextResponse.json({ ok: true, skipped: 'bot' })

  const country = request.headers.get('x-vercel-ip-country') || ''
  const city = decodeURIComponent(request.headers.get('x-vercel-ip-city') || '')
  const region = request.headers.get('x-vercel-ip-country-region') || ''
  const skip = String(process.env.PAGE_ALERT_SKIP_COUNTRIES ?? 'PK').split(',').map((s) => s.trim().toUpperCase()).filter(Boolean)
  if (country && skip.includes(country.toUpperCase())) return NextResponse.json({ ok: true, skipped: 'own' })

  const mailer = getMailer()
  if (!mailer) return NextResponse.json({ ok: false }, { status: 500 })

  const device = /iphone|android|mobile/i.test(ua) ? 'phone' : /ipad|tablet/i.test(ua) ? 'tablet' : 'desktop'
  const where = [city, region, country].filter(Boolean).join(', ') || 'unknown location'
  const when = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', dateStyle: 'medium', timeStyle: 'short' })
  const url = `https://www.inferaform.com/for/${p.slug}`
  const subject = `${p.business} just opened their page`
  const lines = [
    `${p.business} (${p.trade}, ${p.city}, ${p.state}) just opened their Inferaform page.`,
    '',
    `When: ${when} Pacific`,
    `Device: ${device}`,
    `From: ${where}`,
    p.website ? `Their website: ${p.website}` : '',
    `Their page: ${url}`,
    '',
    'A call or a short follow-up today, while it is fresh, is the best next step.',
  ].filter((l) => l !== '')
  const text = lines.join('\n')
  const html = `<p><b>${escapeHtml(p.business)}</b> (${escapeHtml(p.trade)}, ${escapeHtml(p.city)}, ${escapeHtml(p.state)}) just opened their Inferaform page.</p>
<p>When: ${escapeHtml(when)} Pacific<br>Device: ${device}<br>From: ${escapeHtml(where)}${p.website ? `<br>Their website: <a href="${escapeHtml(p.website)}">${escapeHtml(p.website)}</a>` : ''}<br>Their page: <a href="${url}">${url}</a></p>
<p>A call or a short follow-up today, while it is fresh, is the best next step.</p>`

  const day = new Date().toISOString().slice(0, 10)
  await Promise.all(
    contactRecipients(mailer.to).map((to) =>
      mailer.resend.emails
        .send({ from: mailer.from, to: [to], subject, text, html }, { idempotencyKey: `page-open/${p.slug}/${day}/${to}` })
        .then((r) => { if (r.error) console.error('page-open alert:', r.error) })
        .catch((e) => console.error('page-open alert:', e)),
    ),
  )
  return NextResponse.json({ ok: true })
}
