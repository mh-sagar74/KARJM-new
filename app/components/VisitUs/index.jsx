"use client";

import { COLORS, CONTACT_DATA, SITE_INFO } from "../../constants";
import Section from "../Section";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), { 
  ssr: false,
  loading: () => (
    <div style={{ 
      width: "100%", 
      height: "300px", 
      backgroundColor: COLORS.accent, 
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <span style={{ color: COLORS.darkGray }}>Loading map...</span>
    </div>
  )
});

const iconMap = {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
};

export default function VisitUs() {
  const titleStyle = {
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
    fontWeight: "700",
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: "12px",
  };

  const subtitleStyle = {
    fontSize: "1rem",
    color: COLORS.darkGray,
    textAlign: "center",
    marginBottom: "48px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "32px",
  };

  const contactGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
  };

  const contactCardStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    padding: "20px",
    backgroundColor: COLORS.white,
    borderRadius: "12px",
    border: "1px solid rgba(0, 98, 65, 0.1)",
    boxShadow: "0 2px 12px rgba(0, 98, 65, 0.06)",
    transition: "all 0.3s ease",
  };

  const iconWrapperStyle = {
    width: "48px",
    height: "48px",
    minWidth: "48px",
    borderRadius: "12px",
    backgroundColor: COLORS.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const contactTitleStyle = {
    fontSize: "0.875rem",
    color: COLORS.darkGray,
    marginBottom: "4px",
  };

  const contactContentStyle = {
    fontSize: "1rem",
    fontWeight: "600",
    color: COLORS.text,
    wordBreak: "break-word",
    overflowWrap: "break-word",
    maxWidth: "100%",
  };

  const mapContainerStyle = {
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0, 98, 65, 0.1)",
    height: "100%",
    minHeight: "300px",
  };

  return (
    <Section id="visit-us">
      <h2 style={titleStyle}>Visit Us</h2>
      <p style={subtitleStyle}>
        We welcome you to visit our mosque. Feel free to reach out with any questions.
      </p>

      <div style={gridStyle} className="contact-grid">
        <div style={contactGridStyle}>
          {CONTACT_DATA.map((contact) => {
            const IconComponent = iconMap[contact.icon];
            const getLink = () => {
              if (contact.title === "Address") return SITE_INFO.addressLink;
              if (contact.title === "Phone") return SITE_INFO.phoneLink;
              if (contact.title === "Email") return SITE_INFO.emailLink;
              return null;
            };
            const link = getLink();
            const content = (
              <>
                <div style={contactTitleStyle}>{contact.title}</div>
                <div style={contactContentStyle}>{contact.content}</div>
              </>
            );
            return (
              <div key={contact.id} style={contactCardStyle} className="contact-card">
                <div style={iconWrapperStyle}>
                  <IconComponent size={24} color={COLORS.white} />
                </div>
                {link ? (
                  <a href={link} target={contact.title === "Address" ? "_blank" : "_self"} rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    {content}
                  </a>
                ) : (
                  <div>{content}</div>
                )}
              </div>
            );
          })}
        </div>

        <div style={mapContainerStyle}>
          <Map address={SITE_INFO.address} />
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .contact-card {
          transition: all 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 98, 65, 0.15) !important;
        }
        .contact-card a:hover {
          cursor: pointer;
        }
      `}</style>
    </Section>
  );
}