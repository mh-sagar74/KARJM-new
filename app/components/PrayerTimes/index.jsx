"use client";

import { useEffect, useState } from "react";
import { COLORS, PRAYER_DATA } from "../../constants";
import Section from "../Section";
import { Clock, CalendarDays } from "lucide-react";
import { DateTime } from "luxon";
import PrayerTimeCalculator from "@masaajid/prayer-times";

const prayers = [
  { key: "fajr", name: "Fajr", arabic: "فجر" },
  { key: "dhuhr", name: "Dhuhr", arabic: "ظہر" },
  { key: "asr", name: "Asr", arabic: "عصر" },
  { key: "maghrib", name: "Maghrib", arabic: "مغرب" },
  { key: "isha", name: "Isha", arabic: "عشاء" },
];

export default function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [activePrayer, setActivePrayer] = useState("");

  useEffect(() => {
    const calculator = new PrayerTimeCalculator({
      method: PRAYER_DATA.calculationMethod,
      location: PRAYER_DATA.coordinates,
      timezone: PRAYER_DATA.timezone,
    });

    const times = calculator.calculate();
    const now = DateTime.local().setZone(PRAYER_DATA.timezone);
    
    setCurrentDate(now.toFormat("EEEE, MMMM d, yyyy"));

    const prayerList = prayers.map((prayer) => ({
      ...prayer,
      waqt: times[prayer.key],
      iqamah: PRAYER_DATA.iqamahTimes[prayer.key],
    }));

    let activeIdx = -1;
    for (let i = 0; i < prayerList.length; i++) {
      const prayerTime = DateTime.fromJSDate(new Date(prayerList[i].waqt)).setZone(PRAYER_DATA.timezone);
      if (now >= prayerTime) {
        activeIdx = i;
      }
    }
    setActivePrayer(activeIdx >= 0 ? prayers[activeIdx].key : "");

    setPrayerTimes(prayerList);
  }, []);

  const sectionTitleStyle = {
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
    fontWeight: "700",
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: "8px",
  };

  const sectionSubtitleStyle = {
    fontSize: "1rem",
    color: COLORS.darkGray,
    textAlign: "center",
    marginBottom: "32px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "16px",
    marginBottom: "32px",
  };

  const getPrayerCardStyle = (isActive) => ({
    backgroundColor: isActive ? COLORS.primary : COLORS.accent,
    borderRadius: "16px",
    padding: "24px 16px",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: isActive ? `2px solid ${COLORS.secondary}` : "2px solid transparent",
  });

  const prayerNameStyle = (isActive) => ({
    fontSize: "1.25rem",
    fontWeight: "700",
    color: isActive ? COLORS.white : COLORS.primary,
    marginBottom: "4px",
  });

  const arabicStyle = (isActive) => ({
    fontSize: "1rem",
    color: isActive ? COLORS.secondary : COLORS.darkGray,
    marginBottom: "12px",
    fontFamily: "serif",
  });

  const iqamahStyle = (isActive) => ({
    fontSize: "1.5rem",
    fontWeight: "800",
    color: isActive ? COLORS.secondary : COLORS.text,
  });

  const waqtStyle = (isActive) => ({
    fontSize: "0.875rem",
    color: isActive ? "rgba(255,255,255,0.8)" : COLORS.darkGray,
    marginTop: "8px",
  });

  const jumuahStyle = {
    textAlign: "center",
    padding: "16px",
    backgroundColor: COLORS.accent,
    borderRadius: "12px",
    borderLeft: `4px solid ${COLORS.secondary}`,
  };

  return (
    <Section id="prayer-times">
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "8px" }}>
          <Clock size={28} color={COLORS.primary} />
          <h2 style={sectionTitleStyle}>Prayer Times</h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", color: COLORS.darkGray }}>
          <CalendarDays size={16} />
          <span>{currentDate}</span>
        </div>
      </div>

      <div style={gridStyle}>
        {prayerTimes.map((prayer) => {
          const isActive = activePrayer === prayer.key;
          return (
            <div key={prayer.key} style={getPrayerCardStyle(isActive)} className="prayer-card">
              <div style={prayerNameStyle(isActive)}>{prayer.name}</div>
              <div style={arabicStyle(isActive)}>{prayer.arabic}</div>
              <div style={iqamahStyle(isActive)}>{prayer.iqamah}</div>
              <div style={waqtStyle(isActive)}>
                Waqt: {DateTime.fromJSDate(new Date(prayer.waqt)).setZone(PRAYER_DATA.timezone).toFormat("h:mm a")}
              </div>
            </div>
          );
        })}
      </div>

      <div style={jumuahStyle}>
        <span style={{ fontWeight: "600", color: COLORS.primary }}>Jumu'ah Khutba: </span>
        <span style={{ color: COLORS.text }}>{PRAYER_DATA.jumuahTime} (All Year)</span>
      </div>

      <style jsx>{`
        .prayer-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 98, 65, 0.15);
        }
      `}</style>
    </Section>
  );
}