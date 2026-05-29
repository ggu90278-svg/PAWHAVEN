import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_NAME} | Premium Pet Products OEM / ODM Supplier`,
  description:
    "Premium pet products for global brands, distributors, and retailers. OEM / ODM customization, private label, and custom packaging support.",
  keywords: [
    "pet products",
    "OEM pet products",
    "ODM pet products",
    "private label pet products",
    "pet product supplier",
    "pet beds",
    "pet toys",
    "grooming tools",
    "global export",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: `${SITE_NAME} | Premium Pet Products OEM / ODM Supplier`,
    description:
      "Premium pet products for global brands with OEM / ODM customization, private label, and custom packaging support.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1450778862540-8aa6e73c5e71?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "PAWHAVEN - Global Pet Product Supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Premium Pet Products OEM / ODM Supplier`,
    description:
      "Premium pet products for global brands with OEM / ODM customization support.",
    images: [
      "https://images.unsplash.com/photo-1450778862540-8aa6e73c5e71?w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} translate="no">
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
