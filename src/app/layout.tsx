import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { site } from "@/lib/site";

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
  icons: {
    icon: "/images/existing/logo/konect-logo.png",
    shortcut: "/images/existing/logo/konect-logo.png",
    apple: "/images/existing/logo/konect-logo.png",
  },
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
      </body>
    </html>
  );
}
