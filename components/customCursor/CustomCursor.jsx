"use client";

import { useState, useEffect, useRef } from 'react';
import { COLORS } from '../../app/constants';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorRef = useRef({ x: 0, y: 0 });
  const dotRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isLink = target.tagName === 'A' || target.tagName === 'BUTTON' || 
                     target.closest('a') || target.closest('button') ||
                     target.classList.contains('cursor-pointer') ||
                     target.classList.contains('footer-link') ||
                     target.classList.contains('phone-link');
      setIsHovering(!!isLink);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    let animationFrameId;

    const animateCursor = () => {
      // Smooth lerp for main cursor (dot)
      dotRef.current.x += (mouseRef.current.x - dotRef.current.x) * 0.15;
      dotRef.current.y += (mouseRef.current.y - dotRef.current.y) * 0.15;

      // Slower lerp for trailing circle
      cursorRef.current.x += (mouseRef.current.x - cursorRef.current.x) * 0.08;
      cursorRef.current.y += (mouseRef.current.y - cursorRef.current.y) * 0.08;

      const dotElement = document.getElementById('cursor-dot');
      const circleElement = document.getElementById('cursor-circle');

      if (dotElement) {
        dotElement.style.transform = `translate3d(${dotRef.current.x - 4}px, ${dotRef.current.y - 4}px, 0)`;
      }
      
      if (circleElement) {
        const scale = isHovering ? 1.5 : 1;
        const borderColor = isHovering ? 'transparent' : COLORS.secondary;
        const backgroundColor = isHovering ? `${COLORS.secondary}30` : 'transparent';
        circleElement.style.transform = `translate3d(${cursorRef.current.x - 16}px, ${cursorRef.current.y - 16}px, 0) scale(${scale})`;
        circleElement.style.borderColor = borderColor;
        circleElement.style.backgroundColor = backgroundColor;
      }

      animationFrameId = requestAnimationFrame(animateCursor);
    };

    animateCursor();

    // Hide cursor when mouse leaves window
    const handleMouseLeave = () => setIsVisible(false);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', () => setIsVisible(true));
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, isHovering]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main dot cursor */}
      <div
        id="cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: COLORS.secondary,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate3d(-100px, -100px, 0)',
          transition: 'width 0.2s, height 0.2s',
        }}
        className="cursor-dot"
      />
      
      {/* Trailing circle */}
      <div
        id="cursor-circle"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
border: `2px solid ${COLORS.secondary}`,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 99998,
        transform: 'translate3d(-100px, -100px, 0)',
        backgroundColor: 'transparent',
        transition: 'transform 0.15s ease-out, background-color 0.2s, border-color 0.2s',
        }}
        className="cursor-circle"
      />

      <style jsx>{`
        @media (max-width: 1023px) {
          .cursor-dot, .cursor-circle {
            display: none !important;
          }
        }
        .cursor-dot:hover, .cursor-circle:hover {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;