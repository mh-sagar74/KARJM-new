"use client";

import { COLORS } from "../../constants";
import { FOUNDER_DATA, ALL_COMMITTEE } from "../../constants/committee";

const currentCommittee = ALL_COMMITTEE.filter(m => m.isCurrentMember !== false);
const pastCommittee = ALL_COMMITTEE.filter(m => m.isCurrentMember === false);
import { Users, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

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

  const avatarStyle = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0 auto 14px",
    border: `3px solid ${COLORS.secondary}`,
    backgroundColor: COLORS.accent,
  };

  const founderNameStyle = {
    fontSize: "1.75rem",
    fontWeight: "800",
    color: COLORS.primary,
    marginBottom: "8px",
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

  const cardStyle = {
    backgroundColor: COLORS.white,
    borderRadius: "16px",
    padding: "28px 20px",
    textAlign: "center",
    transition: "all 0.3s ease",
    border: "1px solid rgba(0, 98, 65, 0.1)",
    boxShadow: "0 4px 20px rgba(0, 98, 65, 0.06)",
  };

  const nameStyle = {
    fontSize: "1.15rem",
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: "4px",
  };

  const positionStyle = {
    fontSize: "0.9rem",
    color: COLORS.secondary,
    fontWeight: "600",
    marginBottom: "12px",
  };

  const phoneStyle = {
    fontSize: "0.85rem",
    color: COLORS.text,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
  };

  const duaNoteStyle = {
    fontSize: "0.85rem",
    color: COLORS.darkGray,
    fontStyle: "italic",
    marginTop: "8px",
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
      {/* Founder Section */}
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

      {/* Current Committee */}
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
            <div key={member.id} style={cardStyle} className="committee-card">
              <Image
                src={member.avatar}
                alt={member.name}
                width={90}
                height={90}
                style={avatarStyle}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{ display: 'none', width: '90px', height: '90px', borderRadius: '50%', backgroundColor: COLORS.primary, margin: '0 auto 14px', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: COLORS.white, fontSize: '1.75rem', fontWeight: '700' }}>
                  {member.name.charAt(0)}
                </span>
              </div>
              <div style={nameStyle}>{member.name}</div>
              <div style={positionStyle}>{member.position}</div>
              <a href={`tel:${member.phone.replace(/\s/g, '')}`} style={phoneStyle} className="phone-link">
                📞 {member.phone}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Past Members */}
      <section style={sectionStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            <Heart size={28} />
            Past Members
          </h2>
          <p style={subtitleStyle}>
            Honoring our predecessors who built this community
          </p>
        </div>

        <div style={pastCreditStyle}>
          <p style={{ color: COLORS.text, fontSize: "0.95rem" }}>
            🌿 <strong>In Recognition</strong> 🌿<br />
            We express our heartfelt gratitude to all past members for their 
            invaluable service and dedication to our mosque. May Allah grant them 
            endless rewards (Jannah).
          </p>
        </div>

        <div style={gridStyle}>
          {pastCommittee.map((member) => (
            <div key={member.id} style={cardStyle} className="committee-card">
              <Image
                src={member.avatar}
                alt={member.name}
                width={90}
                height={90}
                style={avatarStyle}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{ display: 'none', width: '90px', height: '90px', borderRadius: '50%', backgroundColor: COLORS.secondary, margin: '0 auto 14px', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: COLORS.white, fontSize: '1.75rem', fontWeight: '700' }}>
                  {member.name.charAt(0)}
                </span>
              </div>
              <div style={nameStyle}>{member.name}</div>
              <div style={positionStyle}>{member.position}</div>
              <div style={duaNoteStyle}>🤲 Seek Dua for them</div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .committee-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 98, 65, 0.15) !important;
        }
        .phone-link:hover {
          color: ${COLORS.secondary} !important;
        }
      `}</style>
    </div>
  );
}