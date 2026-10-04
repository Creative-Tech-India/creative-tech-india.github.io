import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://creativetechindia.net"),
  title: {
    default: "Creative Tech India",
    template: "%s | Creative Tech India",
  },
  description:
    "An open directory of studios, experimental labs, collectives, and artists working with creative code, physical computing, and new media across India.",
  applicationName: "Creative Tech India",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Creative Tech India",
    description:
      "An open directory of studios, experimental labs, collectives, and artists working with creative code, physical computing, and new media across India.",
    url: "https://creativetechindia.net",
    siteName: "Creative Tech India",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Creative Tech India",
    description:
      "An open directory of studios, experimental labs, collectives, and artists working with creative code, physical computing, and new media across India.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ececed",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Creative Tech India",
  alternateName: [
    "Creative Technology India",
    "creative tech india",
    "CTI",
  ],
  url: "https://creativetechindia.net",
  description:
    "An open directory of studios, experimental labs, collectives, and artists working with creative code, physical computing, and new media across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-48.png" type="image/png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
