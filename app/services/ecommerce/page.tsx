// app/mobile-apps/page.tsx  (ideally /services/ecommerce/page.tsx)
import type { Metadata } from "next";
import EcommercePage from "./ecommerceClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ecommerce Development Services | AxoraWeb",
  description:
    "AxoraWeb delivers professional ecommerce development services to build secure, scalable, and high-performing online stores. From custom ecommerce websites to Shopify, WooCommerce, and Magento solutions, we help businesses sell smarter and grow faster.",
  keywords: [
    "ecommerce development",
    "custom ecommerce website",
    "Shopify development",
    "WooCommerce development",
    "Magento development",
    "online store development",
    "ecommerce web design",
    "ecommerce app development",
    "secure payment integration",
    "B2B and B2C ecommerce solutions",
    "AxoraWeb ecommerce services",
  ],
  openGraph: {
    title: "Ecommerce Development Services | AxoraWeb",
    description:
      "We create high-performance ecommerce websites and apps with Shopify, WooCommerce, Magento, and custom solutions tailored for growth.",
    url: "https://aiaxoraweb.vercel.app/services/ecommerce",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://aiaxoraweb.vercel.app/shopease.jpg",
        width: 1200,
        height: 630,
        alt: "Ecommerce Development by AxoraWeb",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Development Services | AxoraWeb",
    description:
      "Build secure and scalable online stores with AxoraWeb’s ecommerce development solutions — Shopify, WooCommerce, Magento, and more.",
    images: ["https://aiaxoraweb.vercel.app/ecommerce.jpg"],
  },
  alternates: {
    canonical: "https://aiaxoraweb.vercel.app/services/ecommerce",
  },
};

export default function EcommerceWrapper() {
  return (
    <>
      {/* JSON-LD Structured Data for Ecommerce Development Service */}
      <Script
        id="ld-ecommerce"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "AxoraWeb",
            url: "https://aiaxoraweb.vercel.app/services/ecommerce",
            logo: "https://aiaxoraweb.vercel.app/logo.png",
            description:
              "AxoraWeb provides professional ecommerce development services, including Shopify, WooCommerce, Magento, and custom online store solutions.",
            areaServed: "Worldwide",
            sameAs: [
              "https://www.linkedin.com/aiaxoraweb",
              "https://twitter.com/axoraweb"
            ],
          }),
        }}
      />
      <EcommercePage />
    </>
  );
}
