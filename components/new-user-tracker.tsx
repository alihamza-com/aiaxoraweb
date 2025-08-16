"use client"
import { useEffect } from "react"

export default function NewUserTracker() {
  useEffect(() => {
    // Track page views and user behavior
    const trackPageView = () => {
      const visitCount = Number.parseInt(localStorage.getItem("axora-visit-count") || "0") + 1
      const lastVisit = localStorage.getItem("axora-last-visit")
      const currentTime = new Date().toISOString()

      localStorage.setItem("axora-visit-count", visitCount.toString())
      localStorage.setItem("axora-last-visit", currentTime)

      // Track user engagement
      let timeOnSite = 0
      const startTime = Date.now()

      const trackEngagement = () => {
        timeOnSite = Date.now() - startTime
        localStorage.setItem("axora-time-on-site", timeOnSite.toString())
      }

      // Track time on site
      const interval = setInterval(trackEngagement, 5000)

      // Track scroll depth
      let maxScroll = 0
      const trackScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
        )
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent
          localStorage.setItem("axora-max-scroll", maxScroll.toString())
        }
      }

      window.addEventListener("scroll", trackScroll)

      // Cleanup
      return () => {
        clearInterval(interval)
        window.removeEventListener("scroll", trackScroll)
        trackEngagement() // Final tracking
      }
    }

    return trackPageView()
  }, [])

  return null // This component doesn't render anything
}
