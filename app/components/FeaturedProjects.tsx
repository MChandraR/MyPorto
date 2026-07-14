import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { projects } from "../data/projects";
import Button from "./Button";

export default function FeaturedProjects() {
  // Get the top 3 featured projects
  const featured = projects.slice(0, 3);

  return (
    <section className="space-y-10 pt-8">
      {/* Section Header */}
      <div className="space-y-3 text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
          Selected Work
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
          Featured Projects
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-zinc-650 dark:text-zinc-400 transition-colors">
          A showcase of my recent coding endeavors, autonomous systems control, and development highlights.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <Link
            href={project.href}
            key={project.title}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/50 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-950/40 shadow-sm hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-100 dark:border-zinc-900 bg-zinc-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 dark:opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent" />
            </div>

            {/* Card Body */}
            <div className="flex flex-col justify-between flex-grow p-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50/80 dark:bg-blue-950/30 border border-blue-100/50 dark:border-blue-900/30 px-2.5 py-0.5 text-2xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {project.type}
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-505 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <FaExternalLinkAlt size={12} />
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors line-clamp-3">
                  {project.description}
                </p>
              </div>

              {project.tech && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-zinc-100/60 dark:bg-zinc-900/40 border border-zinc-200/20 dark:border-zinc-800/40 px-2 py-0.5 text-3xs font-medium text-zinc-500 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* See More Link */}
      <div className="flex justify-center pt-4">
        <Link href="/portfolio">
          <Button variant="outline" className="flex items-center gap-2 group/btn">
            See More / Selengkapnya
            <FaArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
