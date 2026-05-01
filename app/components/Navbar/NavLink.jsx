"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLORS } from "../../constants";

export default function NavLink({ href, label, onClick, isMobile = false }) {
  const pathName = usePathname();
  const isActive = pathName === href;

  const baseStyles = {
    position: "relative",
    fontSize: isMobile ? "1.25rem" : "1rem",
    fontWeight: "500",
    padding: isMobile ? "12px 0" : "8px 16px",
    cursor: "pointer",
    transition: "color 0.3s ease",
    textDecoration: "none",
    color: isActive ? COLORS.primary : COLORS.text,
  };

  const hoverStyles = {
    color: COLORS.primary,
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      style={baseStyles}
      className="nav-link"
    >
      {label}
      <span
        style={{
          position: "absolute",
          bottom: isMobile ? "8px" : "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: isActive ? "80%" : "0%",
          height: "2px",
          backgroundColor: COLORS.secondary,
          transition: "width 0.3s ease, opacity 0.3s ease",
          opacity: isActive ? 1 : 0,
        }}
        className="hover-underline"
      />
      <style jsx>{`
        .nav-link:hover {
          color: ${COLORS.primary};
        }
        .nav-link:hover .hover-underline {
          width: 80%;
          opacity: 1;
        }
      `}</style>
    </Link>
  );
}