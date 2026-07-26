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
    default: "MJ Adom Commodities & Investments — Trading Commodities. Creating Value.",
    template: "%s · MJ Adom Commodities & Investments",
  },
  description:
    "A Ghana-based, diversified commodities and investment company — active in cocoa trading, licensed for gold, and building toward a five-year plan across the commodities value chain.",
  keywords: [
    "commodities trading Ghana",
    "cocoa trading Ghana",
    "gold buying Ghana",
    "COCOBOD licensed buyer",
    "Ghana Gold Board",
    "MJ Adom",
  ],
  icons: {
    icon: "/mja-logo.png",
    apple: "/mja-logo.png",
  },
  openGraph: {
    title: "MJ Adom Commodities & Investments",
    description:
      "Trading Commodities. Creating Value. Building Prosperity. A diversified commodities and investment company building across Africa.",
    type: "website",
    locale: "en_GH",
    siteName: "MJ Adom Commodities & Investments",
    images: [
      {
        url: "/mja-logo.png",
        width: 1254,
        height: 1254,
        alt: "MJ Adom Commodities & Investments logo",
      },
    ],
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
