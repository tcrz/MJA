import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://mjadom.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MJ Adom Commodities & Investments - Trading Commodities. Creating Value.",
    template: "%s · MJ Adom Commodities & Investments",
  },
  description:
    "A Ghana-based, diversified commodities and investment company - active in cocoa trading, licensed for gold, and building toward a five-year plan across the commodities value chain.",
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
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
