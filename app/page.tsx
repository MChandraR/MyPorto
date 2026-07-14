import AboutSection from "./components/AbountSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <AboutSection />
      </div>
    </main>
  );
}

