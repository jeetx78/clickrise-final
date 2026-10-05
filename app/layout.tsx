import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clickrise.in"),

  title: {
    default: "ClickRise Productions — We Help Brands Rise.",
    template: "%s — ClickRise Productions",
  },

  description:
    "ClickRise Productions is a digital growth partner for brands across Delhi NCR. Performance marketing, social media, creative production and conversion-focused web experiences.",

  keywords: [
    "ClickRise",
    "ClickRise Productions",
    "digital marketing agency Delhi NCR",
    "digital marketing agency Noida",
    "performance marketing agency",
    "social media marketing",
    "creative production",
    "web design",
    "Google Ads",
    "Meta Ads",
    "lead generation",
  ],

  authors: [{ name: "ClickRise Productions" }],
  creator: "ClickRise Productions",
  publisher: "ClickRise Productions",

  alternates: {
    canonical: "https://www.clickrise.in",
  },

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "ClickRise Productions — We Help Brands Rise.",
    description:
      "Strategy, creative and digital growth for brands ready to move.",
    url: "https://www.clickrise.in",
    siteName: "ClickRise Productions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero-reel-poster.svg",
        width: 1200,
        height: 630,
        alt: "ClickRise Productions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ClickRise Productions — We Help Brands Rise.",
    description:
      "Strategy, creative and digital growth for brands ready to move.",
    images: ["/hero-reel-poster.svg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}