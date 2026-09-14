import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaUserCircle } from "react-icons/fa";

interface HeaderProps {
  activeTab: string;
}

export default function Header({ activeTab }: HeaderProps) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const activeTheme = savedTheme || systemTheme;
    setTheme(activeTheme);
    if (activeTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case "overview":
        return "Admin Dashboard";
      case "projects":
        return "Manage Projects";
      case "certs":
        return "Manage Certifications";
      case "profile":
        return "Profile & Biography";
      default:
        return "Admin Dashboard";
    }
  };

  return (
    <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex items-center justify-between px-8 transition-colors duration-300">
      {/* View Title */}
      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 transition-colors">
        {getTitle()}
      </h2>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all focus:outline-none cursor-pointer"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800" />

        {/* Admin User Profile */}
        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100 leading-tight">Chandra Ramadhan</p>
            <p className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none">Super Administrator</p>
          </div>
          <FaUserCircle size={28} className="text-zinc-400 dark:text-zinc-650" />
        </div>
      </div>
    </header>
  );
}
