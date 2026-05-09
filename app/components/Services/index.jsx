"use client";

import { COLORS, SERVICES_DATA } from "../../constants";
import Section from "../Section";
import { GraduationCap, UsersRound, HandHeart, Gem } from "lucide-react";

const iconMap = {
  GraduationCap,
  UsersRound,
  HandHeart,
  Gem,
};

export default function Services() {
  const titleStyle = {
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
    fontWeight: "700",
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: "12px",
    fontFamily: "var(--font-amiri), serif",
  };

  const subtitleStyle = {
    fontSize: "1rem",
    color: COLORS.darkGray,
    textAlign: "center",
    marginBottom: "48px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  };

  const cardStyle = {
    backgroundColor: COLORS.white,
    borderRadius: "16px",
    padding: "32px 24px",
    textAlign: "center",
    transition: "all 0.3s ease",
    border: "1px solid rgba(0, 98, 65, 0.1)",
    boxShadow: "0 4px 20px rgba(0, 98, 65, 0.06)",
  };

  const iconContainerStyle = {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    backgroundColor: COLORS.accent,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  };

  const cardTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: "12px",
  };

  const cardDescStyle = {
    fontSize: "0.95rem",
    color: COLORS.darkGray,
    lineHeight: "1.6",
  };

  return (
    <Section id="services">
      <h2 style={titleStyle}>Our Services & Programs</h2>
      <p style={subtitleStyle}>
        We offer a variety of programs and services to support the spiritual, educational, and social needs of our community.
      </p>

      <div style={gridStyle}>
        {SERVICES_DATA.map((service) => {
          const IconComponent = iconMap[service.icon];
          return (
            <div key={service.id} style={cardStyle} className="service-card">
              <div style={iconContainerStyle}>
                <IconComponent size={32} color={COLORS.primary} />
              </div>
              <h3 style={cardTitleStyle}>{service.title}</h3>
              <p style={cardDescStyle}>{service.description}</p>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 98, 65, 0.15) !important;
        }
      `}</style>
    </Section>
  );
}