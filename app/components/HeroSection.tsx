import Image from "next/image";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import { Person } from "../../public/images";
import Link from "next/link";

const heroStats = [
  { label: "Apple Dev Certified", value: "Cohort 2025" },
  { label: "Google Student Ambassador", value: "2025" },
  { label: "GitHub Repositories", value: "55+" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative isolate overflow-hidden border border-gray-100 bg-white px-6 py-24 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.35)] md:px-16">
      <div className="absolute inset-x-12 top-6 h-32 bg-gradient-to-r from-blue-50 via-white to-indigo-50 blur-3xl" />

      <div className="relative z-10 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        {/* Copy */}
        <div>
          <div className="inline-flex items-center border border-blue-100 bg-blue-50/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-600">
            Software & ML Engineer
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            Muhammad Chandra Ramadhan
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            I am a Software & ML Engineer passionate about building innovative,
            data-driven solutions that create measurable impact. With certified expertise
            from the Apple Developer Academy and representing as a Google Student Ambassador,
            I develop intelligent systems using Swift, Python, C++, and IoT.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href={"https://www.linkedin.com/in/mchandrar/"}>
                <Button variant="primary" >Get in Touch</Button>
            </Link>
            <Link href={"#portfolio"}>
                <Button variant="outline">View Portfolio</Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 border border-gray-100 bg-gray-50/80 p-6">
            {heroStats.map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  {label} 
                </p>
                <p className="mt-2 text-xl font-semibold text-gray-900">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <SocialLinks />
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto flex max-w-sm items-center justify-center">
          <div className="absolute -bottom-10 -left-8 h-32 w-32 bg-gradient-to-br from-blue-100 via-white to-indigo-100 blur-2xl" />
          <div className="relative border border-gray-100 bg-white/70 p-5 shadow-2xl">
            
            <Image
              src={Person}
              alt="Photo of Muhammad Chandra Ramadhan"
              width={420}
              height={520}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
