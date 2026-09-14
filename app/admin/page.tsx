"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaBriefcase, FaGraduationCap, FaCode, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";
import StatCard from "../components/admin/StatCard";
import ProjectsTab from "../components/admin/ProjectsTab";
import CertificationsTab from "../components/admin/CertificationsTab";
import ProfileTab from "../components/admin/ProfileTab";
import { useAuth } from "../components/admin/AuthContext";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const { isAuthenticated, loading, token, checkSessionWithAPI } = useAuth();
  const router = useRouter();

  // Route protection redirect
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [loading, isAuthenticated, router]);

  // Session check placeholder triggered on refresh / route (tab) changes
  useEffect(() => {
    if (isAuthenticated && token) {
      console.log(`[Admin Route Guard] Checking session validity with API for tab change: /admin#${activeTab}`);
      checkSessionWithAPI(token);
    }
  }, [activeTab, isAuthenticated, token, checkSessionWithAPI]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 font-inter">
        <div className="relative flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-zinc-200 border-t-blue-600 dark:border-zinc-800 dark:border-t-blue-400" />
        </div>
        <p className="mt-4 text-xs font-semibold text-zinc-500 animate-pulse">Initializing admin session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Don't render dashboard if redirecting
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverview();
      case "projects":
        return <ProjectsTab />;
      case "certs":
        return <CertificationsTab />;
      case "profile":
        return <ProfileTab />;
      default:
        return renderOverview();
    }
  };

  const renderOverview = () => {
    const latestProjects = projects.slice(0, 3);
    const recentCerts = certifications.slice(0, 3);

    return (
      <div className="space-y-8">
        {/* Welcome message banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm space-y-2">
          <h3 className="text-xl font-extrabold tracking-tight">Welcome back, Chandra!</h3>
          <p className="text-xs text-blue-100 max-w-lg">
            Manage your portofolio contents, certifications, and updates in this single workspace dashboard.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Projects"
            value={projects.length}
            icon={<FaBriefcase size={22} />}
            description="Active showcase items"
            colorClass="text-blue-600 dark:text-blue-400"
          />
          <StatCard
            title="Certifications"
            value={certifications.length}
            icon={<FaGraduationCap size={22} />}
            description="Credential records"
            colorClass="text-emerald-600 dark:text-emerald-400"
          />
          <StatCard
            title="ML/AI Projects"
            value={projects.filter((p) => p.type === "AI/ML").length}
            icon={<FaCode size={22} />}
            description="Intelligent systems"
            colorClass="text-amber-600 dark:text-amber-400"
          />
          <StatCard
            title="Competition Awards"
            value={certifications.filter((c) => c.type === "Competition").length}
            icon={<FaAward size={22} />}
            description="National achievements"
            colorClass="text-purple-600 dark:text-purple-400"
          />
        </div>

        {/* Dynamic content listings split grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Latest Projects preview card */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Recent Projects</h4>
              <button
                onClick={() => setActiveTab("projects")}
                className="text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer"
              >
                Manage Projects
              </button>
            </div>
            <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
              {latestProjects.map((p) => (
                <div key={p.titleEn} className="py-3 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-bold text-xs text-zinc-900 dark:text-zinc-100">{p.titleEn}</p>
                    <p className="text-3xs font-semibold uppercase text-zinc-400">{p.type}</p>
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-400 dark:text-zinc-650 hover:text-blue-600 transition-colors"
                  >
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Certifications preview card */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Recent Certifications</h4>
              <button
                onClick={() => setActiveTab("certs")}
                className="text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer"
              >
                Manage Certifications
              </button>
            </div>
            <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
              {recentCerts.map((c) => (
                <div key={c.titleEn} className="py-3 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-bold text-xs text-zinc-900 dark:text-zinc-100">{c.titleEn}</p>
                    <p className="text-3xs font-semibold text-zinc-500 dark:text-zinc-400">{c.issuerEn}</p>
                  </div>
                  <span className="text-3xs font-mono font-bold text-zinc-450 dark:text-zinc-500">{c.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-50 dark:bg-zinc-900/40 text-zinc-800 dark:text-zinc-200 transition-colors duration-300 font-inter">
      {/* Sidebar navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main viewport */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header toolbar */}
        <Header activeTab={activeTab} />

        {/* Dynamic page content scroll wrapper */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="mx-auto">
            {renderTabContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
