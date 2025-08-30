// app/mobile-apps/page.tsx
import type { Metadata } from "next";
import AIIntegrationsPage from "./aiintegrations-client";
export const metadata: Metadata = {
  title: "AI Integration Services | AxoraWeb - AI-Powered Solutions",
  description:
    "AxoraWeb provides professional AI integration services for websites, web apps, and business processes. Leverage AI to automate workflows, enhance productivity, and deliver intelligent solutions.",
  keywords: [
    "AI integration",
    "AI solutions",
    "AI-powered apps",
    "AI web development",
    "AI automation services",
    "machine learning integration",
    "business AI tools",
    "AxoraWeb AI services",
    "AI web apps development",
    "intelligent solutions"
  ],
  openGraph: {
    title: "AI Integration Services | AxoraWeb",
    description:
      "Integrate AI into your website, app, or business process with AxoraWeb’s expert AI solutions. Boost productivity and deliver smarter solutions.",
    url: "https://aiaxoraweb.vercel.app/ai-integration",
    siteName: "AxoraWeb",
    images: [
      {
        url: "https://aiaxoraweb.vercel.app/ai.jpg", // create a banner for this page
        width: 1200,
        height: 630,
        alt: "AI Integration Services by AxoraWeb",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Integration Services | AxoraWeb",
    description:
      "AxoraWeb delivers AI-powered web apps, automation, and smart business solutions to boost efficiency and innovation.",
    images: ["https://aiaxoraweb.vercel.app/ai.jpg"],
  },
  alternates: {
    canonical: "https://aiaxoraweb.vercel.app/ai-integration",
  },
};


export default function WebsiteDesignPage() {
  return (
   <AIIntegrationsPage />
  );
}
