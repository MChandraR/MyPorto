import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { certifications as initialCertifications, Certification } from "../../data/certifications";

export default function CertificationsTab() {
  const [certs, setCerts] = useState<Certification[]>(initialCertifications);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCert, setEditingCert] = useState<Certification | null>(null);

  // Form states
  const [titleEn, setTitleEn] = useState("");
  const [titleId, setTitleId] = useState("");
  const [issuerEn, setIssuerEn] = useState("");
  const [issuerId, setIssuerId] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState<Certification["type"]>("Academy");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [descriptionId, setDescriptionId] = useState("");
  const [credentialUrl, setCredentialUrl] = useState("");

  const openAddModal = () => {
    setEditingCert(null);
    setTitleEn("");
    setTitleId("");
    setIssuerEn("");
    setIssuerId("");
    setYear("");
    setType("Academy");
    setDescriptionEn("");
    setDescriptionId("");
    setCredentialUrl("");
    setIsModalOpen(true);
  };

  const openEditModal = (cert: Certification) => {
    setEditingCert(cert);
    setTitleEn(cert.titleEn);
    setTitleId(cert.titleId);
    setIssuerEn(cert.issuerEn);
    setIssuerId(cert.issuerId);
    setYear(cert.year);
    setType(cert.type);
    setDescriptionEn(cert.descriptionEn);
    setDescriptionId(cert.descriptionId);
    setCredentialUrl(cert.credentialUrl || "");
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingCert) {
      // Edit mode
      setCerts((prev) =>
        prev.map((c) =>
          c.titleEn === editingCert.titleEn
            ? { ...c, titleEn, titleId, issuerEn, issuerId, year, type, descriptionEn, descriptionId, credentialUrl }
            : c
        )
      );
    } else {
      // Add mode
      const newCert: Certification = {
        titleEn,
        titleId,
        issuerEn,
        issuerId,
        year,
        type,
        descriptionEn,
        descriptionId,
        credentialUrl,
      };
      setCerts((prev) => [newCert, ...prev]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (titleEnToDelete: string) => {
    if (confirm("Are you sure you want to delete this certification record?")) {
      setCerts((prev) => prev.filter((c) => c.titleEn !== titleEnToDelete));
    }
  };

  return (
    <div className="space-y-6">
      {/* Title & Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Certification Records</h3>
          <p className="text-xs text-zinc-500">Manage credentials, awards, academies, and competency records.</p>
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
        >
          <FaPlus size={12} />
          <span>Add Credential</span>
        </button>
      </div>

      {/* Certifications Table */}
      <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-50 dark:bg-zinc-900/60 text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 text-2xs uppercase font-bold tracking-wider">
              <th className="px-6 py-4">Title (EN / ID)</th>
              <th className="px-6 py-4">Issuer (EN / ID)</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Year</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300">
            {certs.map((c) => (
              <tr key={c.titleEn} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-bold text-zinc-900 dark:text-zinc-100">{c.titleEn}</p>
                  <p className="text-3xs text-zinc-400 dark:text-zinc-505">{c.titleId}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-zinc-900 dark:text-zinc-200">{c.issuerEn}</p>
                  <p className="text-3xs text-zinc-400 dark:text-zinc-500">{c.issuerId}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/20 dark:border-zinc-800/30 px-2.5 py-0.5 text-3xs font-semibold uppercase tracking-wider text-zinc-650 dark:text-zinc-400">
                    {c.type}
                  </span>
                </td>
                <td className="px-6 py-4 font-mono font-bold text-zinc-450 dark:text-zinc-500">{c.year}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button
                    onClick={() => openEditModal(c)}
                    className="p-1.5 rounded bg-zinc-100 hover:bg-blue-50 dark:bg-zinc-900 hover:text-blue-600 dark:hover:bg-zinc-850 cursor-pointer transition-colors"
                    title="Edit Record"
                  >
                    <FaEdit size={12} />
                  </button>
                  <button
                    onClick={() => handleDelete(c.titleEn)}
                    className="p-1.5 rounded bg-zinc-100 hover:bg-red-50 dark:bg-zinc-900 hover:text-red-600 dark:hover:bg-zinc-850 cursor-pointer transition-colors"
                    title="Delete Record"
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
                {editingCert ? "Edit Certification Record" : "Add New Credential"}
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
                    Credential Name (English)
                  </label>
                  <input
                    type="text"
                    required
                    value={titleEn}
                    onChange={(e) => setTitleEn(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
                    placeholder="Apple Developer Certification"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    Credential Name (Indonesian)
                  </label>
                  <input
                    type="text"
                    required
                    value={titleId}
                    onChange={(e) => setTitleId(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
                    placeholder="Sertifikasi Developer Apple"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    Issuer (English)
                  </label>
                  <input
                    type="text"
                    required
                    value={issuerEn}
                    onChange={(e) => setIssuerEn(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
                    placeholder="Apple Developer Academy"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    Issuer (Indonesian)
                  </label>
                  <input
                    type="text"
                    required
                    value={issuerId}
                    onChange={(e) => setIssuerId(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
                    placeholder="Akademi Developer Apple"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    Type / Category
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as Certification["type"])}
                    className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
                  >
                    <option value="Academy">Academy</option>
                    <option value="Technical">Technical</option>
                    <option value="Competition">Competition</option>
                    <option value="Award">Award</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    Year
                  </label>
                  <input
                    type="text"
                    required
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
                    placeholder="2025"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    Verification URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={credentialUrl}
                    onChange={(e) => setCredentialUrl(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-zinc-900 dark:text-zinc-100"
                    placeholder="https://www.linkedin.com/..."
                  />
                </div>
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
                  placeholder="Detailed description of the program/credential in English..."
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
                  placeholder="Deskripsi rinci mengenai program/kredensial dalam Bahasa Indonesia..."
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
