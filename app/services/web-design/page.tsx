// app/web-design/page.tsx
import WebDesignPage from "./webdesignClient";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Website Design Services | AxoraWeb - Professional Web Design Company",
  description:
    "AxoraWeb offers modern and responsive website design services. Our expert designers create SEO-friendly, mobile-first websites that boost your online presence and grow your business.",
  keywords: [
    "website design services",
    "best website design company",
    "responsive website design",
    "professional web design Pakistan",
    "custom web design solutions",
    "UI UX design",
    "SEO friendly websites",
    "AxoraWeb website design"
  ],
  openGraph: {
    title: "Website Design Services | AxoraWeb",
    description:
      "Get custom, responsive, and professional website design services from AxoraWeb. We create visually stunning and SEO-friendly websites tailored to your business needs.",
    url: "https://aiaxoraweb.vercel.app/services/web-design",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://aiaxoraweb.vercel.app/webdesign.jpg",
        width: 1200,
        height: 630,
        alt: "AxoraWeb - Website Design Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Services | AxoraWeb",
    description:
      "AxoraWeb creates responsive, modern, and SEO-friendly websites to help your business grow.",
    images: ["https://aiaxoraweb.vercel.app/webdesign.jpg"],
  },
  alternates: {
    canonical: "https://aiaxoraweb.vercel.app/services/web-design",
  },
};

export default function WebsiteDesignWrapper() {
  return (
    <>
      {/* JSON-LD Structured Data for Website Design Service */}
      <Script
        id="ld-web-design"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "AxoraWeb",
            url: "https://aiaxoraweb.vercel.app/services/web-design",
            logo: "https://aiaxoraweb.vercel.app/logo.png",
            description:
              "AxoraWeb provides modern and responsive website design services, including SEO-friendly and mobile-first designs for businesses worldwide.",
            areaServed: "Worldwide",
            sameAs: [
              "https://www.linkedin.com/aiaxoraweb",
              "https://twitter.com/axoraweb"
            ],
          }),
        }}
      />
      <WebDesignPage />
    </>
  );
}
