import { NextResponse } from 'next/server'
import { contactRecipients, escapeHtml, emailRegex, getMailer } from '@/app/lib/email'
import { SITE_URL } from '@/app/lib/site-data'
import {
  calculate,
  parseInput,
  formatMoney,
  formatJobs,
  responseLabel,
  assumptionNote,
} from '@/app/lib/calculator'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { email, name, url } = data || {}

    // Honeypot: real visitors never see or fill this field
    if (url) {
      return NextResponse.json({ ok: true })
    }

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 })
    }

    const input = parseInput(data || {})
    if (!input) {
      return NextResponse.json({ error: 'Please check the calculator numbers and try again.' }, { status: 400 })
    }

    const mailer = getMailer()
    if (!mailer) {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
    }

    // Recompute on the server so the email never carries numbers the visitor typed in
    const result = calculate(input)
    const visitorName = name ? String(name).trim().slice(0, 80) : ''

    const rows: [string, string][] = [
      ['Leads per month', input.leads.toLocaleString('en-US')],
      ['Average job value', formatMoney(input.jobValue)],
      ['Close rate', `${input.closeRate}%`],
      ['Typical response time', responseLabel(input.responseTime)],
      ['Jobs booked now (per month)', formatJobs(result.currentJobs)],
      ['Estimated jobs lost to slow response (per month)', formatJobs(result.lostJobsMonthly)],
      ['Estimated revenue lost per month', formatMoney(result.lostRevenueMonthly)],
      ['Estimated revenue lost per year', formatMoney(result.lostRevenueYearly)],
    ]

    const rowsText = rows.map(([label, value]) => `${label}: ${value}`).join('\n')
    const rowsHtml = rows.map(([label, value]) => `
      <tr>
        <td style="padding: 8px 0; color: #555;">${escapeHtml(label)}</td>
        <td style="padding: 8px 0; text-align: right; font-weight: bold;">${escapeHtml(value)}</td>
      </tr>`).join('')

    const greeting = visitorName ? `Hi ${visitorName},` : 'Hi,'
    const visitorText = `${greeting}

Here is your missed-lead estimate from Inferaform:

${rowsText}

${assumptionNote}

Want to close the gap? Pronto, our follow-up system, texts every new lead within seconds and books the appointment. Get a free audit: ${SITE_URL}/#contact

Inferaform
`

    const visitorHtml = `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <p>${escapeHtml(greeting)}</p>
    <p>Here is your missed-lead estimate from Inferaform:</p>
    <table style="width: 100%; border-collapse: collapse; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd;">${rowsHtml}
    </table>
    <p style="font-size: 12px; color: #888;">${escapeHtml(assumptionNote)}</p>
    <p>Want to close the gap? Pronto, our follow-up system, texts every new lead within seconds and books the appointment.</p>
    <p><a href="${SITE_URL}/#contact" style="display: inline-block; background: #c0f349; color: #111; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-weight: bold;">Get a free audit</a></p>
    <p>Inferaform</p>
  </div>
</body>
</html>
`

    const notifyText = `New calculator report request:

Name: ${visitorName || 'Not provided'}
Email: ${email}

${rowsText}

---
Submitted: ${new Date().toISOString()}
`

    const { error: visitorError } = await mailer.resend.emails.send({
      from: mailer.from,
      to: [email],
      replyTo: contactRecipients(mailer.to),
      subject: `Your missed-lead estimate: ${formatMoney(result.lostRevenueYearly)}/year`,
      text: visitorText,
      html: visitorHtml,
    })

    if (visitorError) {
      console.error('Resend error:', visitorError)
      throw new Error(visitorError.message)
    }

    // The visitor already has their report, so a failed notification only gets logged
    const { error: notifyError } = await mailer.resend.emails.send({
      from: mailer.from,
      to: contactRecipients(mailer.to),
      replyTo: email,
      subject: `Calculator report — Inferaform: ${visitorName || email}`,
      text: notifyText,
    })

    if (notifyError) {
      console.error('Resend notify error:', notifyError)
    }

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    console.error('Calculator report error:', err)

    return NextResponse.json(
      {
        error: 'Failed to send your report. Please try emailing us directly at inferaform@gmail.com',
        details: process.env.NODE_ENV === 'development' && err instanceof Error ? err.message : undefined,
      },
      { status: 500 }
    )
  }
}
