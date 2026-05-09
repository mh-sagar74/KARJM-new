"use client";

import { COLORS } from "../../constants";
import { FOUNDER_DATA, ALL_COMMITTEE } from "../../constants/committee";
import { Users, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import CommitteeMemberCard from "@/app/components/CommitteeMemberCard";

const currentCommittee = ALL_COMMITTEE.filter(m => m.status === "current");
const pastCommittee = ALL_COMMITTEE.filter(m => m.status === "former" || m.status === "deceased");
const deceasedMembers = pastCommittee.filter(m => m.status === "deceased");
const formerMembers = pastCommittee.filter(m => m.status === "former");

export default function CommitteePage() {
  const containerStyle = {
    padding: "100px 20px 60px",
  };

  const sectionStyle = {
    marginBottom: "60px",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "40px",
  };

  const titleStyle = {
    fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    fontFamily: "var(--font-amiri), serif",
  };

  const subtitleStyle = {
    fontSize: "1rem",
    color: COLORS.darkGray,
    maxWidth: "600px",
    margin: "0 auto",
  };

  const founderStyle = {
    backgroundColor: COLORS.accent,
    borderRadius: "20px",
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto 60px",
    textAlign: "center",
    border: `2px solid ${COLORS.secondary}`,
  };

  const founderImageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0 auto 20px",
    border: `4px solid ${COLORS.primary}`,
    backgroundColor: COLORS.white,
  };

  const founderNameStyle = {
    fontSize: "1.75rem",
    fontWeight: "800",
    color: COLORS.primary,
    marginBottom: "8px",
    fontFamily: "var(--font-amiri), serif",
  };

  const founderTitleStyle = {
    fontSize: "1.1rem",
    color: COLORS.secondary,
    fontWeight: "600",
    marginBottom: "16px",
  };

  const founderDescStyle = {
    fontSize: "1rem",
    color: COLORS.text,
    lineHeight: "1.8",
    marginBottom: "20px",
  };

  const prayStyle = {
    backgroundColor: COLORS.white,
    padding: "16px 24px",
    borderRadius: "12px",
    fontSize: "0.95rem",
    color: COLORS.primary,
    fontStyle: "italic",
    fontFamily: "serif",
    maxWidth: "500px",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const pastCreditStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: COLORS.accent,
    borderRadius: "12px",
    marginBottom: "40px",
    maxWidth: "600px",
    margin: "0 auto 40px",
  };

  return (
    <div style={containerStyle}>
      <section style={founderStyle}>
        <Image
          src={FOUNDER_DATA.image}
          alt={FOUNDER_DATA.name}
          width={150}
          height={150}
          style={founderImageStyle}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div style={{ display: 'none', width: '150px', height: '150px', borderRadius: '50%', backgroundColor: COLORS.primary, margin: '0 auto 20px', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: COLORS.white, fontSize: '3rem', fontWeight: '700' }}>
            {FOUNDER_DATA.name.charAt(0)}
          </span>
        </div>
        <div style={founderNameStyle}>{FOUNDER_DATA.name}</div>
        <div style={founderTitleStyle}>{FOUNDER_DATA.title}</div>
        <p style={founderDescStyle}>{FOUNDER_DATA.description}</p>
        <div style={prayStyle}>
          <Sparkles size={20} style={{ marginBottom: "8px" }} />
          <div>&quot;{FOUNDER_DATA.pray}&quot;</div>
          <div style={{ fontSize: "0.8rem", marginTop: "8px", color: COLORS.darkGray }}>
            Seek blessings for the founder
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            <Users size={28} />
            Current Committee
          </h2>
          <p style={subtitleStyle}>
            Meet our dedicated team serving the mosque community
          </p>
        </div>
        <div style={gridStyle}>
          {currentCommittee.map((member) => (
            <CommitteeMemberCard key={member.id} member={member} showPhone />
          ))}
        </div>
      </section>

      {formerMembers.length > 0 && (
        <section style={sectionStyle}>
          <div style={headerStyle}>
            <h2 style={titleStyle}>
              <Heart size={28} />
              Former Members
            </h2>
            <p style={subtitleStyle}>
              Previous committee members who served our community
            </p>
          </div>
          <div style={gridStyle}>
            {formerMembers.map((member) => (
              <CommitteeMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}

      {deceasedMembers.length > 0 && (
        <section style={sectionStyle}>
          <div style={headerStyle}>
            <h2 style={titleStyle}>
              <Heart size={28} />
              In Loving Memory
            </h2>
            <p style={subtitleStyle}>
              Honoring those who passed away - may Allah grant them Jannah
            </p>
          </div>
          <div style={pastCreditStyle}>
            <p style={{ color: COLORS.text, fontSize: "0.95rem" }}>
              🌿 <strong>Seek Dua for them</strong> 🌿<br />
              We remember our beloved members who have passed away. Their service 
              to our mosque community will always be remembered.
            </p>
          </div>
          <div style={gridStyle}>
            {deceasedMembers.map((member) => (
              <CommitteeMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}

      <style jsx>{`
        .phone-link:hover {
          color: ${COLORS.secondary} !important;
        }
      `}</style>
    </div>
  );
}