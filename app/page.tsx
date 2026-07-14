import AboutSection from "./components/AbountSection";
import HeroSection from "./components/HeroSection";
import FeaturedProjects from "./components/FeaturedProjects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        <AboutSection />
        <div className="border-t border-zinc-150 dark:border-zinc-900/60 transition-colors" />
        <FeaturedProjects />
      </div>
    </main>
  );
}


