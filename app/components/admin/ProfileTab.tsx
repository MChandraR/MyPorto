import { useState } from "react";

export default function ProfileTab() {
  // Form states initialized with user's profile content
  const [name, setName] = useState("Muhammad Chandra Ramadhan");
  const [role, setRole] = useState("Full-Stack Software Engineer & Machine Learning Engineer");
  const [location, setLocation] = useState("Tanjungpinang, Indonesia");
  const [email, setEmail] = useState("mchandrar.me@gmail.com");
  const [linkedin, setLinkedin] = useState("https://www.linkedin.com/in/mchandrar/");
  const [github, setGithub] = useState("https://github.com/MChandraR");

  const [bioEn, setBioEn] = useState(
    "Versatile Software Engineer with a solid foundation in full-stack development, mobile application engineering, and machine learning. Proven track record in building robust end-to-end solutions, from designing responsive frontend interfaces to engineering scalable backend systems. Passionate about leveraging advanced AI features to create modern, high-performance applications."
  );

  const [bioId, setBioId] = useState(
    "Insinyur Perangkat Lunak yang serbabisa dengan fondasi kuat dalam pengembangan full-stack, rekayasa aplikasi seluler, dan machine learning. Memiliki rekam jejak terbukti dalam membangun solusi end-to-end yang tangguh, mulai dari merancang antarmuka frontend yang responsif hingga merekayasa sistem backend yang terukur. Terobsesi untuk memanfaatkan fitur AI canggih guna menciptakan aplikasi modern berkinerja tinggi."
  );

  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-3xl space-y-6">
      {/* Description header */}
      <div>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Profile Settings</h3>
        <p className="text-xs text-zinc-500">Edit the primary biography, contact points, and details rendered on public pages.</p>
      </div>

      {isSaved && (
        <div className="p-3 text-xs font-bold text-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 rounded-lg animate-pulse">
          ✓ Profile settings updated successfully! (Local state simulation)
        </div>
      )}

      {/* Main Settings Form */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm">
        {/* Full Name & Title */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
              Professional Role / Title
            </label>
            <input
              type="text"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
            />
          </div>
        </div>

        {/* Location & Email */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
              Location
            </label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
              Contact Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
              LinkedIn Profile Link
            </label>
            <input
              type="url"
              required
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
              GitHub Profile Link
            </label>
            <input
              type="url"
              required
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
            />
          </div>
        </div>

        {/* Biography (English) */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
            Biography Summary (English)
          </label>
          <textarea
            required
            rows={4}
            value={bioEn}
            onChange={(e) => setBioEn(e.target.value)}
            className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100 leading-relaxed"
          />
        </div>

        {/* Biography (Indonesian) */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
            Biography Summary (Indonesian)
          </label>
          <textarea
            required
            rows={4}
            value={bioId}
            onChange={(e) => setBioId(e.target.value)}
            className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100 leading-relaxed"
          />
        </div>

        {/* Save button */}
        <div className="flex justify-end pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
          >
            Save Profile Changes
          </button>
        </div>
      </form>
    </div>
  );
}
