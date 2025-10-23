import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/Toaster";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rafi Mufadhal Difany — Senior Frontend Engineer & UX Writer",
  description:
    "Portfolio of Rafi Mufadhal Difany, a senior frontend engineer crafting motion-rich experiences with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.",
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
    <html lang="en">
      <body
        className={`${firaCode.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
