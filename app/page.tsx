import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Hero from "../components/Hero";
import About from "../components/About";
import Modules from "../components/Modules";
import MobileMoney from "../components/MobileMoney";
import Solutions from "../components/Solutions";
import Architecture from "../components/Architecture";
import Compliance from "../components/Compliance";
import Securite from "../components/Securite";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Ressources from "../components/Ressources";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-brand-ice via-white to-[#E6EEFA]">
      <TopBar />
      <Navbar />
      <main className="relative">
        <HeroSlider />
        <Hero />
        <About />
        <Modules />
        <MobileMoney />
        <Solutions />
        <Architecture />
        <Compliance />
        <Securite />
        <Pricing />
        <Roadmap />
        <Ressources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

