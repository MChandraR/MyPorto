import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { projects as initialProjects, Project } from "../../data/projects";

export default function ProjectsTab() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Form states
  const [titleEn, setTitleEn] = useState("");
  const [titleId, setTitleId] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [descriptionId, setDescriptionId] = useState("");
  const [href, setHref] = useState("");
  const [techInput, setTechInput] = useState("");
  const [type, setType] = useState<Project["type"]>("Web");
  const [image, setImage] = useState("/images/project_placeholder.png");

  const openAddModal = () => {
    setEditingProject(null);
    setTitleEn("");
    setTitleId("");
    setDescriptionEn("");
    setDescriptionId("");
    setHref("");
    setTechInput("");
    setType("Web");
    setImage("/images/project_placeholder.png");
    setIsModalOpen(true);
  };

  const openEditModal = (project: Project) => {
    setEditingProject(project);
    setTitleEn(project.titleEn);
    setTitleId(project.titleId);
    setDescriptionEn(project.descriptionEn);
    setDescriptionId(project.descriptionId);
    setHref(project.href);
    setTechInput(project.tech.join(", "));
    setType(project.type);
    setImage(project.image);
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const tech = techInput.split(",").map((t) => t.trim()).filter(Boolean);

    if (editingProject) {
      // Edit mode
      setProjects((prev) =>
        prev.map((p) =>
          p.titleEn === editingProject.titleEn
            ? { ...p, titleEn, titleId, descriptionEn, descriptionId, href, tech, type, image }
            : p
        )
      );
    } else {
      // Add mode
      const newProj: Project = {
        titleEn,
        titleId,
        descriptionEn,
        descriptionId,
        href,
        tech,
        type,
        image,
      };
      setProjects((prev) => [newProj, ...prev]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (titleEnToDelete: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => prev.filter((p) => p.titleEn !== titleEnToDelete));
    }
  };

  return (
    <div className="space-y-6">
      {/* Title & Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Project Records</h3>
          <p className="text-xs text-zinc-500">Create, update, and organize your work showcase listings.</p>
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
        >
          <FaPlus size={12} />
          <span>Add Project</span>
        </button>
      </div>

      {/* Projects Table */}
      <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-50 dark:bg-zinc-900/60 text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 text-2xs uppercase font-bold tracking-wider">
              <th className="px-6 py-4">Title (EN / ID)</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Tech Stack</th>
              <th className="px-6 py-4">Link</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300">
            {projects.map((proj) => (
              <tr key={proj.titleEn} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-bold text-zinc-900 dark:text-zinc-100">{proj.titleEn}</p>
                  <p className="text-3xs text-zinc-400 dark:text-zinc-500">{proj.titleId}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-blue-50/80 dark:bg-blue-950/30 border border-blue-100/50 dark:border-blue-900/30 px-2 py-0.5 text-3xs font-semibold text-blue-600 dark:text-blue-400">
                    {proj.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1 max-w-[200px]">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 px-1 py-0.5 text-[10px] text-zinc-500 dark:text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a
                    href={proj.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>View GitHub</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button
                    onClick={() => openEditModal(proj)}
                    className="p-1.5 rounded bg-zinc-100 hover:bg-blue-50 dark:bg-zinc-900 hover:text-blue-600 dark:hover:bg-zinc-850 cursor-pointer transition-colors"
                    title="Edit Project"
                  >
                    <FaEdit size={12} />
                  </button>
                  <button
                    onClick={() => handleDelete(proj.titleEn)}
                    className="p-1.5 rounded bg-zinc-100 hover:bg-red-50 dark:bg-zinc-900 hover:text-red-600 dark:hover:bg-zinc-850 cursor-pointer transition-colors"
                    title="Delete Project"
                  >
                    <FaTrash size={12} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="w-full max-w-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
              <h4 className="font-bold text-zinc-900 dark:text-zinc-50">
                {editingProject ? "Edit Project" : "Add New Project"}
              </h4>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleSave} className="flex-grow overflow-y-auto p-6 space-y-4">
              {/* Form Grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    Title (English)
                  </label>
                  <input
                    type="text"
                    required
                    value={titleEn}
                    onChange={(e) => setTitleEn(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
                    placeholder="Autonomous Surface Vessel"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    Title (Indonesian)
                  </label>
                  <input
                    type="text"
                    required
                    value={titleId}
                    onChange={(e) => setTitleId(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
                    placeholder="Kapal Otonom Catamaran"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    Category Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as Project["type"])}
                    className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
                  >
                    <option value="AI/ML">AI/ML</option>
                    <option value="System">System</option>
                    <option value="Web">Web</option>
                    <option value="Game">Game</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    URL (GitHub Link)
                  </label>
                  <input
                    type="url"
                    required
                    value={href}
                    onChange={(e) => setHref(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
                    placeholder="https://github.com/..."
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                  Tech Stack Tags (Comma separated)
                </label>
                <input
                  type="text"
                  required
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
                  placeholder="C++, Arduino, GPS Navigation"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                  Description (English)
                </label>
                <textarea
                  required
                  rows={3}
                  value={descriptionEn}
                  onChange={(e) => setDescriptionEn(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
                  placeholder="Detailed description in English..."
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                  Description (Indonesian)
                </label>
                <textarea
                  required
                  rows={3}
                  value={descriptionId}
                  onChange={(e) => setDescriptionId(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
                  placeholder="Deskripsi detail dalam bahasa Indonesia..."
                />
              </div>

              {/* Modal Actions Footer */}
              <div className="flex justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-zinc-650 dark:text-zinc-350 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold cursor-pointer shadow-sm"
                >
                  Save Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
