export type TranslationKey =
  | "nav.home"
  | "nav.about"
  | "nav.portfolio"
  | "nav.certifications"
  | "hero.tag"
  | "hero.title"
  | "hero.description"
  | "hero.btnTouch"
  | "hero.btnPortfolio"
  | "hero.stat1Label"
  | "hero.stat1Val"
  | "hero.stat2Label"
  | "hero.stat2Val"
  | "hero.stat3Label"
  | "hero.stat3Val"
  | "hero.termStatus"
  | "hero.termStatusVal"
  | "hero.termFocus"
  | "hero.termAffil"
  | "hero.termLang"
  | "hero.termSuccess"
  | "about.tag"
  | "about.title"
  | "about.description"
  | "about.high1Title"
  | "about.high1Val"
  | "about.high2Title"
  | "about.high2Val"
  | "about.high3Title"
  | "about.high3Val"
  | "about.techTitle"
  | "about.btnCollab"
  | "aboutPage.bio"
  | "aboutPage.role"
  | "aboutPage.bioDesc"
  | "aboutPage.btnCv"
  | "aboutPage.btnLinkedIn"
  | "aboutPage.secExp"
  | "aboutPage.secEdu"
  | "aboutPage.secOrg"
  | "aboutPage.secHon"
  | "aboutPage.secSkills"
  | "aboutPage.catExchange"
  | "aboutPage.catComp"
  | "aboutPage.catCert"
  | "aboutPage.catVol"
  | "aboutPage.skillWeb"
  | "aboutPage.skillMob"
  | "aboutPage.skillMl"
  | "aboutPage.skillInter"
  | "port.tag"
  | "port.title"
  | "port.subtitle"
  | "port.search"
  | "port.empty"
  | "cert.tag"
  | "cert.title"
  | "cert.subtitle"
  | "cert.search"
  | "cert.empty"
  | "cert.verify"
  | "feat.tag"
  | "feat.title"
  | "feat.subtitle"
  | "feat.more";

