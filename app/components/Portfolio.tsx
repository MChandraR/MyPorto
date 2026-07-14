import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

type PortfolioItem = {
  title: string;
  description: string;
  href: string;
  tech?: string[];
  type?: "AI/ML" | "System" | "Web" | "Game";
};

const items: PortfolioItem[] = [
  {
    title: "Autonomous Surface Vessel (KKI 2024)",
    description: "An autonomous boat equipped with GPS navigation, sensor-based vision, and control systems. Developed as a finalist team at Kontes Kapal Indonesia 2024.",
    href: "https://github.com/MChandraR",
    tech: ["C++", "Arduino", "GPS Navigation", "Computer Vision"],
    type: "AI/ML",
  },
  {
    title: "Auto-Correct (Turing Machine)",
    description: "Web-based auto-correction system applying the Turing Machine concept, built with a Python Flask backend.",
    href: "https://github.com/MChandraR/Auto-Correct-TBFO-Kelompok-3",
    tech: ["Python", "Flask", "Turing Machine", "Web"],
    type: "Web",
  },
  {
    title: "Nusantara Culinary (GEMASTIK 2023)",
    description: "A game development project built with Unity and C# for the national GEMASTIK 2023 game development competition.",
    href: "https://github.com/MChandraR/Nusantara-Culinary",
    tech: ["C#", "Unity", "Game Dev"],
    type: "Game",
  },
  {
    title: "Shopping Website",
    description: "A simple, clean e-commerce website platform built with PHP and MySQL backend logic.",
    href: "https://github.com/MChandraR/ShoppingWebsite",
    tech: ["PHP", "MySQL", "Web Dev"],
    type: "Web",
  },
  {
    title: "Simple Chat Application",
    description: "A distributed chat application using socket programming in Java for a Distributed Systems course.",
    href: "https://github.com/MChandraR/Project-Aplikasi-Chat-Sederhana",
    tech: ["Java", "Socket Programming", "Distributed Systems"],
    type: "System",
  },
  {
    title: "Data Mining Final Project",
    description: "Final project website analyzing data mining patterns and presenting the data visually.",
    href: "https://github.com/MChandraR/Data-Mining-Final-Project",
    tech: ["Python", "CSS", "Data Mining"],
    type: "AI/ML",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-5xl px-6 py-16 transition-colors duration-300">
      <div className="mb-10 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
          Portfolio
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
          Selected Projects
        </h2>
        <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
          A selection of systems, software, and AI prototypes I&apos;ve developed.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Link
            href={it.href}
            key={it.title}
            className="group flex flex-col justify-between rounded-xl border border-zinc-200/50 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-950/40 p-6 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-900/20 hover:border-zinc-300 dark:hover:border-zinc-800 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-label={`Open ${it.title}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-50/80 dark:bg-blue-950/30 border border-blue-100/50 dark:border-blue-900/30 px-2.5 py-0.5 text-2xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {it.type}
                </span>
                <span className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                  <FaExternalLinkAlt size={12} />
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {it.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors line-clamp-3">
                  {it.description}
                </p>
              </div>
            </div>

            {it.tech && (
              <div className="flex flex-wrap gap-1.5 pt-6">
                {it.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-zinc-100/80 dark:bg-zinc-900/50 border border-zinc-200/30 dark:border-zinc-800/30 px-2 py-0.5 text-3xs font-medium text-zinc-500 dark:text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
