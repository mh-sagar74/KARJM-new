import Hero from "./components/Hero";
import PrayerTimes from "./components/PrayerTimes";
import About from "./components/About";
import Services from "./components/Services";
import CommitteePreview from "./components/CommitteePreview";
import WhatsAppCommunity from "./components/WhatsAppCommunity";
import VisitUs from "./components/VisitUs";

export default function Home() {
  return (
    <>
      <Hero />
      <PrayerTimes />
      <About />
      <Services />
      <CommitteePreview />
      <WhatsAppCommunity />
      <VisitUs />
    </>
  );
}