import type { Metadata } from "next";
import { Geist, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const title = "Abror Asralov — Software Engineer";
const description =
  "Software engineer building web applications and engineering tools. Explore Storm, a local-first HTTP performance testing tool, and more projects by Abror Asralov.";
export const metadata: Metadata = {
  metadataBase: new URL("https://asralov.vercel.app"),
  title,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: "Abror Asralov" }],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
