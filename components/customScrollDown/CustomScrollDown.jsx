"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";
import { useLenis } from '@studio-freight/react-lenis';

export function CustomScrollDown({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}

export function UseScrollVisibility() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = lenis?.scroll || window.scrollY;
      setVisible(scrollY > 300);
    }
    lenis?.on("scroll", handleScroll);
    handleScroll();
    return () => lenis?.off("scroll", handleScroll);
  }, [lenis]);
  return visible;
}
