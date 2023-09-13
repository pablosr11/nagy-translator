import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Logito from "./logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Együtt németül",
  description: "Learn German with us!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <div className=" pt-10">
            <Image className="mx-auto" alt="logo" src={Logito} />
          </div>
          {children}

          <div className="text-center text-sm">
            by{" "}
            <a className="underline" href="https://www.psiesta.com">
              @psiesta
            </a>{" "}
          </div>
        </div>

        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
