"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  href: string;
  tech: string[];
  type: "AI/ML" | "System" | "Web" | "Game";
  image: string;
};

const projects: Project[] = [
  {
    title: "Autonomous Surface Vessel (KKI 2024)",
    description: "An autonomous catamaran boat equipped with GPS navigation, sensor-based vision, and intelligent control systems. Built as a finalist project for Kontes Kapal Indonesia 2024.",
    href: "https://github.com/MChandraR",
    tech: ["C++", "Arduino", "GPS Navigation", "Computer Vision"],
    type: "AI/ML",
    image: "/images/project_placeholder.png",
  },
  {
    title: "Auto-Correct (Turing Machine)",
    description: "A web-based auto-correction system applying the Turing Machine concept, built with a Python Flask backend for linguistic and code pattern corrections.",
    href: "https://github.com/MChandraR/Auto-Correct-TBFO-Kelompok-3",
    tech: ["Python", "Flask", "Turing Machine", "Web"],
    type: "Web",
    image: "/images/project_placeholder.png",
  },
  {
    title: "Nusantara Culinary (GEMASTIK 2023)",
    description: "A game development entry for the GEMASTIK 2023 national competition, celebrating traditional Indonesian culinary arts in an interactive format.",
    href: "https://github.com/MChandraR/Nusantara-Culinary",
    tech: ["C#", "Unity", "Game Dev"],
    type: "Game",
    image: "/images/project_placeholder.png",
  },
  {
    title: "PHP Shopping Website",
    description: "A complete, clean e-commerce website platform implementing user carts, secure checkout flows, and product catalogs using PHP and MySQL.",
    href: "https://github.com/MChandraR/ShoppingWebsite",
    tech: ["PHP", "MySQL", "Web Dev"],
    type: "Web",
    image: "/images/project_placeholder.png",
  },
  {
    title: "Simple Chat Application",
    description: "A multi-threaded client-server chat application utilizing distributed socket programming in Java for reliable TCP network messaging.",
    href: "https://github.com/MChandraR/Project-Aplikasi-Chat-Sederhana",
    tech: ["Java", "Socket Programming", "Distributed Systems"],
    type: "System",
    image: "/images/project_placeholder.png",
  },
  {
    title: "Data Mining Final Project",
    description: "Data analysis platform implementing mining algorithms, clusterings, and visualizations to extract insights from structured datasets.",
    href: "https://github.com/MChandraR/Data-Mining-Final-Project",
    tech: ["Python", "CSS", "Data Mining"],
    type: "AI/ML",
    image: "/images/project_placeholder.png",
  },
];

export default function PortfolioPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "AI/ML", "System", "Web", "Game"];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
      project.description.toLowerCase().includes(search.toLowerCase());
      
    const matchesTab = activeTab === "All" || project.type === activeTab;
    
    return matchesSearch && matchesTab;
  });

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-12 transition-colors duration-300">
      {/* Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
          Work Showcase
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          GitHub Repositories
        </h1>
        <p className="text-base text-zinc-655 dark:text-zinc-400">
          Explore complete projects, autonomous vessel navigation codes, machine learning scripts, and web platforms.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-zinc-150 dark:border-zinc-900/60 pb-8 transition-colors">
        {/* Search */}
        <div className="relative w-full md:max-w-xs">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
            <FaSearch size={14} />
          </span>
          <input
            type="text"
            placeholder="Search projects or tech..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all focus:outline-none cursor-pointer ${
                activeTab === cat
                  ? "bg-blue-600 text-white shadow-sm dark:bg-blue-500"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-850"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              href={project.href}
              key={project.title}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/50 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-950/40 shadow-sm hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
            >
              {/* Project Dummy Image */}
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
                    <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <FaExternalLinkAlt size={12} />
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-450 leading-relaxed transition-colors line-clamp-3">
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
      ) : (
        <div className="text-center py-20 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl">
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">
            No projects found matching &apos;{search}&apos; in &apos;{activeTab}&apos;.
          </p>
        </div>
      )}
    </main>
  );
}
