import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, company, interests, message, nda } = data || {}

    // Validation
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 })
    }

    // Get recipient email from environment
    const to = process.env.CONTACT_EMAIL_TO || process.env.CONTACT_TO || 'inferaform@gmail.com'
    const fromEmail = process.env.CONTACT_EMAIL_FROM || 'no-reply@inferaform.com'

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_PORT === '465', // Use secure for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD || process.env.SMTP_PASS,
      },
    })

    // Format interests array
    const interestsArray = Array.isArray(interests) 
      ? interests 
      : interests 
        ? [interests] 
        : []
    const interestsList = interestsArray.length > 0 
      ? interestsArray.join(', ') 
      : 'Not specified'

    // Build email subject and body
    const subject = `New Demo Request — Inferaform: ${name} (${company || 'No company'})`
    const text = `New contact form submission:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Interested In:
${interestsList}

Message:
${message || 'No message provided'}

${nda === 'on' || nda === true ? '⚠️ NDA Requested: YES' : 'NDA Requested: No'}

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
    .value { margin-top: 5px; }
    .nda-badge { display: inline-block; background: #ff6b6b; color: white; padding: 5px 10px; border-radius: 4px; font-size: 12px; font-weight: bold; }
    .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #888; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">🚀 New Demo Request</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Company:</div>
        <div class="value">${company || '<em>Not provided</em>'}</div>
      </div>
      <div class="field">
        <div class="label">Interested In:</div>
        <div class="value">${interestsList}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${message || '<em>No message provided</em>'}</div>
      </div>
      ${(nda === 'on' || nda === true) ? '<div class="field"><span class="nda-badge">⚠️ NDA REQUESTED</span></div>' : ''}
    </div>
    <div class="footer">
      Submitted on ${new Date().toLocaleString()}
    </div>
  </div>
</body>
</html>
`

    // Send email
    await transporter.sendMail({
      from: `Inferaform Website <${fromEmail}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    })

    return NextResponse.json({ ok: true, message: 'Email sent successfully' })
  } catch (err: any) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us directly at inferaform@gmail.com' }, 
      { status: 500 }
    )
  }
}

