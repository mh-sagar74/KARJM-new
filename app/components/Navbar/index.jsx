"use client";

import { useState, useEffect } from "react";
import { COLORS, NAV_ITEMS } from "../../constants";
import Logo from "./Logo";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: isScrolled ? COLORS.white : COLORS.white,
    boxShadow: isScrolled
      ? "0 2px 20px rgba(0, 98, 65, 0.1)"
      : "0 1px 3px rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s ease",
    transform: isScrolled ? "translateY(0)" : "translateY(0)",
  };

  const containerStyle = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 24px",
    height: isScrolled ? "70px" : "85px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "height 0.3s ease",
  };

  const navDesktopStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const menuButtonStyle = {
    display: "none",
    background: "none",
    border: `2px solid ${COLORS.primary}`,
    borderRadius: "8px",
    padding: "8px 12px",
    cursor: "pointer",
    flexDirection: "column",
    gap: "5px",
    transition: "all 0.3s ease",
  };

  const menuLineStyle = {
    width: "24px",
    height: "2px",
    backgroundColor: COLORS.primary,
    transition: "all 0.3s ease",
  };

  const ctaButtonStyle = {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    padding: "10px 24px",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "0.9rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
    marginLeft: "16px",
  };

  return (
    <>
      <header style={navbarStyle} className="navbar">
        <div style={containerStyle} className="navbar-container">
          <Logo />

          <nav style={navDesktopStyle} className="desktop-nav">
            {NAV_ITEMS.map((item, index) => (
              <NavLink key={index} href={item.href} label={item.label} />
            ))}
            <a
              href="/contact-us"
              style={ctaButtonStyle}
              className="cta-button"
            >
              Donate
            </a>
          </nav>

          <button
            style={menuButtonStyle}
            className="menu-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span style={menuLineStyle} />
            <span style={menuLineStyle} />
            <span style={menuLineStyle} />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <style jsx>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .menu-toggle {
            display: flex !important;
          }
        }
        .cta-button:hover {
          background-color: ${COLORS.secondary} !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
        }
      `}</style>
    </>
  );
}