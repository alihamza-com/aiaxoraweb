// app/mobile-apps/page.tsx
import type { Metadata } from "next";
import ServicesPage from "./ServicesClient";


export const metadata: Metadata = {
  title: "Our Services | Web, Mobile & Ecommerce Development | AxoraWeb",
  description:
    "Explore AxoraWeb’s professional services including web development, mobile app solutions, ecommerce platforms, AI integrations, and custom software. We build scalable, secure, and user-friendly digital solutions tailored to your business goals.",
  keywords: [
    "web development services",
    "mobile app development services",
    "ecommerce development services",
    "custom software development",
    "AI integration services",
    "SaaS application development",
    "enterprise software solutions",
    "digital transformation services",
    "UI/UX design services",
    "AxoraWeb services",
  ],
  openGraph: {
    title: "AxoraWeb Services | Web, Mobile, Ecommerce & AI Solutions",
    description:
      "AxoraWeb offers end-to-end digital services — from web and mobile apps to ecommerce platforms and AI-powered software solutions.",
    url: "https://aiaxoraweb.vercel.app/services",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://aiaxoraweb.vercel.app/services.jpg",
        width: 1200,
        height: 630,
        alt: "AxoraWeb Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AxoraWeb Services | Web, Mobile, Ecommerce & AI",
    description:
      "Discover AxoraWeb’s professional services — web development, mobile apps, ecommerce solutions, and AI integrations.",
    images: ["https://aiaxoraweb.vercel.app/services.jpg"],
  },
  alternates: {
    canonical: "https://aiaxoraweb.vercel.app/services",
  },
};




export default function WebsiteDesignPage() {
  return (
    <ServicesPage  />
  );
}
