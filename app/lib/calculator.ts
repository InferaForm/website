// Missed-lead estimate shared by the /calculator page and the report email route,
// so the emailed numbers are always recomputed from the inputs on the server.

export type ResponseTime = "under-5" | "5-30" | "1-4h" | "same-day" | "next-day"

// Share of the bookings a business would get with a reply in under 5 minutes.
// Deliberately conservative: published lead-response studies report much steeper drops.
export const responseTimes: { value: ResponseTime; label: string; retained: number }[] = [
  { value: "under-5", label: "Under 5 minutes", retained: 1 },
  { value: "5-30", label: "5–30 minutes", retained: 0.85 },
  { value: "1-4h", label: "1–4 hours", retained: 0.7 },
  { value: "same-day", label: "Later the same day", retained: 0.6 },
  { value: "next-day", label: "Next day or later", retained: 0.5 },
]

export type CalculatorInput = {
  leads: number
  jobValue: number
  closeRate: number
  responseTime: ResponseTime
}

export type CalculatorResult = {
  currentJobs: number
  lostJobsMonthly: number
  lostRevenueMonthly: number
  lostRevenueYearly: number
}

export const defaultInput: CalculatorInput = { leads: 60, jobValue: 3500, closeRate: 15, responseTime: "1-4h" }

export const limits = {
  leads: { min: 1, max: 5000 },
  jobValue: { min: 100, max: 1_000_000 },
  closeRate: { min: 1, max: 100 },
}

export function calculate({ leads, jobValue, closeRate, responseTime }: CalculatorInput): CalculatorResult {
  const retained = responseTimes.find((r) => r.value === responseTime)?.retained ?? 1
  const currentJobs = leads * (closeRate / 100)
  // If today's jobs are `retained` of what a fast reply would book, the gap is what slow follow-up costs
  const lostJobsMonthly = currentJobs / retained - currentJobs
  const lostRevenueMonthly = lostJobsMonthly * jobValue
  return { currentJobs, lostJobsMonthly, lostRevenueMonthly, lostRevenueYearly: lostRevenueMonthly * 12 }
}

// Returns a clean input, or null when anything is missing or out of range
export function parseInput(data: Record<string, unknown>): CalculatorInput | null {
  const leads = Number(data.leads)
  const jobValue = Number(data.jobValue)
  const closeRate = Number(data.closeRate)
  const responseTime = responseTimes.find((r) => r.value === data.responseTime)?.value
  const inRange = (n: number, { min, max }: { min: number; max: number }) => Number.isFinite(n) && n >= min && n <= max
  if (!responseTime || !inRange(leads, limits.leads) || !inRange(jobValue, limits.jobValue) || !inRange(closeRate, limits.closeRate)) {
    return null
  }
  return { leads, jobValue, closeRate, responseTime }
}

export const formatMoney = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

export const formatJobs = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 1 })

export const responseLabel = (value: ResponseTime) => responseTimes.find((r) => r.value === value)?.label ?? value

export const assumptionNote =
  "Estimate only. Assumes leads answered in under 5 minutes book the most jobs, and that slower replies keep 85% (5–30 min), 70% (1–4 hours), 60% (same day) or 50% (next day+) of those bookings. Published lead-response studies report steeper drops, so we keep these numbers on the low side."
