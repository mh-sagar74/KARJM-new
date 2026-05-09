"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { COLORS } from "../../constants";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "calc(100dvh - 70px)",
    minHeight: "calc(500px - 70px)",
    overflow: "hidden",
    marginTop: "70px",
  };

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(135deg, ${COLORS.primary}dd 0%, ${COLORS.primary}99 50%, #004d2e 100%)`,
    transform: loaded ? "scale(1)" : "scale(1.1)",
    transition: "transform 8s ease-out",
  };

  const overlayPattern = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `
      radial-gradient(circle at 20% 80%, ${COLORS.secondary}15 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${COLORS.secondary}10 0%, transparent 40%),
      radial-gradient(circle at 40% 40%, ${COLORS.secondary}08 0%, transparent 30%)
    `,
    animation: "pulse 8s ease-in-out infinite",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 10,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "clamp(2rem, 6vw, 4rem)",
    fontWeight: "700",
    color: COLORS.white,
    marginBottom: "20px",
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(30px)",
    transition: "all 0.8s ease-out",
    textShadow: "0 4px 20px rgba(0,0,0,0.3)",
    letterSpacing: "1px",
    fontFamily: "var(--font-amiri), serif",
  };

  const subtitleStyle = {
    fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
    color: COLORS.accent,
    maxWidth: "700px",
    marginBottom: "30px",
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(30px)",
    transition: "all 0.8s ease-out 0.2s",
    lineHeight: "1.6",
  };

  const ctaContainerStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(30px)",
    transition: "all 0.8s ease-out 0.4s",
    marginBottom: "60px",
  };

  const primaryButtonStyle = {
    backgroundColor: COLORS.secondary,
    color: COLORS.text,
    padding: "16px 36px",
    borderRadius: "50px",
    fontWeight: "700",
    fontSize: "1rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(212, 175, 55, 0.4)",
  };

  const secondaryButtonStyle = {
    backgroundColor: "transparent",
    color: COLORS.white,
    padding: "16px 36px",
    borderRadius: "50px",
    fontWeight: "600",
    fontSize: "1rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
    border: `2px solid ${COLORS.white}`,
    cursor: "pointer",
  };

  const decorLineStyle = {
    width: loaded ? "80px" : "0px",
    height: "4px",
    backgroundColor: COLORS.secondary,
    marginBottom: "20px",
    borderRadius: "2px",
    transition: "width 0.8s ease-out 0.6s",
  };

  const scrollIndicatorStyle = {
    position: "absolute",
    bottom: "clamp(20px, 5vh, 30px)",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    opacity: loaded ? 1 : 0,
    transition: "opacity 0.8s ease-out 1s",
    paddingBottom: "env(safe-area-inset-bottom, 10px)",
  };

  const scrollTextStyle = {
    color: COLORS.accent,
    fontSize: "0.875rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
  };

  const scrollIconStyle = {
    color: COLORS.secondary,
    animation: "bounceDown 2s ease-in-out infinite",
  };

  const arabicTextStyle = {
    position: "absolute",
    fontSize: "clamp(8rem, 20vw, 15rem)",
    color: COLORS.white,
    opacity: "0.03",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    fontFamily: "serif",
    letterSpacing: "10px",
  };

  return (
    <section style={containerStyle}>
      <div style={backgroundStyle} />
      <div style={overlayPattern} />

      <div style={arabicTextStyle}>﷽</div>

      <div style={contentStyle} className="hero-content">
        <div style={decorLineStyle} />
        <h1 style={titleStyle}>Khanjahan Ali (R:) Jame Masjid</h1>
        <p style={subtitleStyle}>
          A sanctuary of peace, faith, and unity. Join our community in worship,
          learning, and service to strengthen your spiritual journey.
        </p>

        <div style={ctaContainerStyle}>
          <Link
            href="/prayer-times"
            style={primaryButtonStyle}
            className="hero-cta-primary"
          >
            Prayer Times
          </Link>
          <Link
            href="/contact-us"
            style={secondaryButtonStyle}
            className="hero-cta-secondary"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div style={scrollIndicatorStyle}>
        <span style={scrollTextStyle}>Scroll</span>
        <ChevronDown size={32} style={scrollIconStyle} />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes bounceDown {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        .hero-cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.6) !important;
          background-color: #e5c04b !important;
        }
        .hero-cta-secondary:hover {
          background-color: ${COLORS.white} !important;
          color: ${COLORS.primary} !important;
        }
        @media (max-width: 640px) {
          .hero-content {
            padding-bottom: 50px;
            padding-top: 60px;
          }
        }
      `}</style>
    </section>
  );
}
