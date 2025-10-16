"use client";

import React, { useState, useEffect } from 'react';

const lerp = (a, b, t) => a + (b - a) * t;

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const cursorRef = React.useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;

    const animateCursor = () => {
      cursorRef.current.x = lerp(cursorRef.current.x, mousePosition.x, 0.1);
      cursorRef.current.y = lerp(cursorRef.current.y, mousePosition.y, 0.1);

      const cursorElement = document.getElementById('custom-cursor-follower');
      if (cursorElement) {
        cursorElement.style.transform = `translate3d(${cursorRef.current.x - 6}px, ${cursorRef.current.y - 6}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);
  return (
    <div
      id="custom-cursor-follower"
      className="fixed top-0 left-0 w-[0px] h-[0px] lg:w-[10px] lg:h-[10px] bg-[#006830] rounded-full pointer-events-none z-[9999] opacity-50 transition-opacity duration-300"
    />
  );
};

export default CustomCursor;
