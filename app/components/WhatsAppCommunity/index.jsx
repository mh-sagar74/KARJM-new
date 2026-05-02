"use client";

import Image from "next/image";
import Link from "next/link";
import { COLORS, WHATSAPP_DATA } from "../../constants";
import Section from "../Section";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function WhatsAppCommunity() {
  const sectionStyle = {
    background: `linear-gradient(135deg, ${COLORS.primary} 0%, #004d2e 100%)`,
    position: "relative",
    overflow: "hidden",
  };

  const patternStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(circle at 10% 20%, ${COLORS.secondary}10 0%, transparent 40%),
      radial-gradient(circle at 90% 80%, ${COLORS.secondary}08 0%, transparent 40%)
    `,
    pointerEvents: "none",
  };

  const contentStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "40px",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  };

  const textContentStyle = {
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "nowrap",
    whiteSpace: "nowrap",
  };

  const iconWrapperStyle = {
    display: "inline-flex",
    alignItems: "center",
    flexShrink: 0,
  };

  const descStyle = {
    fontSize: "1.1rem",
    color: "#F9F7F2",
    marginBottom: "32px",
    lineHeight: "1.7",
    maxWidth: "500px",
  };

  const qrContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  };

  const qrBoxStyle = {
    width: "200px",
    height: "240px",
    backgroundColor: COLORS.white,
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
    padding: "12px",
    position: "relative",
  };

  const qrPlaceholderStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    color: COLORS.darkGray,
    textAlign: "center",
  };

  const scanTextStyle = {
    fontSize: "0.75rem",
    color: COLORS.primary,
    fontWeight: "600",
    marginTop: "8px",
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: COLORS.secondary,
    color: COLORS.text,
    padding: "14px 28px",
    borderRadius: "50px",
    fontWeight: "700",
    fontSize: "1rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
  };

  const orTextStyle = {
    color: COLORS.accent,
    fontSize: "0.9rem",
    marginTop: "16px",
  };

  return (
    <Section
      id="whatsapp"
      backgroundColor="transparent"
      className="whatsapp-section"
      style={sectionStyle}
    >
      <div style={patternStyle} />

      <div style={contentStyle} className="whatsapp-content">
        <div style={textContentStyle}>
          <h2 style={titleStyle} className="whatsapp-title">
            <span style={iconWrapperStyle}>
              <MessageCircle size={32} />
            </span>
            <span>{WHATSAPP_DATA.title}</span>
          </h2>
          <p style={descStyle} className="whatsapp-desc">
            {WHATSAPP_DATA.description}
          </p>
        </div>

        <div style={qrContainerStyle}>
          <div style={qrBoxStyle}>
            <div style={qrPlaceholderStyle}>
              <Image
                src="/wp_qr_code.png"
                alt="WhatsApp QR Code"
                width={164}
                height={164}
                style={{ objectFit: "contain" }}
              />
              <span style={scanTextStyle}>Scan to Join</span>
            </div>
          </div>

          <Link
            href={WHATSAPP_DATA.groupLink}
            style={buttonStyle}
            target="_blank"
            className="whatsapp-btn"
          >
            {WHATSAPP_DATA.ctaText}
            <ArrowRight size={20} />
          </Link>

          <span style={orTextStyle}>or click the button above</span>
        </div>
      </div>

      <style jsx>{`
        .whatsapp-section {
          background: transparent !important;
        }
        .whatsapp-title {
          justify-content: center;
        }
        .whatsapp-desc {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 768px) {
          .whatsapp-content {
            grid-template-columns: 1fr 1fr !important;
          }
          .whatsapp-title {
            justify-content: flex-start !important;
          }
          .whatsapp-desc {
            text-align: left !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
        }
        .whatsapp-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.4) !important;
          background-color: #e5c04b !important;
        }
      `}</style>
    </Section>
  );
}
