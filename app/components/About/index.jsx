"use client";

import Image from "next/image";
import { COLORS, ABOUT_DATA, SITE_INFO } from "../../constants";
import Section from "../Section";
import { Building2, Calendar, MapPin } from "lucide-react";

export default function About() {
  const sectionStyle = {
    ...Section({}).props.style,
    backgroundColor: COLORS.accent,
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "40px",
    alignItems: "center",
  };

  const contentStyle = {
    padding: "20px 0",
  };

  const titleStyle = {
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const descriptionStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: COLORS.text,
    marginBottom: "24px",
  };

  const statsStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    marginTop: "32px",
  };

  const statItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "16px 24px",
    backgroundColor: COLORS.white,
    borderRadius: "12px",
    boxShadow: "0 2px 12px rgba(0, 98, 65, 0.08)",
  };

  const statIconStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: COLORS.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const statLabelStyle = {
    fontSize: "0.875rem",
    color: COLORS.darkGray,
  };

  const statValueStyle = {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: COLORS.primary,
  };

  const imageContainerStyle = {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0, 98, 65, 0.2)",
    height: "400px",
  };

  const featureListStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "20px",
  };

  const featureStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    backgroundColor: "rgba(0, 98, 65, 0.1)",
    borderRadius: "20px",
    fontSize: "0.9rem",
    color: COLORS.primary,
  };

  return (
    <Section id="about">
      <div style={gridStyle} className="about-grid">
        <div style={contentStyle}>
          <h2 style={titleStyle}>
            <Building2 size={32} />
            About Our Mosque
          </h2>
          <p style={descriptionStyle}>{ABOUT_DATA.description}</p>
          
          <div style={featureListStyle}>
            {ABOUT_DATA.features.map((feature, index) => (
              <div key={index} style={featureStyle}>
                <span style={{ color: COLORS.secondary }}>✓</span>
                {feature}
              </div>
            ))}
          </div>

          <div style={statsStyle}>
            <div style={statItemStyle}>
              <div style={statIconStyle}>
                <Calendar size={24} color={COLORS.white} />
              </div>
              <div>
                <div style={statLabelStyle}>Established</div>
                <div style={statValueStyle}>{SITE_INFO.established}</div>
              </div>
            </div>
            <div style={statItemStyle}>
              <div style={statIconStyle}>
                <MapPin size={24} color={COLORS.white} />
              </div>
              <div>
                <div style={statLabelStyle}>Location</div>
                <div style={statValueStyle}>{SITE_INFO.location}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={imageContainerStyle}>
          <Image
            src="/insideMosque.png"
            alt="Inside of Khanjahan Ali Jame Masjid"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </Section>
  );
}