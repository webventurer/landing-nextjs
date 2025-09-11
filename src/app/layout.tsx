import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Pages - Comparison Demo",
  description: "A Next.js project showcasing different landing page implementations and design comparisons",
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
