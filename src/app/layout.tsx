import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const NeoSansAr = Cairo({
  variable: "--font-Cairo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body dir="rtl" className={`${NeoSansAr.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
