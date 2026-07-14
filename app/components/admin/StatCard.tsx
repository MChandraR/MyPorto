import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  description?: string;
  colorClass?: string;
}

export default function StatCard({ title, value, icon, description, colorClass = "text-blue-500" }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200/50 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-950/40 p-6 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow duration-300">
      {/* Icon Area */}
      <div className={`p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/20 dark:border-zinc-800/40 ${colorClass}`}>
        {icon}
      </div>

      {/* Label and Value */}
      <div className="space-y-1">
        <p className="text-2xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{title}</p>
        <p className="text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">{value}</p>
        {description && (
          <p className="text-3xs font-medium text-zinc-500 dark:text-zinc-400">{description}</p>
        )}
      </div>
    </div>
  );
}
