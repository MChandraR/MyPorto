import Link from "next/link";

type PortfolioItem = {
  title: string;
  description: string;
  href: string;
  tech?: string[];
};

const items: PortfolioItem[] = [
  {
    title: "Autonomous Surface Vessel (KKI 2024)",
    description: "An autonomous boat equipped with GPS navigation, sensor-based vision, and control systems. Developed as a finalist team at Kontes Kapal Indonesia 2024.",
    href: "https://github.com/MChandraR",
    tech: ["C++", "IoT", "GPS", "Computer Vision"],
  },
  {
    title: "Auto-Correct (Turing Machine)",
    description: "Web-based auto-correction system applying the Turing Machine concept, built with a Python Flask backend.",
    href: "https://github.com/MChandraR/Auto-Correct-TBFO-Kelompok-3",
    tech: ["Python", "Flask", "Turing Machine", "Web"],
  },
  {
    title: "Nusantara Culinary (GEMASTIK 2023)",
    description: "A game development project built with Unity and C# for the national GEMASTIK 2023 game development competition.",
    href: "https://github.com/MChandraR/Nusantara-Culinary",
    tech: ["C#", "Unity", "Game Dev"],
  },
  {
    title: "Shopping Website",
    description: "A simple, clean e-commerce website platform built with PHP and MySQL backend logic.",
    href: "https://github.com/MChandraR/ShoppingWebsite",
    tech: ["PHP", "MySQL", "Web Dev"],
  },
  {
    title: "Simple Chat Application",
    description: "A distributed chat application using socket programming in Java for a Distributed Systems course.",
    href: "https://github.com/MChandraR/Project-Aplikasi-Chat-Sederhana",
    tech: ["Java", "Socket Programming", "Distributed Systems"],
  },
  {
    title: "Data Mining Final Project",
    description: "Final project website analyzing data mining patterns and presenting the data visually.",
    href: "https://github.com/MChandraR/Data-Mining-Final-Project",
    tech: ["Python", "CSS", "Data Mining"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          Portfolio
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-gray-900">Selected work</h2>
        <p className="mt-2 text-gray-600">A few apps, games, and systems I&apos;ve built or helped develop.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Link
            href={it.href}
            key={it.title}
            className="block rounded-lg border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-label={`Open ${it.title}`}
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{it.description}</p>
            {it.tech && (
              <p className="mt-4 text-xs text-gray-500">{it.tech.join(" • ")}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

