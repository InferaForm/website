import { Resend } from 'resend'

// Env values pasted from .env files often keep their surrounding quotes or whitespace
export function cleanEnv(value: string | undefined) {
  return value?.trim().replace(/^(['"])(.*)\1$/, '$2').trim() || undefined
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// CONTACT_EMAIL_TO may hold several addresses separated by commas; every one gets each enquiry.
export const contactRecipients = (value: string | null | undefined) =>
  String(value || "").split(",").map((s) => s.trim()).filter(Boolean)

// Returns null when Resend or the addresses are not configured
export function getMailer() {
  const apiKey = cleanEnv(process.env.RESEND_API_KEY)
  const to = cleanEnv(process.env.CONTACT_EMAIL_TO)
  const fromEmail = cleanEnv(process.env.RESEND_FROM_EMAIL) || cleanEnv(process.env.CONTACT_EMAIL_FROM)

  if (!apiKey || !to || !fromEmail) {
    console.error('Missing RESEND_API_KEY, CONTACT_EMAIL_TO or RESEND_FROM_EMAIL')
    return null
  }

  const from = fromEmail.includes('<') ? fromEmail : `Inferaform <${fromEmail}>`
  return { resend: new Resend(apiKey), from, to }
}
