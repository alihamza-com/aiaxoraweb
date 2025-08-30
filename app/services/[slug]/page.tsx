// app/mobile-apps/page.tsx
import type { Metadata } from "next";
import ServiceDetailPage from "./servicesClient";
export const metadata: Metadata = {
  title: "Professional Web, Mobile & Ecommerce Development Services | AxoraWeb",
  description:
    "AxoraWeb provides expert web development, mobile app solutions, ecommerce platforms, and AI integrations. From startups to enterprises, we deliver scalable, secure, and high-performing digital solutions tailored to your business needs.",
  keywords: [
    "web development services",
    "mobile app development",
    "ecommerce development",
    "custom software development",
    "AI integration services",
    "cloud solutions",
    "SaaS development",
    "UI/UX design services",
    "AxoraWeb services",
    "enterprise software solutions",
  ],
  openGraph: {
    title: "Web, Mobile & Ecommerce Development Services | AxoraWeb",
    description:
      "Discover AxoraWeb’s full range of services including custom web development, mobile apps, ecommerce solutions, and AI-powered software.",
    url: "https://aiaxoraweb.vercel.app/services",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://aiaxoraweb.vercel.app/services.jpg",
        width: 1200,
        height: 630,
        alt: "AxoraWeb Professional Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Development Services | AxoraWeb",
    description:
      "AxoraWeb delivers expert web, mobile, ecommerce, and AI solutions for businesses worldwide.",
    images: ["https://aiaxoraweb.vercel.app/services.jpg"],
  },
  alternates: {
    canonical: "https://aiaxoraweb.vercel.app/services",
  },
};



export default function WebsiteDesignPage({ params }: { params: { slug: string } }) {
  return (
    <ServiceDetailPage params={params} />
  );
}
