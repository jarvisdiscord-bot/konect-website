import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { site } from "@/lib/site";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Konect — CCTV, Access Control & Security Systems in Mumbai",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "CCTV installation Mumbai",
    "security camera installation Mumbai",
    "CCTV AMC Mumbai",
    "biometric access control Mumbai",
    "society CCTV installation",
    "IP camera installation services",
    "home automation Mumbai",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "Konect — Mumbai's Security & Surveillance Partner Since 2010",
    description: site.description,
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Konect" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Konect — Security & Surveillance in Mumbai",
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  // Google Search Console: set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel to
  // the token from the Search Console "HTML tag" method to verify the domain.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  // Favicon is served from src/app/icon.svg (square, branded).
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <SiteFrame>{children}</SiteFrame>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
