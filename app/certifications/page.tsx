"use client";

import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaAward, FaGraduationCap, FaCode, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../data/certifications";

export default function CertificationsPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Academy", "Technical", "Competition", "Award"];

  const getIcon = (type: string) => {
    switch (type) {
      case "Academy":
        return <FaGraduationCap className="text-emerald-500" size={20} />;
      case "Technical":
        return <FaCode className="text-blue-500" size={20} />;
      case "Competition":
        return <FaAward className="text-amber-500" size={20} />;
      case "Award":
        return <FaCertificate className="text-purple-500" size={20} />;
      default:
        return <FaCertificate className="text-blue-500" size={20} />;
    }
  };

  const filteredCertifications = certifications.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(search.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(search.toLowerCase()) ||
      cert.description.toLowerCase().includes(search.toLowerCase());

    const matchesTab = activeTab === "All" || cert.type === activeTab;

    return matchesSearch && matchesTab;
  });

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-12 transition-colors duration-300">
      {/* Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
          Achievements
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Certifications & Awards
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          Professional training, academy milestones, and competition achievements from national and global institutions.
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
            placeholder="Search certifications..."
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
      {filteredCertifications.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredCertifications.map((cert) => (
            <div
              key={cert.title}
              className="group flex gap-5 p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-950/40 shadow-sm hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
            >
              {/* Type Icon Container */}
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200/20 dark:border-zinc-800/30 group-hover:scale-105 transition-transform duration-300">
                {getIcon(cert.type)}
              </div>

              {/* Card Body */}
              <div className="flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-zinc-450 dark:text-zinc-500">
                      {cert.year}
                    </span>
                    <span className="rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/20 dark:border-zinc-800/30 px-2.5 py-0.5 text-3xs font-semibold uppercase tracking-wider text-zinc-650 dark:text-zinc-450">
                      {cert.type}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors pt-1">
                    {cert.description}
                  </p>
                </div>

                {cert.credentialUrl && (
                  <div className="pt-2">
                    <Link
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-2xs font-semibold text-zinc-500 dark:text-zinc-450 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <span>Verify Credential</span>
                      <FaExternalLinkAlt size={10} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl">
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">
            No certifications found matching &apos;{search}&apos; in &apos;{activeTab}&apos;.
          </p>
        </div>
      )}
    </main>
  );
}
