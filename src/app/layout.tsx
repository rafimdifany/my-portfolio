import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/Toaster";
import { AppProviders } from "@/components/providers/AppProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rafi Mufadhal Difany — Senior Frontend Engineer & UX Writer",
  description:
    "Portfolio of Rafi Mufadhal Difany, a senior frontend engineer crafting motion-rich experiences with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.",
  metadataBase: new URL("https://rafi-portfolio.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rafi Mufadhal Difany — Senior Frontend Engineer & UX Writer",
    description:
      "Crafting polished web experiences with motion-first craft and purposeful UX writing.",
    url: "https://rafi-portfolio.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafi Mufadhal Difany — Senior Frontend Engineer & UX Writer",
    description:
      "Motion-rich experiences powered by Next.js, TypeScript, Tailwind CSS, and shadcn/ui.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <AppProviders>
          {children}
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
