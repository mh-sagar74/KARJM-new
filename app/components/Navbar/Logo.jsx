"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_INFO, COLORS } from "../../constants";

export default function Logo() {
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState(68);

  useEffect(() => {
    setMounted(true);
    setSize(window.innerWidth < 1024 ? 60 : 68);
  }, []);

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const imageStyle = {
    objectFit: "contain",
    transition: "transform 0.3s ease",
  };

  if (!mounted) {
    return (
      <Link href="/" style={containerStyle} className="logo-container">
        <Image
          src={SITE_INFO.logo}
          alt={`${SITE_INFO.shortName} logo`}
          width={50}
          height={50}
          style={imageStyle}
          className="logo-image"
        />
      </Link>
    );
  }

  return (
    <Link href="/" style={containerStyle} className="logo-container">
      <Image
        src={SITE_INFO.logo}
        alt={`${SITE_INFO.shortName} logo`}
        width={size}
        height={size}
        style={imageStyle}
        className="logo-image"
      />
      <span className="logo-text-full">{SITE_INFO.name}</span>
      <style jsx>{`
        .logo-container:hover .logo-image {
          transform: scale(1.05);
        }
        .logo-container:hover .logo-text-full {
          color: ${COLORS.secondary};
        }
        .logo-text-full {
          font-size: 1.5rem;
          font-weight: 700;
          color: ${COLORS.primary};
          white-space: nowrap;
          transition: color 0.3s ease;
        }
        @media (max-width: 1023px) {
          .logo-text-full {
            display: none;
          }
        }
      `}</style>
    </Link>
  );
}

