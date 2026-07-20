import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const SITE_URL = "https://mjadom.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MJ Adom Cocoa Trading — We don't just buy cocoa, we build futures",
    template: "%s · MJ Adom Cocoa Trading",
  },
  description:
    "A COCOBOD-licensed cocoa buying and export company in Ghana, built on ethical sourcing, quality, and farmer partnership — from a license today to a legacy tomorrow.",
  keywords: [
    "cocoa trading Ghana",
    "COCOBOD licensed buyer",
    "cocoa export",
    "ethical cocoa sourcing",
    "MJ Adom",
  ],
  openGraph: {
    title: "MJ Adom Cocoa Trading",
    description:
      "Ethical sourcing. Quality you can trust. Farmer partnerships built to last. Ghana's next leading cocoa house.",
    type: "website",
    locale: "en_GH",
    siteName: "MJ Adom Cocoa Trading",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
