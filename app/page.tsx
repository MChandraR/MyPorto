import AboutSection from "./components/AbountSection";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";


export default function Home() {
  return (
     <main className="max-w-5xl mx-auto px-4 py-8 space-y-24">
      <HeroSection />
      <AboutSection />
      <Portfolio />
    </main>
  );
}

