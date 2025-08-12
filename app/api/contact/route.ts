import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, company, date, time, goals } = data || {}

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const to = process.env.CONTACT_TO || 'huzaifa@inferaform.com'

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const subject = `New Inquiry — Inferaform: ${name} (${company || 'No company'})`
    const text = `New contact form submission:

Name: ${name}
Email: ${email}
Company: ${company || '-'}
Preferred: ${date || '-'} ${time || ''}

Goals / Message:
${goals || '-'}
`

    await transporter.sendMail({
      from: `Inferaform Website <no-reply@inferaform.com>`,
      to,
      replyTo: email,
      subject,
      text,
    })

    return NextResponse.json({ ok: true })
  } catch (err:any) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to send. Check server logs and SMTP env.' }, { status: 500 })
  }
}
