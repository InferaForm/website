import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, company, interests, message, nda } = data || {}

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('Missing RESEND_API_KEY')
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
    }

    const to = process.env.CONTACT_EMAIL_TO
    const fromEmail = process.env.RESEND_FROM_EMAIL || process.env.CONTACT_EMAIL_FROM

    if (!to || !fromEmail) {
      console.error('Missing CONTACT_EMAIL_TO or RESEND_FROM_EMAIL')
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
    }

    const interestsArray = Array.isArray(interests)
      ? interests
      : interests
        ? [interests]
        : []
    const interestsList = interestsArray.length > 0
      ? interestsArray.join(', ')
      : 'Not specified'

    const ndaRequested = nda === 'on' || nda === true
    const safeName = escapeHtml(String(name))
    const safeEmail = escapeHtml(String(email))
    const safeCompany = company ? escapeHtml(String(company)) : ''
    const safeInterests = escapeHtml(interestsList)
    const safeMessage = message ? escapeHtml(String(message)) : ''

    const subject = `New Demo Request — Inferaform: ${name} (${company || 'No company'})`
    const text = `New contact form submission:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Interested In:
${interestsList}

Message:
${message || 'No message provided'}

${ndaRequested ? 'NDA Requested: YES' : 'NDA Requested: No'}

---
Submitted: ${new Date().toISOString()}
`

    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { margin-top: 5px; white-space: pre-wrap; }
    .nda-badge { display: inline-block; background: #ff6b6b; color: white; padding: 5px 10px; border-radius: 4px; font-size: 12px; font-weight: bold; }
    .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #888; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Demo Request</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${safeName}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
      </div>
      <div class="field">
        <div class="label">Company:</div>
        <div class="value">${safeCompany || '<em>Not provided</em>'}</div>
      </div>
      <div class="field">
        <div class="label">Interested In:</div>
        <div class="value">${safeInterests}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${safeMessage || '<em>No message provided</em>'}</div>
      </div>
      ${ndaRequested ? '<div class="field"><span class="nda-badge">NDA REQUESTED</span></div>' : ''}
    </div>
    <div class="footer">
      Submitted on ${new Date().toLocaleString()}
    </div>
  </div>
</body>
</html>
`

    const from = fromEmail.includes('<')
      ? fromEmail
      : `Inferaform <${fromEmail}>`

    const resend = new Resend(apiKey)
    const { data: sent, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      text,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      throw new Error(error.message)
    }

    console.log('Email sent via Resend:', sent?.id)

    return NextResponse.json({
      ok: true,
      message: 'Thank you for contacting us! We will get back to you within 24 hours.',
    })
  } catch (err: any) {
    console.error('Contact form error:', err)

    return NextResponse.json(
      {
        error: 'Failed to send message. Please try emailing us directly at inferaform@gmail.com',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined,
      },
      { status: 500 }
    )
  }
}
