"use client"

import { useEffect } from "react"
import EnhancedHeroSection from "@/components/enhanced-hero-section"
import ServiceCards from "@/components/service-cards"
import TestimonialsSection from "@/components/testimonials-section"
import AdvancedStatsSection from "@/components/advanced-stats-section"
import ClientCarousel from "@/components/client-carousel"
import FloatingActions from "@/components/floating-actions"
import ChatWidget from "@/components/chat-widget"
import ScrollTriggerAnimations from "@/components/scroll-trigger-animations"
import ParticleSystem from "@/components/particle-system"
import Footer from "@/components/footer"
import OrderPlacementModal from "@/components/order-placement-modal"
import dynamic from "next/dynamic";

// SEO-optimized structured data for homepage
const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://axorawebsolution.com",
  "name": "Axora Web Solution",
  "description": "Leading web development company in Pakistan offering custom websites, mobile apps, e-commerce solutions, and digital marketing services.",
  "publisher": {
    "@type": "Organization",
    "name": "Axora Web Solution",
    "logo": {
      "@type": "ImageObject",
      "url": "https://axorawebsolution.com/logo.png"
    },
    "sameAs": [
      "https://www.facebook.com/axorawebsolution",
      "https://www.linkedin.com/company/axorawebsolution",
      "https://twitter.com/axorawebsolution"
    ]
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://axorawebsolution.com/search?query={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://axorawebsolution.com"
      }
    ]
  }
}


export default function HomePage() {
  useEffect(() => {
    // Clear session storage on page load to ensure modal can show again in new sessions
    const handlePageLoad = () => {
      // Only clear if it's a fresh page load (not a navigation within the app)
      if (
        performance.navigation.type === performance.navigation.TYPE_RELOAD ||
        performance.navigation.type === performance.navigation.TYPE_NAVIGATE
      ) {
        sessionStorage.removeItem("axora-modal-shown-this-session")
      }
    }

    handlePageLoad()
  }, [])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }} />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* SEO-optimized content sections */}
        <section aria-label="Hero section showcasing professional web development services">
          <EnhancedHeroSection />
        </section>

        <section aria-label="Comprehensive web development and digital services" id="services">
          <ServiceCards />
        </section>

        <section aria-label="Client testimonials and success stories" id="testimonials">
          <TestimonialsSection />
        </section>

        <section aria-label="Performance statistics and client metrics" id="stats">
          <AdvancedStatsSection />
        </section>
        <Footer />
        <FloatingActions />
        <ChatWidget />
        <ScrollTriggerAnimations />
        <ParticleSystem />
        <OrderPlacementModal />
      </main>
    </>
  )
}
