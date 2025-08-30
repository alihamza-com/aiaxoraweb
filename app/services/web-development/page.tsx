
import WebDevelopmentPage from "./webdevelopment-client";
import type { Metadata } from "next";

// app/web-deveservices/web-development(or page.tsx)

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
};




export default function WebsiteDesignPage() {
  return (
   <WebDevelopmentPage />
  );
}