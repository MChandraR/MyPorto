import Image from "next/image";
import AboutSection from "./components/AbountSection";
import HeroSection from "./components/HeroSection";


export default function Home() {
  return (
     <main>
      <HeroSection />
      <AboutSection />
    </main>
  );
}
