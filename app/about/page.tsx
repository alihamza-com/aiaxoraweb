// app/mobile-apps/page.tsx  (should ideally be /about/page.tsx)
import type { Metadata } from "next";
import AboutPage from "./aboutClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Us | AxoraWeb - Innovating Web, Mobile & AI Solutions",
  description:
    "Learn more about AxoraWeb — a passionate team of developers and innovators building web, mobile, ecommerce, and AI-powered solutions. Discover our mission to help businesses scale with technology-driven digital products.",
  keywords: [
    "about AxoraWeb",
    "AxoraWeb team",
    "web development company",
    "mobile app development company",
    "ecommerce development experts",
    "AI solutions provider",
    "software development company",
    "digital transformation company",
    "custom software developers",
    "AxoraWeb mission and vision",
  ],
  openGraph: {
    title: "About AxoraWeb | Web, Mobile & AI Experts",
    description:
      "AxoraWeb is a full-stack development company specializing in web, mobile, ecommerce, and AI solutions. Get to know our team and mission.",
    url: "https://aiaxoraweb.vercel.app/about",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://aiaxoraweb.vercel.app/about.jpg",
        width: 1200,
        height: 630,
        alt: "About AxoraWeb",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About AxoraWeb | Innovating Web, Mobile & AI Solutions",
    description:
      "Discover AxoraWeb’s story, mission, and expertise in building scalable digital products across web, mobile, ecommerce, and AI.",
    images: ["https://aiaxoraweb.vercel.app/about.jpg"],
  },
  alternates: {
    canonical: "https://aiaxoraweb.vercel.app/about",
  },
};

export default function AboutPageWrapper() {
  return (
    <>
      {/* JSON-LD Structured Data for Organization / About Page */}
      <Script
        id="ld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AxoraWeb",
            url: "https://aiaxoraweb.vercel.app/about",
            logo: "https://aiaxoraweb.vercel.app/logo.png",
            description:
              "AxoraWeb is a full-stack development company providing web, mobile, ecommerce, and AI solutions. Our mission is to help businesses grow with technology-driven digital products.",
            sameAs: [
              "https://www.linkedin.com/company/axoraweb",
              "https://twitter.com/axoraweb"
            ]
          }),
        }}
      />
      <AboutPage />
    </>
  );
}
