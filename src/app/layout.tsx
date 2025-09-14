import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Page Patterns - Next.js Showcase",
  description: "Compare different architectural patterns for building landing pages with Next.js, React, and modern CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
