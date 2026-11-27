import { ImageResponse } from "next/og"

// Share card for every page (link previews in email, iMessage, Slack, LinkedIn, X).
export const alt = "Inferaform: Google & Meta ads plus AI lead follow-up for local businesses"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const bar = (width: number) => (
  <div style={{ width, height: 22, borderRadius: 11, background: "#0b0b0c", marginBottom: 12 }} />
)

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0b0b0c", color: "#fafafa", padding: 80, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ width: 96, height: 96, borderRadius: 24, background: "#c0f349", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 10 }}>
            {bar(54)}
            {bar(38)}
            {bar(22)}
          </div>
          <div style={{ fontSize: 48, fontWeight: 700 }}>Inferaform</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.08 }}>Ads that bring you leads.</div>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.08, color: "#c0f349" }}>Automation that books them.</div>
        </div>
        <div style={{ fontSize: 30, color: "#a1a1aa" }}>Google &amp; Meta ads · every lead answered in under 60 seconds</div>
      </div>
    ),
    size,
  )
}
