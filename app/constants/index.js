export const COLORS = {
  primary: "#006241",
  secondary: "#D4AF37",
  accent: "#F9F7F2",
  text: "#2D2D2D",
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
  lightGray: "#F5F5F5",
  darkGray: "#666666",
};

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/prayer-times", label: "Prayer Times" },
  { href: "/services", label: "Services" },
];

export const MORE_ITEMS = [
  { href: "/about-us", label: "About" },
  { href: "/committee", label: "Committee" },
  { href: "/contact-us", label: "Contact" },
];

export const SITE_INFO = {
  name: "Khanjahan Ali (R:) Jame Masjid",
  mobileName: "KARJM",
  shortName: "KARJM",
  logo: "/logo.png",
  logoTrans: "/logo-trans.png",
  established: 1980,
  location: "Khulna, Bangladesh",
  address: "Banargati (Mokbul Bazar), Haji Ismail Rd, Sonadanga, Khulna",
  addressLink: "https://maps.app.goo.gl/GERwCpFF9pDaEjd39",
  phone: "+880 1717-583815",
  phoneLink: "tel:+8801717583815",
  email: "khanjahanali.masjid@gmail.com",
  emailLink: "mailto:khanjahanali.masjid@gmail.com",
  emailLink: "mailto:mhsagarcse02@gmail.com",
  facebook: "https://www.facebook.com/karjm1980/",
  whatsappGroup: "https://chat.whatsapp.com/ET34byvKgZj3UMOUvFJ391",
};

export const PRAYER_DATA = {
  jumuahTime: "1:15pm",
  calculationMethod: "Karachi",
  coordinates: [22.8079661, 89.548438],
  timezone: "Asia/Dhaka",
  iqamahTimes: {
    fajr: "05:00 AM",
    dhuhr: "01:30 PM",
    asr: "04:15 PM",
    maghrib: "05:40 PM",
    isha: "08:00 PM",
  },
};

export const ABOUT_DATA = {
  description:
    "The Khanjahan Ali Rahmatullah Jame Masjid is a Sunni mosque located in Khulna, Bangladesh. Established in 1980, it has been serving the local community for several decades. This mosque is known for its beautiful architecture and tranquil atmosphere, making it a peaceful place for worship.",
  features: [
    "Prayer facilities for men",
    "Kid-friendly environment",
    "Tranquil atmosphere",
    "Community gatherings",
  ],
};

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Islamic Education",
    description:
      "Quran classes, Arabic lessons, and Islamic studies for all ages.",
    icon: "GraduationCap",
  },
  {
    id: 2,
    title: "Youth Programs",
    description: "Engaging activities and mentorship for young Muslims.",
    icon: "UsersRound",
  },
  {
    id: 3,
    title: "Community Outreach",
    description: "Charity initiatives and support for those in need.",
    icon: "HandHeart",
  },
  {
    id: 4,
    title: "Nikah Service",
    description:
      "Islamic marriage service including registration and officiation by the Imam.",
    icon: "Gem",
  },
];

export const CONTACT_DATA = [
  { id: 1, title: "Address", content: SITE_INFO.address, icon: "MapPin" },
  { id: 2, title: "Phone", content: SITE_INFO.phone, icon: "Phone" },
  { id: 3, title: "Email", content: SITE_INFO.email, icon: "Mail" },
  {
    id: 4,
    title: "Open Hours",
    content:
      "Opens every day, 30 minutes before each prayer time (waqt adhan).",
    icon: "Clock",
  },
];

export const WHATSAPP_DATA = {
  title: "Join Our Community",
  description:
    "Scan the QR code to join our WhatsApp community for latest updates, announcements, and events.",
  ctaText: "Join WhatsApp Group",
  groupLink: "https://chat.whatsapp.com/ET34byvKgZj3UMOUvFJ391",
};
