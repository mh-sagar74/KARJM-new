"use client";

import { COLORS } from "../../constants";

export default function Map() {
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d340.1423745316734!2d89.54839797138457!3d22.80800496298299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff855513719a15%3A0x1238fdb92e036604!2sKhanjahan%20Ali%20Rahmatullah%20Jame%20Masjid!5e1!3m2!1sen!2sus!4v1777652334903!5m2!1sen!2sus";

  const containerStyle = {
    width: "100%",
    height: "100%",
    minHeight: "350px",
    backgroundColor: COLORS.accent,
  };

  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: 0,
    minHeight: "350px",
  };

  return (
    <div style={containerStyle}>
      <iframe
        src={embedUrl}
        style={iframeStyle}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mosque Location"
      />
    </div>
  );
}