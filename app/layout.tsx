import type { Metadata } from "next";
import { Oswald, Barlow } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Iron Kettle USA | This Ain't Your Mamma's Burger Press",
  description:
    "Commercial-grade 304 stainless steel smash burger press. Heavy. Rugged. Built to last. Pre-order the first run now.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${oswald.variable} ${barlow.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
