import Link from "next/link";
import { FaHome, FaBriefcase, FaGraduationCap, FaUser, FaSignOutAlt } from "react-icons/fa";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: <FaHome size={18} /> },
    { id: "projects", label: "Projects", icon: <FaBriefcase size={18} /> },
    { id: "certs", label: "Certifications", icon: <FaGraduationCap size={18} /> },
    { id: "profile", label: "Profile / Bio", icon: <FaUser size={18} /> },
  ];

  return (
    <aside className="w-64 flex-shrink-0 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col justify-between transition-colors duration-300">
      {/* Top Section */}
      <div className="flex flex-col">
        {/* Header/Brand */}
        <div className="h-16 flex items-center px-6 border-b border-zinc-200 dark:border-zinc-800">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Chandra.MCR <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest pl-1">Admin</span>
          </Link>
        </div>

        {/* Menu Navigation */}
        <nav className="p-4 space-y-1.5 flex-grow">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm dark:bg-blue-500"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        <Link
          href="/"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-650 dark:text-zinc-450 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300"
        >
          <FaSignOutAlt size={18} />
          <span>Exit to Site</span>
        </Link>
      </div>
    </aside>
  );
}
