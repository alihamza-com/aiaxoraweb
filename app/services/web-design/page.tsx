
import WebDesignPage from "./webdesignClient";
import type { Metadata } from "next";

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
        url: "https://aiaxoraweb.vercel.app/webdesign.jpg", // create an image for this page
        width: 1200,
        height: 630,
        alt: "AxoraWeb - Website Design Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};




export default function WebsiteDesignPage() {
  return (
   <WebDesignPage />
  );
}