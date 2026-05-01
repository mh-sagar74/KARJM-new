"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE_INFO, COLORS } from "../../constants";

export default function Logo() {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const imageStyle = {
    objectFit: "contain",
    transition: "transform 0.3s ease",
  };

  return (
    <Link href="/" style={containerStyle} className="logo-container">
      <Image
        src={SITE_INFO.logo}
        alt={`${SITE_INFO.shortName} logo`}
        width={45}
        height={45}
        style={imageStyle}
        className="logo-image"
      />
      <span className="logo-text-full">{SITE_INFO.name}</span>
      <span className="logo-text-mobile">{SITE_INFO.mobileName}</span>
      <style jsx>{`
        .logo-container:hover .logo-image {
          transform: scale(1.05);
        }
        .logo-container:hover .logo-text-full,
        .logo-container:hover .logo-text-mobile {
          color: ${COLORS.secondary};
        }
        .logo-text-full {
          font-size: 1.25rem;
          font-weight: 700;
          color: ${COLORS.primary};
          white-space: nowrap;
          transition: color 0.3s ease;
        }
        .logo-text-mobile {
          display: none;
          font-size: 1rem;
          font-weight: 700;
          color: ${COLORS.primary};
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }
        @media (max-width: 1023px) {
          .logo-text-full {
            display: none;
          }
          .logo-text-mobile {
            display: inline;
          }
        }
      `}</style>
    </Link>
  );
}