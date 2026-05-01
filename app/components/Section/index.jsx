"use client";

import { COLORS } from "../../constants";

export default function Section({ children, id, className = "", backgroundColor, style = {} }) {
  const sectionStyle = {
    padding: "60px 20px",
    backgroundColor: backgroundColor || COLORS.white,
    minHeight: "auto",
    ...style,
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  };

  return (
    <section id={id} style={sectionStyle} className={className}>
      <div style={containerStyle}>{children}</div>
    </section>
  );
}