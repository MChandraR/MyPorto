'use client'
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  const heroStats = [
    { label: t("hero.stat1Label"), value: t("hero.stat1Val") },
    { label: t("hero.stat2Label"), value: t("hero.stat2Val") },
    { label: t("hero.stat3Label"), value: t("hero.stat3Val") },
  ];

  return (
    <section id="hero" className="relative grid-bg overflow-hidden border-b border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 px-6 py-20 md:px-16 transition-colors duration-300">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-blue-400/10 dark:bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 dark:bg-cyan-500/5 blur-3xl" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        {/* Copy */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-950/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {t("hero.tag")}
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
            Muhammad Chandra <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
              Ramadhan
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 transition-colors">
            {t("hero.description")}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="https://www.linkedin.com/in/mchandrar/" target="_blank" rel="noreferrer">
              <Button variant="primary">{t("hero.btnTouch")}</Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline">{t("hero.btnPortfolio")}</Button>
            </Link>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-3 gap-6 border-t border-zinc-100 dark:border-zinc-900 pt-8 transition-colors">
            {heroStats.map(({ label, value }) => (
              <div key={label} className="space-y-1">
                <p className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 transition-colors">
                  {value}
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-zinc-400 dark:text-zinc-500 transition-colors">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <SocialLinks />
          </div>
        </div>

        {/* Interactive Terminal Mockup */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-950 p-6 shadow-2xl transition-all duration-300">
            {/* Terminal Header */}
            <div className="absolute top-3 left-4 flex space-x-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-center text-xs font-semibold text-zinc-500 font-mono mb-6">
              engineer.py
            </div>

            {/* Terminal Body */}
            <div className="space-y-4 font-mono text-xs md:text-sm text-zinc-300">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400"></span>
                <span className="text-zinc-500">import</span>
                <span>chandra</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-blue-400"></span>
                <span>chandra.get_profile()</span>
              </div>

              <div className="pl-4 text-zinc-400 space-y-1 border-l border-zinc-800">
                <p><span className="text-cyan-400">&quot;{t("hero.termStatus")}&quot;:</span> &quot;{t("hero.termStatusVal")}&quot;</p>
                <p><span className="text-cyan-400">&quot;{t("hero.termFocus")}&quot;:</span> [&quot;Computer Vision&quot;, &quot;Otonom Boat Control&quot;, &quot;AI Integrations&quot;]</p>
                <p><span className="text-cyan-400">&quot;{t("hero.termAffil")}&quot;:</span> [&quot;Apple Academy Alumni&quot;, &quot;Google Student Ambassador&quot;]</p>
                <p><span className="text-cyan-400">&quot;{t("hero.termLang")}&quot;:</span> [&quot;Swift&quot;, &quot;Python&quot;, &quot;C++&quot;, &quot;Java&quot;]</p>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <span className="text-blue-400"></span>
                <span>chandra.load_autonomous_vessel()</span>
              </div>

              <div className="text-green-400 pl-4 animate-pulse">
                {t("hero.termSuccess")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
