"use client";

import { COLORS } from "../../constants";

export default function Card({ children, className = "" }) {
  const cardStyle = {
    backgroundColor: COLORS.white,
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 4px 20px rgba(0, 98, 65, 0.08)",
    border: "1px solid rgba(0, 98, 65, 0.1)",
    transition: "all 0.3s ease",
  };

  return (
    <div style={cardStyle} className={className}>
      {children}
    </div>
  );
}