'use client'

import { useEffect } from "react"

// Tells the team this business opened its page. Waits until the page has been on screen for
// 4 seconds, so link scanners and prefetchers that never really show the page do not count.
export function OpenBeacon({ slug }: { slug: string }) {
  useEffect(() => {
    let sent = false
    let timer: ReturnType<typeof setTimeout> | undefined
    const arm = () => {
      if (sent || document.visibilityState !== "visible") return
      timer = setTimeout(() => {
        if (sent || document.visibilityState !== "visible") return
        sent = true
        fetch("/api/page-open", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ slug }), keepalive: true }).catch(() => {})
      }, 4000)
    }
    const onVisibility = () => {
      if (timer) clearTimeout(timer)
      arm()
    }
    arm()
    document.addEventListener("visibilitychange", onVisibility)
    return () => {
      if (timer) clearTimeout(timer)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [slug])
  return null
}
