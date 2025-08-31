// app/mobile-apps/page.tsx
import type { Metadata } from "next";
import MobileAppClient from "./mobileapp-client";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Mobile App Development Services | AxoraWeb",
  description:
    "AxoraWeb builds powerful, scalable, and user-friendly mobile applications for iOS and Android. Boost your business with our custom mobile app solutions.",
  keywords: [
    "mobile app development",
    "iOS app development",
    "Android app development",
    "custom mobile apps",
    "AxoraWeb mobile solutions",
    "cross-platform apps",
    "React Native apps",
    "Flutter app development",
    "enterprise mobile apps",
    "UI/UX design mobile apps",
  ],
  openGraph: {
    title: "Mobile App Development | AxoraWeb",
    description:
      "We design and develop mobile apps that engage users and grow your business. iOS, Android, and cross-platform solutions.",
    url: "https://aiaxoraweb.vercel.app/mobile-apps",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://aiaxoraweb.vercel.app/mobile.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile App Development by AxoraWeb",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development | AxoraWeb",
    description:
      "AxoraWeb builds scalable and user-friendly mobile apps for iOS and Android platforms.",
    images: ["https://aiaxoraweb.vercel.app/mobile.jpg"],
  },
  alternates: {
    canonical: "https://aiaxoraweb.vercel.app/mobile-apps",
  },
};

export default function MobileAppsPageWrapper() {
  return (
    <>
      {/* JSON-LD Structured Data for Mobile App Development Service */}
      <Script
        id="ld-mobile-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "AxoraWeb",
            url: "https://aiaxoraweb.vercel.app/mobile-apps",
            logo: "https://aiaxoraweb.vercel.app/logo.png",
            description:
              "AxoraWeb provides professional mobile app development services for iOS and Android, including cross-platform solutions.",
            sameAs: [
              "https://www.linkedin.com/company/axoraweb",
              "https://twitter.com/axoraweb"
            ]
          }),
        }}
      />
      <MobileAppClient />
    </>
  );
}
