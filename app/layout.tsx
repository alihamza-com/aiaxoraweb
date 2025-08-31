import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import CookieConsent from "@/components/cookie-consent";
import Toaster from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiaxoraweb.vercel.app"),
  title: {
    default: "AxoraWeb - Professional Web, Mobile & AI Solutions",
    template: "%s | AxoraWeb",
  },
  description:
    "AxoraWeb is a leading web development, mobile apps, ecommerce, and AI solutions provider. Serving international clients with scalable, secure, and innovative digital products.",
  keywords: [
    "web development",
    "mobile app development",
    "ecommerce solutions",
    "digital marketing",
    "AI integration services",
    "custom software development",
    "responsive website design",
    "professional web services",
    "SaaS solutions",
    "business automation tools"
  ],
  authors: [{ name: "AxoraWeb" }],
  creator: "AxoraWeb",
  publisher: "AxoraWeb",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiaxoraweb.vercel.app",
    siteName: "AxoraWeb",
    title: "AxoraWeb - Web, Mobile, Ecommerce & AI Solutions",
    description: "Leading web development, mobile app, ecommerce, and AI solutions provider.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AxoraWeb Professional Web & Mobile Development"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AxoraWeb - Web, Mobile & AI Solutions",
    description: "Professional web development, mobile apps, ecommerce, and AI solutions.",
    images: ["/og-image.jpg"],
    creator: "@axoraweb",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://aiaxoraweb.vercel.app" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AxoraWeb",
              url: "https://aiaxoraweb.vercel.app",
              logo: "https://aiaxoraweb.vercel.app/logo.png",
              description: "Professional web, mobile, ecommerce & AI solutions provider.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-324-523-7429",
                contactType: "customer service",
                availableLanguage: ["English","Urdu"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
                addressRegion: "Punjab",
                addressLocality: "Lahore",
              },
              sameAs: [
                "https://www.facebook.com/aiaxoraweb",
                "https://www.linkedin.com/company/aiaxoraweb",
                "https://twitter.com/aiaxoraweb",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navigation />
          {children}
          <Toaster />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
