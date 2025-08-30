// app/mobile-apps/page.tsx
import type { Metadata } from "next";
import ContactPage from "./contactClient";

export const metadata: Metadata = {
  title: "Contact Us | AxoraWeb - Web, Mobile & Ecommerce Experts",
  description:
    "Get in touch with AxoraWeb today. Contact us for web development, mobile apps, ecommerce solutions, AI integrations, and custom software. Let’s build your next big project together.",
  keywords: [
    "contact AxoraWeb",
    "web development company contact",
    "mobile app development contact",
    "ecommerce development company contact",
    "hire software developers",
    "AI integration services contact",
    "custom software consultation",
    "AxoraWeb support",
    "business inquiries AxoraWeb",
    "tech partner contact",
  ],
  openGraph: {
    title: "Contact AxoraWeb | Web, Mobile & AI Solutions",
    description:
      "Reach out to AxoraWeb for professional web development, mobile apps, ecommerce platforms, and AI-powered digital solutions.",
    url: "https://aiaxoraweb.vercel.app/contact",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://aiaxoraweb.vercel.app/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact AxoraWeb",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AxoraWeb | Web, Mobile & Ecommerce Experts",
    description:
      "Contact AxoraWeb today to discuss your project. We deliver scalable web, mobile, ecommerce, and AI solutions.",
    images: ["https://aiaxoraweb.vercel.app/contact.jpg"],
  },
  alternates: {
    canonical: "https://aiaxoraweb.vercel.app/contact",
  },
};






export default function WebsiteDesignPage() {
  return (
    <  ContactPage/>
  );
}
