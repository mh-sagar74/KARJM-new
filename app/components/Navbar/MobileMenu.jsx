"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { COLORS, NAV_ITEMS, SITE_INFO } from "../../constants";
import NavLink from "./NavLink";

export default function MobileMenu({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (isOpen) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        setVisible(true);
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen, mounted]);

  if (!mounted) return null;

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    opacity: isAnimating ? 1 : 0,
    transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
    zIndex: 999,
    display: visible ? "block" : "none",
    backdropFilter: "blur(4px)",
  };

  const menuStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    width: "300px",
    maxWidth: "85vw",
    height: "100vh",
    backgroundColor: COLORS.white,
    transform: isAnimating 
      ? "translateX(0) scale(1)" 
      : "translateX(100%) scale(0.95)",
    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease",
    opacity: isAnimating ? 1 : 0,
    zIndex: 1000,
    boxShadow: "-8px 0 30px rgba(0, 0, 0, 0.2)",
    display: visible ? "flex" : "none",
    flexDirection: "column",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    borderBottom: `1px solid ${COLORS.accent}`,
  };

  const logoOnlyStyle = {
    display: "flex",
    alignItems: "center",
  };

  const closeButtonStyle = {
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: COLORS.text,
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "color 0.3s ease, transform 0.3s ease",
  };

  const navStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "8px",
  };

  const footerStyle = {
    padding: "20px",
    borderTop: `1px solid ${COLORS.accent}`,
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={menuStyle}>
        <div style={headerStyle}>
          <div style={logoOnlyStyle}>
            <Image
              src={SITE_INFO.logo}
              alt={`${SITE_INFO.shortName} logo`}
              width={40}
              height={40}
              style={{ objectFit: "contain" }}
            />
          </div>
          <button
            style={closeButtonStyle}
            onClick={onClose}
            className="close-btn"
          >
            ✕
          </button>
        </div>
        <nav style={navStyle}>
          {NAV_ITEMS.map((item, index) => (
            <div
              key={index}
              style={{
                animationDelay: isAnimating ? `${index * 0.1}s` : "0s",
              }}
              className="mobile-nav-item"
            >
              <NavLink
                href={item.href}
                label={item.label}
                onClick={onClose}
                isMobile
              />
            </div>
          ))}
        </nav>
        <div style={footerStyle}>
          <div style={{ textAlign: "center" }}>
            <span style={{ color: COLORS.secondary, fontSize: "0.875rem" }}>
              Welcome to
            </span>
            <div style={{ 
              color: COLORS.primary, 
              fontSize: "1.1rem", 
              fontWeight: "700",
              marginTop: "4px" 
            }}>
              {SITE_INFO.name}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .close-btn:hover {
          color: ${COLORS.primary};
          transform: rotate(90deg);
        }
        .mobile-nav-item {
          opacity: ${isAnimating ? 1 : 0};
          transform: ${isAnimating ? "translateX(0)" : "translateX(30px)"};
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
}