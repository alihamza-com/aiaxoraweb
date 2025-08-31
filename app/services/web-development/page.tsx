// app/web-deveservices/web-development/page.tsx
import WebDevelopmentPage from "./webdevelopment-client";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Web Development Services | AxoraWeb",
  description:
    "AxoraWeb offers cutting-edge web development services with modern frameworks, responsive design, and secure architecture. We build fast, scalable, and user-friendly websites tailored to your business goals.",
  keywords: [
    "web development services",
    "custom website development",
    "Next.js development",
    "React web development",
    "business website design",
    "ecommerce website development",
    "responsive web development",
    "AxoraWeb web solutions",
    "professional web developers",
    "modern web applications",
  ],
  openGraph: {
    title: "Web Development Services | AxoraWeb",
    description:
      "Build powerful, scalable, and modern websites with AxoraWeb's expert web development services.",
    url: "https://aiaxoraweb.vercel.app/services/web-development",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://aiaxoraweb.vercel.app/webdevelopment.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development by AxoraWeb",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | AxoraWeb",
    description:
      "Modern, responsive, and scalable web development solutions tailored to your business.",
    images: [
      "https://aiaxoraweb.vercel.app/webdevelopment.jpg",
    ],
  },
  alternates: {
    canonical: "https://aiaxoraweb.vercel.app/services/web-development",
  },
};

export default function WebDevelopmentWrapper() {
  return (
    <>
      {/* JSON-LD Structured Data for Web Development Service */}
      <Script
        id="ld-web-development"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "AxoraWeb",
            url: "https://aiaxoraweb.vercel.app/services/web-development",
            logo: "https://aiaxoraweb.vercel.app/logo.png",
            description:
              "AxoraWeb provides expert web development services, including Next.js and React development, responsive design, and secure web architecture.",
            areaServed: "Worldwide",
            sameAs: [
              "https://www.linkedin.com/aiaxoraweb",
              "https://twitter.com/axoraweb"
            ],
          }),
        }}
      />
      <WebDevelopmentPage />
    </>
  );
}
