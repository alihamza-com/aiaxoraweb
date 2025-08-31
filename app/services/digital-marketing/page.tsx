// app/services/digital-marketing/page.tsx
import { Metadata } from "next";
import DigitalMarketingClient from "./digitalmarketing-client";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digital Marketing Services | AxoraWeb",
  description:
    "Boost your brand visibility with AxoraWeb's digital marketing services. We specialize in SEO, social media marketing, PPC, and content strategy to grow your business online.",
  keywords: [
    "digital marketing",
    "SEO services",
    "social media marketing",
    "PPC management",
    "content marketing",
    "online branding",
    "AxoraWeb digital marketing",
    "digital marketing agency",
    "marketing strategy",
    "increase website traffic",
    "grow business online"
  ],
  openGraph: {
    title: "Digital Marketing Services | AxoraWeb",
    description:
      "AxoraWeb helps businesses grow with professional digital marketing services including SEO, social media, PPC, and content marketing.",
    url: "https://aiaxoraweb.vercel.app/services/digital-marketing",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://aiaxoraweb.vercel.app/digital.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing by AxoraWeb",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | AxoraWeb",
    description:
      "Get expert digital marketing solutions from AxoraWeb. SEO, PPC, and social media strategies designed to grow your brand.",
    images: ["https://aiaxoraweb.vercel.app/digital.jpg"],
  },
  alternates: {
    canonical: "https://aiaxoraweb.vercel.app/services/digital-marketing",
  },
};

export default function DigitalMarketingPageWrapper() {
  return (
    <>
      {/* JSON-LD Structured Data for Digital Marketing Service */}
      <Script
        id="ld-digital-marketing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "AxoraWeb",
            url: "https://aiaxoraweb.vercel.app/services/digital-marketing",
            logo: "https://aiaxoraweb.vercel.app/logo.png",
            description:
              "AxoraWeb provides expert digital marketing services including SEO, social media marketing, PPC campaigns, and content strategy to grow your business online.",
            areaServed: "Worldwide",
            sameAs: [
              "https://www.linkedin.com/aiaxoraweb",
              "https://twitter.com/axoraweb"
            ],
          }),
        }}
      />
      <DigitalMarketingClient />
    </>
  );
}
