"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLORS, NAV_ITEMS, MORE_ITEMS } from "../../constants";
import Logo from "./Logo";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const pathName = usePathname();

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
    width: "100%",
    padding: "0 20px",
    height: "85px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "0",
    boxSizing: "border-box",
  };

  const navDesktopStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexShrink: 0,
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

            <div
              style={{
                position: "relative",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={() => setShowMore(true)}
              onMouseLeave={() => setShowMore(false)}
            >
              <span
                style={{
                  cursor: "pointer",
                  color: COLORS.text,
                  fontWeight: "500",
                  fontSize: "0.95rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 12px",
                }}
                className="more-btn"
              >
                More ▾
              </span>

              <div
                  style={{
                    position: "absolute",
                    top: "calc(100%)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: COLORS.white,
                    borderRadius: "12px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                    padding: "8px 0",
                    minWidth: "150px",
                    zIndex: 100,
                    border: "1px solid rgba(0,98,65,0.1)",
                    opacity: showMore ? 1 : 0,
                    transform: showMore ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-10px)",
                    pointerEvents: showMore ? "auto" : "none",
                    transition: "all 0.25s ease",
                  }}
                  className="dropdown-menu"
                >
                  {MORE_ITEMS.map((item, index) => {
                    const isActive = pathName === item.href;
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        style={{
                          display: "block",
                          padding: "12px 20px",
                          color: isActive ? COLORS.primary : COLORS.text,
                          textDecoration: "none",
                          fontSize: "0.95rem",
                          fontWeight: isActive ? "600" : "500",
                          transition: "all 0.2s ease",
                          borderLeft: isActive
                            ? `3px solid ${COLORS.secondary}`
                            : "3px solid transparent",
                        }}
                        className="dropdown-link"
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
            </div>

            <a href="/contact-us" style={ctaButtonStyle} className="cta-button">
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
        @media (max-width: 1100px) {
          .desktop-nav {
            display: none !important;
          }
          .menu-toggle {
            display: flex !important;
          }
          .navbar-container {
            padding: 0 16px !important;
          }
        }
        @media (min-width: 1101px) {
          .navbar-container {
            padding-left: 60px !important;
            padding-right: 60px !important;
          }
          .desktop-nav {
            gap: 6px !important;
          }
          .desktop-nav a {
            padding: 6px 10px !important;
            font-size: 0.9rem !important;
          }
          .cta-button {
            padding: 8px 16px !important;
            font-size: 0.85rem !important;
            margin-left: 8px !important;
          }
        }
        .cta-button:hover {
          background-color: ${COLORS.secondary} !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
        }
        .navbar-container {
          padding: 0 20px;
        }
        .more-btn:hover {
          background-color: ${COLORS.accent} !important;
        }
        .dropdown-link:hover {
          background-color: ${COLORS.accent} !important;
          color: ${COLORS.primary} !important;
          padding-left: 24px !important;
          transform: translateX(4px);
        }
      `}</style>
    </>
  );
}
