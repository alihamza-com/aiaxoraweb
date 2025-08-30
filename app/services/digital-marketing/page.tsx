import { Metadata } from "next";

import DigitalMarketingClient from "./digitalmarketing-client";

export const metadata = {
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
};

export default function DigitalMarketingPageComponent() {
  return (
    <DigitalMarketingClient />
  );
}
