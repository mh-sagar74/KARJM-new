"use client";

import Link from "next/link";
import Image from "next/image";
import { COLORS } from "../../constants";
import { FOUNDER_DATA, ALL_COMMITTEE } from "../../constants/committee";
import Section from "../Section";
import CommitteeMemberCard from "../CommitteeMemberCard";
import { ArrowRight, Users } from "lucide-react";

const currentMembers = ALL_COMMITTEE.filter(m => m.status === "current").slice(0, 4);

export default function CommitteePreview() {

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
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const founderStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px",
    backgroundColor: COLORS.accent,
    borderRadius: "16px",
    border: `2px solid ${COLORS.secondary}`,
  };

  const avatarStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "0 auto 16px",
    overflow: "hidden",
    border: `3px solid ${COLORS.secondary}`,
    backgroundColor: COLORS.primary,
    position: "relative",
  };

  const founderNameStyle = {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: "4px",
  };

  const founderTitleStyle = {
    fontSize: "0.9rem",
    color: COLORS.secondary,
    fontWeight: "600",
    marginBottom: "12px",
  };

  const founderDescStyle = {
    fontSize: "0.85rem",
    color: COLORS.darkGray,
    textAlign: "center",
    lineHeight: "1.6",
    maxWidth: "300px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  };

  const cardStyle = {
    backgroundColor: COLORS.white,
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    border: "1px solid rgba(0, 98, 65, 0.1)",
    boxShadow: "0 4px 16px rgba(0, 98, 65, 0.06)",
    transition: "all 0.3s ease",
  };

  const memberAvatarStyle = {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: COLORS.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 12px",
    overflow: "hidden",
    border: `2px solid ${COLORS.secondary}`,
  };

  const memberNameStyle = {
    fontSize: "1rem",
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: "4px",
  };

  const memberPositionStyle = {
    fontSize: "0.85rem",
    color: COLORS.darkGray,
  };

  const ctaContainerStyle = {
    textAlign: "center",
    marginTop: "40px",
  };

  const ctaButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    padding: "14px 28px",
    borderRadius: "50px",
    fontWeight: "600",
    fontSize: "1rem",
    textDecoration: "none",
    transition: "all 0.3s ease",
  };

  const initials = FOUNDER_DATA.name.split(" ").map(n => n[0]).join("");

  const getInitials = (name) => {
    return name.split(" ").map(n => n[0]).join("");
  };

  return (
    <Section id="committee-preview">
      <h2 style={titleStyle}>Meet Our Committee</h2>
      <p style={subtitleStyle}>
        The dedicated team serving our mosque community with dedication and sincerity.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}>
        <div style={founderStyle}>
          <div style={avatarStyle}>
            <Image
              src={FOUNDER_DATA.image}
              alt={FOUNDER_DATA.name}
              width={100}
              height={100}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: COLORS.white, fontSize: "2rem", fontWeight: "700" }}>
                {initials}
              </span>
            </div>
          </div>
          <div style={founderNameStyle}>{FOUNDER_DATA.name}</div>
          <div style={founderTitleStyle}>{FOUNDER_DATA.title}</div>
          <p style={founderDescStyle}>{FOUNDER_DATA.description}</p>
        </div>

        <div style={gridStyle}>
          {currentMembers.map((member) => (
            <CommitteeMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      <div style={ctaContainerStyle}>
        <Link href="/committee" style={ctaButtonStyle} className="committee-cta">
          View Full Committee
          <ArrowRight size={20} />
        </Link>
        <p style={{ marginTop: "12px", fontSize: "0.9rem", color: COLORS.darkGray }}>
          Get contact numbers to reach our committee members directly
        </p>
      </div>

      <style jsx>{`
        .committee-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 98, 65, 0.12) !important;
        }
        .committee-cta:hover {
          background-color: ${COLORS.secondary} !important;
          color: ${COLORS.text} !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(212, 175, 55, 0.3);
        }
      `}</style>
    </Section>
  );
}