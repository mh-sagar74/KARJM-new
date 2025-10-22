"use client";

import { motion } from "framer-motion";
import { ArrowBigUpDash } from 'lucide-react';
import { UseScrollVisibility } from "../customScrollDown/CustomScrollDown";
import { useLenis } from "@studio-freight/react-lenis";

export default function ScrollUpButton() {
  const isVisible = UseScrollVisibility();
  const lenis = useLenis();

  const handleArrowButton = () => {
    lenis?.scrollTo(0, { duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3) });
  }

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleArrowButton}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 bg-[#006830] text-white p-2 rounded-full"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 0.6, repeat: Infinity,
          repeatDelay: 2, ease: "easeInOut"
        }}
      >
        <ArrowBigUpDash />
      </motion.div>
    </motion.button>
  )
}
