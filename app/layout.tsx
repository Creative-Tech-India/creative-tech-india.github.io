import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: "Creative Technology India | Directory & Index",
  description:
    "An open directory of studios, experimental labs, collectives, and artists working with creative code, physical computing, and new media across India.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Creative Technology India",
    description:
      "An open directory of studios, experimental labs, collectives, and artists working with creative code, physical computing, and new media across India.",
    url: "https://creativetechindia.net",
    siteName: "Creative Technology India",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ececed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
