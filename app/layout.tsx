// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata website
export const metadata: Metadata = {
  title: "Company Profile",
  description: "Company profile website built with Next.js & Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen bg-white text-gray-900`}
      >
        {/* Header selalu di atas */}
        <Header />

        {/* Main Content - hapus container dan padding untuk full width */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Footer selalu di bawah */}
        <Footer />
      </body>
    </html>
  );
}