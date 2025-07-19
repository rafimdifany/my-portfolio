import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/Toaster";


const firaCode = Fira_Code({
   variable : "--font-fira-code",
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rafi Mufadhal Difany",
  description: "Sleepy Programmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased`}
      >
        {children}
      <Toaster/>
      </body>
    </html>
  );
}
