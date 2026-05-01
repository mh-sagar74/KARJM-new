"use client";

import ReactLenis from "@studio-freight/react-lenis";
import CustomCursor from "@/components/customCursor/CustomCursor";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import StyledJsxRegistry from "../registry";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollUpButton from "@/components/scrollUpButton/ScrollUpButton";

export default function ClientLayout({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      <StyledJsxRegistry>
        <GluestackUIProvider>
          <Navbar />
          <main className="px-0 md:px-8">
            {children}
          </main>
          <ScrollUpButton />
          <Footer />
        </GluestackUIProvider>
      </StyledJsxRegistry>
      <CustomCursor />
    </ReactLenis>
  );
}
