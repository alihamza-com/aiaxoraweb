"use client"

import { useEffect } from "react"
import { useAnimation } from "framer-motion"

export default function ScrollTriggerAnimations() {
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Parallax effect for background elements
      const parallaxElements = document.querySelectorAll("[data-parallax]")
      parallaxElements.forEach((element) => {
        const speed = Number.parseFloat(element.getAttribute("data-parallax") || "0.5")
        const yPos = -(scrollY * speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })

      // Fade in elements on scroll
      const fadeElements = document.querySelectorAll("[data-fade]")
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("fade-in")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}
