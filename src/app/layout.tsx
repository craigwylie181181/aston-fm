import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Aston Facilities Management | Integrated FM Solutions",
    template: "%s | Aston FM",
  },
  description:
    "Delivering innovative, technology-driven facilities management solutions that help organisations reduce costs, improve efficiency, and create better working environments across the UAE and international markets.",
  metadataBase: new URL("https://www.aston-fm.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.aston-fm.com",
    siteName: "Aston Facilities Management",
    title: "Aston Facilities Management | Integrated FM Solutions",
    description:
      "Expert FM consulting, ESG reporting, and performance management for organisations across the UAE, Middle East, and international markets. AI-powered. Lean. Results-driven.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aston Facilities Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aston Facilities Management | Integrated FM Solutions",
    description:
      "Expert FM consulting, ESG reporting, and performance management across the UAE and international markets.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
