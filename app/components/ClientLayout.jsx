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
    <ReactLenis root options={{ duration: 0.3, easing: (t) => t }}>
      <StyledJsxRegistry>
        <GluestackUIProvider>
          <Navbar />
          <main className="pt-[70px] md:pt-[90px] lg:pt-[100px] px-[20px] md:px-[60px]">
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
