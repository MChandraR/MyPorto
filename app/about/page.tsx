"use client";

import Link from "next/link";
import { FaDownload, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaAward, FaUsers, FaTools } from "react-icons/fa";
import Button from "../components/Button";
import { useLanguage } from "../components/LanguageContext";

export default function AboutPage() {
  const { language, t } = useLanguage();

  const experiences = [
    {
      role: language === "en" ? "iOS Developer" : "Pengembang iOS (iOS Developer)",
      company: "Apple Developer Academy @ Infinite Learning",
      location: "Batam, Indonesia",
      period: "Mar 2025 - Dec 2025",
      details: language === "en" 
        ? [
            "Conducted in-depth user research and analysis to inform key decisions on feature prioritization and the overall user experience design of the mobile application.",
            "Engineered a high-performance iOS application using SwiftUI and Apple native frameworks, reducing app load time by 20% and achieving a 4.5+ star rating during user testing sessions.",
            "Utilized Agile/Scrum to collaborate with cross-functional teams, reducing feature deployment cycles by 15% through streamlined CI/CD pipelines and efficient Git version control."
          ]
        : [
            "Melakukan riset dan analisis pengguna secara mendalam untuk menginformasikan keputusan penting pada prioritas fitur dan desain pengalaman pengguna aplikasi seluler secara keseluruhan.",
            "Merekayasa aplikasi iOS berkinerja tinggi menggunakan SwiftUI dan kerangka kerja asli Apple, mengurangi waktu pemuatan aplikasi sebesar 20% dan mencapai peringkat bintang 4.5+ selama sesi pengujian pengguna.",
            "Memanfaatkan Agile/Scrum untuk berkolaborasi dengan tim lintas fungsi, mengurangi siklus penerapan fitur sebesar 15% melalui pipeline CI/CD yang disederhanakan dan kontrol versi Git yang efisien."
          ]
    },
    {
      role: language === "en" ? "Social Media Ambassador" : "Duta Media Sosial (Social Media Ambassador)",
      company: "Google Student Ambassador Indonesia",
      location: "Batam, Indonesia",
      period: "Sep 2025 - Dec 2025",
      details: language === "en"
        ? [
            "Designed and executed social media campaigns and online educational sessions focused on Google's Artificial Intelligence (AI) features, reaching over a thousand audience across Indonesia.",
            "Promoted Google AI technologies and products (such as Gemini, Google Lens, or AI features in Workspace) through engaging and easy-to-understand content, successfully increasing public awareness.",
            "Analyzed social media trends and audience feedback to develop more effective content strategies, ensuring AI educational materials were relevant and had a direct impact on the community."
          ]
        : [
            "Merancang dan mengeksekusi kampanye media sosial serta sesi edukasi online yang berfokus pada fitur Kecerdasan Buatan (AI) Google, menjangkau lebih dari seribu audiens di seluruh Indonesia.",
            "Mempromosikan teknologi dan produk Google AI (seperti Gemini, Google Lens, atau fitur AI di Workspace) melalui konten yang menarik dan mudah dipahami, serta berhasil meningkatkan kesadaran publik.",
            "Menganalisis tren media sosial dan umpan balik audiens untuk mengembangkan strategi konten yang lebih efektif, memastikan materi edukasi AI relevan dan berdampak langsung pada komunitas."
          ]
    },
    {
      role: language === "en" ? "Intern Web Developer" : "Magang Web Developer",
      company: "Dinas Pekerjaan Umum dan Penataan Ruang Kota Tanjungpinang",
      location: "Tanjungpinang, Indonesia",
      period: "Jan 2021 - Mar 2021",
      details: language === "en"
        ? [
            "Developed and implemented a functional, public-facing institutional profile website from scratch, utilizing PHP for server-side logic and HTML5 markup.",
            "Coordinated actively with other departmental teams to design and execute the integration of links between various service websites, improving user accessibility to the centralized public service ecosystem.",
            "Ensured code quality standards and the fundamental website architecture, supporting ease of maintenance and potential scalability for future content."
          ]
        : [
            "Mengembangkan dan mengimplementasikan situs profil institusi yang fungsional dan menghadap ke publik dari awal, menggunakan PHP untuk logika sisi server dan markup HTML5.",
            "Berkoordinasi secara aktif dengan tim departemen lain untuk merancang dan melaksanakan integrasi tautan antara berbagai situs web layanan, meningkatkan aksesibilitas pengguna ke ekosistem layanan publik yang terpusat.",
            "Memastikan standar kualitas kode dan arsitektur dasar situs web, mendukung kemudahan pemeliharaan dan skalabilitas potensial untuk konten masa depan."
          ]
    }
  ];

  const education = [
    {
      degree: language === "en" ? "Bachelor's degree in Informatics Engineering" : "Sarjana Teknik Informatika",
      school: "Raja Ali Haji Maritime University (UMRAH)",
      location: "Tanjungpinang, Indonesia",
      period: "Sep 2022 - Sep 2026",
      gpa: language === "en" ? "GPA 3.85 / 4.00" : "IPK 3.85 / 4.00",
      details: language === "en"
        ? [
            "Relevant Courses: Deep Learning, Machine Learning, Data Structures & Algorithms, Object-Oriented Programming, Software Engineering, Computer Networks.",
            "Thesis Title: Performance Analysis of Local Training on a Mobile Waste Classification System Based on Federated Learning Using the Efficientnet-B0 Pre-Trained Model"
          ]
        : [
            "Mata Kuliah Terkait: Deep Learning, Machine Learning, Struktur Data & Algoritma, Pemrograman Berorientasi Objek, Rekayasa Perangkat Lunak, Jaringan Komputer.",
            "Judul Skripsi: Analisis Performa Pelatihan Lokal pada Sistem Klasifikasi Sampah Seluler Berbasis Pembelajaran Terfederasi Menggunakan Model Pra-Terlatih Efficientnet-B0"
          ]
    },
    {
      degree: language === "en" ? "Vocational High School (Software Engineering)" : "Sekolah Menengah Kejuruan (Rekayasa Perangkat Lunak)",
      school: "SMKN 4 Tanjungpinang",
      location: "Tanjungpinang, Indonesia",
      period: "Jul 2019 - Jun 2022",
      details: language === "en"
        ? [
            "Relevant Courses: Web Development, Mobile Development, Desktop App Development, Computer Network"
          ]
        : [
            "Mata Pelajaran Terkait: Pengembangan Web, Pengembangan Aplikasi Seluler, Pengembangan Aplikasi Desktop, Jaringan Komputer"
          ]
    }
  ];

  const organizations = [
    {
      role: language === "en" ? "Head of A.I Programmer" : "Kepala Programmer A.I",
      organization: "UMRAH Robotic Club",
      period: "Nov 2024 - Nov 2025",
      details: language === "en"
        ? [
            "Led and directed the AI division in strategic formulation, system design, and program optimization, specifically focusing on the development of artificial intelligence for autonomous vehicles.",
            "Served as a mentor and consultant for junior programmers, providing intensive technical guidance in PyTorch/TensorFlow and deep learning architectures, resulting in improved competency and timely project completion.",
            "Managed and facilitated weekly consultation sessions to review the codebase and implementation strategies, enhancing code quality, and accelerating the team's AI model development iterations."
          ]
        : [
            "Memimpin dan mengarahkan divisi AI dalam perumusan strategis, desain sistem, dan optimalisasi program, khususnya berfokus pada pengembangan kecerdasan buatan untuk kendaraan otonom.",
            "Bertindak sebagai mentor dan konsultan untuk programmer junior, memberikan bimbingan teknis intensif dalam PyTorch/TensorFlow dan arsitektur pembelajaran mendalam, menghasilkan peningkatan kompetensi dan penyelesaian proyek tepat waktu.",
            "Mengelola dan memfasilitasi sesi konsultasi mingguan untuk meninjau basis kode dan strategi implementasi, meningkatkan kualitas kode, dan mempercepat iterasi pengembangan model AI tim."
          ]
    },
    {
      role: language === "en" ? "Unity Developer" : "Pengembang Unity (Unity Developer)",
      organization: "WAVE Game Community",
      period: "Oct 2022 - Dec 2024",
      details: language === "en"
        ? [
            "Developed and implemented game scripts using C# and the Unity Engine, ensuring optimal and bug-free game functionality.",
            "Coordinated closely with the design team (Game Designers and Artists) to translate visual concepts and game mechanics into functional code, ensuring technical implementation aligned with the design vision.",
            "Provided technical guidance and mentorship to junior programmers on code troubleshooting and Unity best practices, which accelerated the team's learning curve and improved overall code quality.",
            "Actively participated in the code review process to identify and resolve potential performance bottlenecks, enhancing the efficiency and stability of game projects."
          ]
        : [
            "Mengembangkan dan mengimplementasikan skrip game menggunakan C# dan Unity Engine, memastikan fungsionalitas game yang optimal dan bebas bug.",
            "Berkoordinasi erat dengan tim desain (Perancang Game dan Seniman) untuk menerjemahkan konsep visual dan mekanika game ke dalam kode fungsional, memastikan implementasi teknis selaras dengan visi desain.",
            "Memberikan panduan teknis dan pendampingan kepada programmer junior tentang pemecahan masalah kode dan praktik terbaik Unity, yang mempercepat kurva pembelajaran tim dan meningkatkan kualitas kode secara keseluruhan.",
            "Berpartisipasi aktif dalam proses peninjauan kode untuk mengidentifikasi dan menyelesaikan potensi hambatan kinerja, meningkatkan efisiensi dan stabilitas proyek game."
          ]
    }
  ];

  const honorsAndAwards = [
    {
      category: t("aboutPage.catExchange"),
      items: [
        "Apple Developer Academy @ Infinite Learning (2025)",
        "Samsung Innovation Campus Batch 6 (2024)"
      ]
    },
    {
      category: t("aboutPage.catComp"),
      items: language === "en"
        ? [
            "Indonesian Ship Contest (Kontes Kapal Indonesia) in the Autonomous Surface Vessel Division (2025)",
            "Gemastik XVII Programming & Cyber Security Division (2024)"
          ]
        : [
            "Kontes Kapal Indonesia Divisi Autonomous Surface Vessel (ASV) (2025)",
            "Gemastik XVII Divisi Pemrograman & Keamanan Siber (2024)"
          ]
    },
    {
      category: t("aboutPage.catCert"),
      items: language === "en"
        ? [
            "Apple Developer Certification (2025)",
            "Finalist Autonomous Surface Vessel (ASV) Prototype Development & Performance (2024)",
            "2nd Winner in the IT LKS Software Solution for Business Competition (2021)"
          ]
        : [
            "Sertifikasi Apple Developer (2025)",
            "Finalis Pengembangan & Performa Prototipe Autonomous Surface Vessel (ASV) (2024)",
            "Juara 2 Lomba IT LKS Software Solution for Business (2021)"
          ]
    },
    {
      category: t("aboutPage.catVol"),
      items: language === "en"
        ? [
            "AI Mentor at UMRAH Robotic Club for Autonomous System Integration (2025)",
            "IT Mentor at SMKN4 for LKS It Software Solution for Business (2023)"
          ]
        : [
            "Mentor AI di UMRAH Robotic Club untuk Integrasi Sistem Otonom (2025)",
            "Mentor IT di SMKN4 untuk LKS IT Software Solution for Business (2023)"
          ]
    }
  ];

  const skills = {
    webBackend: [
      "Laravel", "FastAPI", "Express.js", "PHP", "Go", "JavaScript",
      "Node.js", "React.js", "MongoDB", "PostgreSQL", "Docker",
      "AWS", "MVC", "Clean Architecture", "REST API", "Git", "GitHub"
    ],
    mobile: [
      "Swift", "SwiftUI", "UIKit", "Kotlin", "Jetpack Compose"
    ],
    mlAi: [
      "Python", "PyTorch", "TensorFlow", "Deep Learning", "Computer Vision"
    ],
    interpersonal: language === "en"
      ? ["Leadership", "Mentorship", "Collaboration", "Strategic Planning", "Technical Communication"]
      : ["Kepemimpinan", "Mentorship", "Kolaborasi", "Perencanaan Strategis", "Komunikasi Teknis"]
  };

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-12 transition-colors duration-300">
      {/* Container Grid */}
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">

        {/* Left Column: Sticky profile summary */}
        <div className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-2xl border border-zinc-200/50 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-950/40 p-6 shadow-sm space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                {t("aboutPage.bio")}
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                Muhammad Chandra Ramadhan
              </h1>
              <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                {t("aboutPage.role")}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 transition-colors">
              {t("aboutPage.bioDesc")}
            </p>

            <div className="space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-900/60 font-medium text-sm text-zinc-650 dark:text-zinc-400">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-zinc-450 dark:text-zinc-550" />
                <span>Tanjungpinang, Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-zinc-450 dark:text-zinc-550" />
                <span>mchandrar.me@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-900/60">
              {/* CV Download Link */}
              <Link
                href="/documents/CV%20-%20Muhammad%20Chandra%20Ramadhan.pdf"
                target="_blank"
                download
                className="w-full"
              >
                <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                  <FaDownload size={14} /> {t("aboutPage.btnCv")}
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/mchandrar/" target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <FaLinkedin size={14} /> {t("aboutPage.btnLinkedIn")}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Timelines and detailed sections */}
        <div className="space-y-12">

          {/* Experience Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-3 text-zinc-900 dark:text-zinc-50 border-b border-zinc-150 dark:border-zinc-900/60 pb-3">
              <FaBriefcase className="text-blue-500" /> {t("aboutPage.secExp")}
            </h2>
            <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 space-y-8">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-6">
                  {/* Timeline Dot */}
                  <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-blue-500 border-4 border-white dark:border-zinc-950" />

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <h3 className="font-bold text-zinc-900 dark:text-zinc-50">{exp.role}</h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400">{exp.period}</span>
                    </div>
                    <p className="text-xs font-semibold text-blue-650 dark:text-blue-450">{exp.company} | {exp.location}</p>
                    <ul className="list-disc pl-4 text-sm text-zinc-650 dark:text-zinc-400 space-y-1.5">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="leading-relaxed">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-3 text-zinc-900 dark:text-zinc-50 border-b border-zinc-150 dark:border-zinc-900/60 pb-3">
              <FaGraduationCap className="text-blue-500" /> {t("aboutPage.secEdu")}
            </h2>
            <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 space-y-8">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-6">
                  <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-blue-500 border-4 border-white dark:border-zinc-950" />

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <h3 className="font-bold text-zinc-900 dark:text-zinc-50">{edu.degree}</h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400">{edu.period}</span>
                    </div>
                    <p className="text-xs font-semibold text-blue-605 dark:text-blue-450">{edu.school} | {edu.location}</p>
                    {edu.gpa && <p className="text-xs font-bold text-zinc-500">{edu.gpa}</p>}
                    <ul className="list-disc pl-4 text-sm text-zinc-650 dark:text-zinc-400 space-y-1.5">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="leading-relaxed">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organizational Experience */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-3 text-zinc-900 dark:text-zinc-50 border-b border-zinc-150 dark:border-zinc-900/60 pb-3">
              <FaUsers className="text-blue-500" /> {t("aboutPage.secOrg")}
            </h2>
            <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 space-y-8">
              {organizations.map((org, i) => (
                <div key={i} className="relative pl-6">
                  <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-blue-500 border-4 border-white dark:border-zinc-950" />

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <h3 className="font-bold text-zinc-900 dark:text-zinc-50">{org.role}</h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400">{org.period}</span>
                    </div>
                    <p className="text-xs font-semibold text-blue-605 dark:text-blue-450">{org.organization}</p>
                    <ul className="list-disc pl-4 text-sm text-zinc-650 dark:text-zinc-400 space-y-1.5">
                      {org.details.map((detail, idx) => (
                        <li key={idx} className="leading-relaxed">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Awards */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-3 text-zinc-900 dark:text-zinc-50 border-b border-zinc-150 dark:border-zinc-900/60 pb-3">
              <FaAward className="text-blue-500" /> {t("aboutPage.secHon")}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {honorsAndAwards.map((award, i) => (
                <div key={i} className="rounded-xl border border-zinc-200/50 dark:border-zinc-800/80 bg-zinc-50/20 dark:bg-zinc-900/20 p-5 space-y-3">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-150 uppercase tracking-wide">
                    {award.category}
                  </h3>
                  <ul className="list-disc pl-4 text-xs text-zinc-650 dark:text-zinc-400 space-y-2 leading-relaxed">
                    {award.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-3 text-zinc-900 dark:text-zinc-50 border-b border-zinc-150 dark:border-zinc-900/60 pb-3">
              <FaTools className="text-blue-500" /> {t("aboutPage.secSkills")}
            </h2>
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">{t("aboutPage.skillWeb")}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skills.webBackend.map((s) => (
                    <span key={s} className="rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800 px-2 py-0.5 text-xs text-zinc-700 dark:text-zinc-300">{s}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">{t("aboutPage.skillMob")}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skills.mobile.map((s) => (
                    <span key={s} className="rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800 px-2 py-0.5 text-xs text-zinc-700 dark:text-zinc-300">{s}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">{t("aboutPage.skillMl")}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skills.mlAi.map((s) => (
                    <span key={s} className="rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800 px-2 py-0.5 text-xs text-zinc-700 dark:text-zinc-300">{s}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">{t("aboutPage.skillInter")}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skills.interpersonal.map((s) => (
                    <span key={s} className="rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800 px-2 py-0.5 text-xs text-zinc-700 dark:text-zinc-300">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