export const translations: Record<"en" | "id", Record<TranslationKey, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.certifications": "Certifications",
    "hero.tag": "Software & ML/AI Engineer",
    "hero.title": "Muhammad Chandra Ramadhan",
    "hero.description":
      "Building data-driven systems, on-device intelligence, and autonomous navigation. Blending native software engineering with applied machine learning to build highly responsive, intelligent experiences.",
    "hero.btnTouch": "Get in Touch",
    "hero.btnPortfolio": "View Portfolio",
    "hero.stat1Label": "Apple Dev Certified",
    "hero.stat1Val": "Cohort 2025",
    "hero.stat2Label": "Google Student Ambassador",
    "hero.stat2Val": "2025",
    "hero.stat3Label": "GitHub Repositories",
    "hero.stat3Val": "55+",
    "hero.termStatus": "status",
    "hero.termStatusVal": "Active & Building",
    "hero.termFocus": "focus",
    "hero.termAffil": "affiliations",
    "hero.termLang": "languages",
    "hero.termSuccess": "[SUCCESS] GPS Navigation & Sensor-based Vision systems active.",
    "about.tag": "About Me",
    "about.title": "Engineering autonomous systems & data-informed solutions.",
    "about.description":
      "I am a Software and Machine Learning Engineer currently studying Informatics Engineering at Universitas Maritim Raja Ali Haji. Active as a Google Student Ambassador 2025 and an Apple Developer Academy Graduate (Cohort 2025), I love developing real-world, intelligent systems from autonomous boat controllers to server-side AI applications.",
    "about.high1Title": "Research & Systems",
    "about.high1Val": "Computer Vision & IoT",
    "about.high2Title": "Applied AI / ML",
    "about.high2Val": "PyTorch & CoreML models",
    "about.high3Title": "Next-gen Apps",
    "about.high3Val": "Swift, Python, & C++ Control",
    "about.techTitle": "Core Technologies & Frameworks",
    "about.btnCollab": "Let's Collaborate",
    "aboutPage.bio": "Biography",
    "aboutPage.role": "Full-Stack Software Engineer & Machine Learning Engineer",
    "aboutPage.bioDesc":
      "Versatile Software Engineer with a solid foundation in full-stack development, mobile application engineering, and machine learning. Proven track record in building robust end-to-end solutions, from designing responsive frontend interfaces to engineering scalable backend systems. Passionate about leveraging advanced AI features to create modern, high-performance applications.",
    "aboutPage.btnCv": "Download CV (PDF)",
    "aboutPage.btnLinkedIn": "Connect on LinkedIn",
    "aboutPage.secExp": "Professional Experience",
    "aboutPage.secEdu": "Education",
    "aboutPage.secOrg": "Organizational Experience",
    "aboutPage.secHon": "Honors, Awards & Volunteering",
    "aboutPage.secSkills": "Technical Skills",
    "aboutPage.catExchange": "Exchange Programs",
    "aboutPage.catComp": "Competitions",
    "aboutPage.catCert": "Certifications",
    "aboutPage.catVol": "Volunteering",
    "aboutPage.skillWeb": "Web & Backend Development",
    "aboutPage.skillMob": "Mobile Development",
    "aboutPage.skillMl": "Machine Learning & AI",
    "aboutPage.skillInter": "Interpersonal Skills",
    "port.tag": "Work Showcase",
    "port.title": "GitHub Repositories",
    "port.subtitle":
      "Explore complete projects, autonomous vessel navigation codes, machine learning scripts, and web platforms.",
    "port.search": "Search projects or tech...",
    "port.empty": "No projects found matching '{search}' in '{tab}'.",
    "cert.tag": "Achievements",
    "cert.title": "Certifications & Awards",
    "cert.subtitle":
      "Professional training, academy milestones, and competition achievements from national and global institutions.",
    "cert.search": "Search certifications...",
    "cert.empty": "No certifications found matching '{search}' in '{tab}'.",
    "cert.verify": "Verify Credential",
    "feat.tag": "Selected Work",
    "feat.title": "Featured Projects",
    "feat.subtitle":
      "A showcase of my recent coding endeavors, autonomous systems control, and development highlights.",
    "feat.more": "See More / Selengkapnya",
  },
  id: {
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.portfolio": "Portofolio",
    "nav.certifications": "Sertifikasi",
    "hero.tag": "Insinyur Perangkat Lunak & ML/AI",
    "hero.title": "Muhammad Chandra Ramadhan",
    "hero.description":
      "Membangun sistem berbasis data, kecerdasan on-device, dan navigasi otonom. Menggabungkan rekayasa perangkat lunak native dengan machine learning terapan untuk membangun pengalaman cerdas yang sangat responsif.",
    "hero.btnTouch": "Hubungi Saya",
    "hero.btnPortfolio": "Lihat Portofolio",
    "hero.stat1Label": "Sertifikasi Apple Dev",
    "hero.stat1Val": "Angkatan 2025",
    "hero.stat2Label": "Duta Mahasiswa Google",
    "hero.stat2Val": "2025",
    "hero.stat3Label": "Repositori GitHub",
    "hero.stat3Val": "55+",
    "hero.termStatus": "status",
    "hero.termStatusVal": "Aktif & Membangun",
    "hero.termFocus": "fokus",
    "hero.termAffil": "afiliasi",
    "hero.termLang": "bahasa",
    "hero.termSuccess": "[SUKSES] Navigasi GPS & Sistem Vision berbasis Sensor aktif.",
    "about.tag": "Tentang Saya",
    "about.title": "Merekayasa sistem otonom & solusi berbasis data.",
    "about.description":
      "Saya adalah seorang Insinyur Perangkat Lunak dan Machine Learning yang saat ini sedang menempuh pendidikan Teknik Informatika di Universitas Maritim Raja Ali Haji. Aktif sebagai Google Student Ambassador 2025 dan Lulusan Apple Developer Academy (Cohort 2025), saya senang mengembangkan sistem cerdas di dunia nyata, mulai dari pengontrol kapal otonom hingga aplikasi AI di sisi server.",
    "about.high1Title": "Riset & Sistem",
    "about.high1Val": "Visi Komputer & IoT",
    "about.high2Title": "AI / ML Terapan",
    "about.high2Val": "Model PyTorch & CoreML",
    "about.high3Title": "Aplikasi Next-gen",
    "about.high3Val": "Kontrol Swift, Python, & C++",
    "about.techTitle": "Teknologi Utama & Framework",
    "about.btnCollab": "Mari Berkolaborasi",
    "aboutPage.bio": "Biografi",
    "aboutPage.role": "Insinyur Perangkat Lunak Full-Stack & Insinyur Machine Learning",
    "aboutPage.bioDesc":
      "Insinyur Perangkat Lunak yang serbabisa dengan fondasi kuat dalam pengembangan full-stack, rekayasa aplikasi seluler, dan machine learning. Memiliki rekam jejak terbukti dalam membangun solusi end-to-end yang tangguh, mulai dari merancang antarmuka frontend yang responsif hingga merekayasa sistem backend yang terukur. Terobsesi untuk memanfaatkan fitur AI canggih guna menciptakan aplikasi modern berkinerja tinggi.",
    "aboutPage.btnCv": "Unduh CV (PDF)",
    "aboutPage.btnLinkedIn": "Terhubung di LinkedIn",
    "aboutPage.secExp": "Pengalaman Profesional",
    "aboutPage.secEdu": "Pendidikan",
    "aboutPage.secOrg": "Pengalaman Organisasi",
    "aboutPage.secHon": "Penghargaan, Prestasi & Relawan",
    "aboutPage.secSkills": "Keahlian Teknis",
    "aboutPage.catExchange": "Program Pertukaran",
    "aboutPage.catComp": "Kompetisi",
    "aboutPage.catCert": "Sertifikasi",
    "aboutPage.catVol": "Relawan",
    "aboutPage.skillWeb": "Pengembangan Web & Backend",
    "aboutPage.skillMob": "Pengembangan Aplikasi Seluler",
    "aboutPage.skillMl": "Machine Learning & AI",
    "aboutPage.skillInter": "Keahlian Interpersonal",
    "port.tag": "Galeri Karya",
    "port.title": "Repositori GitHub",
    "port.subtitle":
      "Jelajahi proyek lengkap, kode navigasi kapal otonom, skrip machine learning, dan platform web.",
    "port.search": "Cari proyek atau teknologi...",
    "port.empty": "Tidak ada proyek yang ditemukan cocok dengan '{search}' di '{tab}'.",
    "cert.tag": "Prestasi",
    "cert.title": "Sertifikasi & Penghargaan",
    "cert.subtitle":
      "Pelatihan profesional, pencapaian akademi, dan prestasi kompetisi dari institusi nasional maupun global.",
    "cert.search": "Cari sertifikasi...",
    "cert.empty": "Tidak ada sertifikasi yang ditemukan cocok dengan '{search}' di '{tab}'.",
    "cert.verify": "Verifikasi Kredensial",
    "feat.tag": "Karya Pilihan",
    "feat.title": "Proyek Unggulan",
    "feat.subtitle":
      "Galeri dari upaya pemrograman terbaru saya, kontrol sistem otonom, dan sorotan pengembangan.",
    "feat.more": "Lihat Selengkapnya",
  },
};
