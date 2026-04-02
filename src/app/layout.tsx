import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aston Facilities Management | Integrated FM Solutions",
  description: "Delivering innovative, technology-driven facilities management solutions that help organisations reduce costs, improve efficiency, and create better working environments.",
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
