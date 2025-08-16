import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import CookieConsent from "@/components/cookie-consent";
import dynamic from "next/dynamic";
import Toaster from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axorawebsolution.com"),
  title: {
    default:
      "Axora Web Solution - Professional Web Development & Digital Services",
    template: "%s | Axora Web Solution",
  },
  description:
    "Leading web development company offering custom websites, mobile apps, e-commerce solutions, and digital marketing services. Serving international clients with cutting-edge technology and professional expertise.",
  keywords: [
    "web development",
    "mobile app development",
    "e-commerce solutions",
    "digital marketing",
    "custom websites",
    "responsive design",
    "SEO optimization",
    "professional web services",
    "international web development",
    "Pakistan web development company",
  ],
  authors: [{ name: "Axora Web Solution" }],
  creator: "Axora Web Solution",
  publisher: "Axora Web Solution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://axorawebsolution.com",
    siteName: "Axora Web Solution",
    title:
      "Professional Web Development & Digital Services | Axora Web Solution",
    description:
      "Leading web development company offering custom websites, mobile apps, e-commerce solutions, and digital marketing services worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Axora Web Solution - Professional Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Web Development & Digital Services | Axora Web Solution",
    description:
      "Leading web development company offering custom websites, mobile apps, e-commerce solutions, and digital marketing services worldwide.",
    images: ["/og-image.jpg"],
    creator: "@axorawebsolution",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://axorawebsolution.com",
  },
  category: "technology",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        Preconnect to external domains
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Axora Web Solution",
              url: "https://axorawebsolution.com",
              logo: "https://axorawebsolution.com/logo.png",
              description:
                "Professional web development and digital services company serving international clients",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-324-523-7429",
                contactType: "customer service",
                availableLanguage: ["English", "Urdu"],
                areaServed: "Worldwide",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
                addressRegion: "Punjab",
                addressLocality: "Lahore",
              },
              sameAs: [
                "https://www.facebook.com/axorawebsolution",
                "https://www.linkedin.com/company/axorawebsolution",
                "https://twitter.com/axorawebsolution",
              ],
              foundingDate: "2020",
              numberOfEmployees: "10-50",
              slogan: "Transforming Ideas into Digital Reality",
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Toaster /> {/* Mount once here */}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
