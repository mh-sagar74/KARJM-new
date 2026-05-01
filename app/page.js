import Hero from "./components/Hero";
import PrayerTimes from "./components/PrayerTimes";
import About from "./components/About";
import Services from "./components/Services";
import VisitUs from "./components/VisitUs";
import WhatsAppCommunity from "./components/WhatsAppCommunity";

export default function Home() {
  return (
    <>
      <Hero />
      <PrayerTimes />
      <About />
      <Services />
      <WhatsAppCommunity />
      <VisitUs />
    </>
  );
}