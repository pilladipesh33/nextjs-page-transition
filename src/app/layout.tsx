import type { Metadata } from "next";
import { Inter, Martian_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/navbar";

const MartianMono = Martian_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Next.js Page transition",
  description: "Using framer-motion and template in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={MartianMono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
