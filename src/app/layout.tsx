import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CONTACT_EMAIL, LINKEDIN_URL, SITE_NAME, SITE_URL } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Canonical URLs and og:url are set per page (see pageMetadata in lib/site.ts),
// so nothing here points every page at the homepage.
export const metadata: Metadata = {
  title: {
    default: "Aston Facilities Management | Integrated FM Solutions",
    template: "%s | Aston FM",
  },
  description:
    "Delivering innovative, technology-driven facilities management solutions that help organisations reduce costs, improve efficiency, and create better working environments across the UAE and international markets.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "Aston FM",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/opengraph-image`,
  email: CONTACT_EMAIL,
  description:
    "Lean, AI-enhanced facilities management consulting: ESG reporting, FM performance dashboards, cost-reduction reviews, bid support, energy advisory and contract mobilisation.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: ["AE", "GB", "Europe", "AU"],
  sameAs: [LINKEDIN_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
