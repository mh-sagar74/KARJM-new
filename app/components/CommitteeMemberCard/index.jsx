"use client";

import Image from "next/image";
import { COLORS } from "../../constants";

export default function CommitteeMemberCard({ member, showPhone = false }) {
  const avatarStyle = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0 auto 14px",
    border: `3px solid ${COLORS.secondary}`,
    backgroundColor: COLORS.accent,
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
    marginBottom: showPhone ? "12px" : "0",
  };

  const phoneStyle = {
    fontSize: "0.85rem",
    color: COLORS.text,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
  };

  return (
    <div style={cardStyle} className="committee-card">
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
      {showPhone && member.phone && (
        <a href={`tel:${member.phone.replace(/\s/g, '')}`} style={phoneStyle} className="phone-link">
          📞 {member.phone}
        </a>
      )}
      <style jsx>{`
        .committee-card {
          backgroundColor: ${COLORS.white};
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 98, 65, 0.1);
          box-shadow: 0 4px 20px rgba(0, 98, 65, 0.06);
        }
        .committee-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 98, 65, 0.12);
        }
      `}</style>
    </div>
  );
}

const cardStyle = {
  backgroundColor: COLORS.white,
  borderRadius: "16px",
  padding: "28px 20px",
  textAlign: "center",
  transition: "all 0.3s ease",
  border: "1px solid rgba(0, 98, 65, 0.1)",
  boxShadow: "0 4px 20px rgba(0, 98, 65, 0.06)",
};