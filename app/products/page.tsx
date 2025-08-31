// app/products/page.tsx
import type { Metadata } from "next";
import ProductsPage from "./productClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Our Products | Innovative SaaS & Digital Solutions | AxoraWeb",
  description:
    "Discover AxoraWeb’s innovative products including SaaS platforms, AI-powered tools, and digital solutions. Explore live product demos designed to boost business efficiency, scalability, and growth.",
  keywords: [
    "AxoraWeb products",
    "SaaS products",
    "AI-powered tools",
    "business software solutions",
    "digital products",
    "enterprise SaaS solutions",
    "cloud-based applications",
    "innovative software products",
    "AxoraWeb SaaS platforms",
    "business automation tools",
  ],
  openGraph: {
    title: "AxoraWeb Products | SaaS Platforms & Digital Solutions",
    description:
      "Explore AxoraWeb’s product line — SaaS platforms, AI tools, and digital business solutions with live demos.",
    url: "https://aiaxoraweb.vercel.app/products",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://aiaxoraweb.vercel.app/mobile.jpg",
        width: 1200,
        height: 630,
        alt: "AxoraWeb Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AxoraWeb Products | SaaS & Digital Solutions",
    description:
      "Check out AxoraWeb’s SaaS products and digital solutions with live demos — designed for business growth and innovation.",
    images: ["https://aiaxoraweb.vercel.app/mobile.jpg"],
  },
  alternates: {
    canonical: "https://aiaxoraweb.vercel.app/products",
  },
};

export default function ProductsWrapper() {
  return (
    <>
      {/* JSON-LD Structured Data for Products */}
      <Script
        id="ld-products"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "AxoraWeb Products",
            url: "https://aiaxoraweb.vercel.app/products",
            image: "https://aiaxoraweb.vercel.app/mobile.jpg",
            description:
              "AxoraWeb offers innovative SaaS platforms, AI-powered tools, and digital solutions designed to boost business efficiency and growth.",
            brand: {
              "@type": "Organization",
              name: "AxoraWeb",
              logo: "https://aiaxoraweb.vercel.app/logo.png",
              sameAs: [
                "https://www.linkedin.com/aiaxoraweb",
                "https://twitter.com/axoraweb"
              ]
            }
          }),
        }}
      />
      <ProductsPage />
    </>
  );
}
