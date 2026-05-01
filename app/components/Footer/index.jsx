"use client";

import Link from "next/link";
import Image from "next/image";
import { COLORS, SITE_INFO, NAV_ITEMS } from "../../constants";

export default function Footer() {
  const footerStyle = {
    backgroundColor: COLORS.primary,
    padding: "60px 20px 30px",
    marginTop: "80px",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "40px",
    marginBottom: "40px",
  };

  const logoSectionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  const logoLinkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
  };

  const logoTextStyle = {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: COLORS.white,
  };

  const descStyle = {
    fontSize: "0.95rem",
    color: COLORS.accent,
    lineHeight: "1.6",
  };

  const sectionTitleStyle = {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: COLORS.secondary,
    marginBottom: "20px",
  };

  const linkStyle = {
    display: "block",
    fontSize: "0.95rem",
    color: COLORS.accent,
    textDecoration: "none",
    marginBottom: "12px",
    transition: "color 0.3s ease",
  };

  const bottomStyle = {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "20px",
    textAlign: "center",
  };

  const copyrightStyle = {
    fontSize: "0.875rem",
    color: COLORS.accent,
  };

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/karjm1980/" },
    { name: "WhatsApp", url: "https://wa.me/8801911935762" },
  ];

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle} className="footer-grid">
          <div style={logoSectionStyle}>
            <Link href="/" style={logoLinkStyle}>
              <Image
                src={SITE_INFO.logo}
                alt="KARJM Logo"
                width={50}
                height={50}
                style={{ objectFit: "contain" }}
              />
              <span style={logoTextStyle}>{SITE_INFO.shortName}</span>
            </Link>
            <p style={descStyle}>
              Serving the community with faith, knowledge, and compassion since 1980.
            </p>
          </div>

          <div>
            <h3 style={sectionTitleStyle}>Quick Links</h3>
            {NAV_ITEMS.map((item, index) => (
              <Link key={index} href={item.href} style={linkStyle} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <h3 style={sectionTitleStyle}>Connect</h3>
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                style={linkStyle}
                className="footer-link"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div style={bottomStyle}>
          <p style={copyrightStyle}>
            © 2025-{new Date().getFullYear()} {SITE_INFO.name}. All rights reserved.
          </p>
          <p style={{ ...copyrightStyle, marginTop: "12px" }}>
            Made with ❤️ by{" "}
            <Link 
              href="https://mominulhaquesagar.is-a.dev/" 
              target="_blank"
              style={{ color: COLORS.secondary, textDecoration: "none" }}
            >
              Mominul Haque
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer-link:hover {
          color: ${COLORS.secondary} !important;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}