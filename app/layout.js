"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "@/app/globals.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import StyledJsxRegistry from "./registry";
import Navbar from "./components/Navbar";
import ReactLenis from "@studio-freight/react-lenis";
import CustomCursor from "@/components/customCursor/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <ReactLenis root options={{ duration: 0.8, easing: (t) => t * (2 - t) }}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <StyledJsxRegistry>
            <GluestackUIProvider>
              <Navbar />
              <main className="pt-[70px] md:pt-[90px] lg:pt-[100px] px-[20px] md:px-[60px]">
                {children}
              </main>
            </GluestackUIProvider>
          </StyledJsxRegistry>
          <CustomCursor />
        </body>
      </html>
    </ReactLenis>
  );
}
