import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Modules from "../components/Modules";
import Architecture from "../components/Architecture";
import Compliance from "../components/Compliance";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Modules />
        <Architecture />
        <Compliance />
        <Pricing />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

