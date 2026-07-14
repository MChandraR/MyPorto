export type Project = {
  titleEn: string;
  titleId: string;
  descriptionEn: string;
  descriptionId: string;
  href: string;
  tech: string[];
  type: "AI/ML" | "System" | "Web" | "Game";
  image: string;
};

export const projects: Project[] = [
  {
    titleEn: "Autonomous Surface Vessel (KKI 2024)",
    titleId: "Autonomous Surface Vessel (KKI 2024)",
    descriptionEn: "An autonomous catamaran boat equipped with GPS navigation, sensor-based vision, and intelligent control systems. Built as a finalist project for Kontes Kapal Indonesia 2024.",
    descriptionId: "Kapal katamaran otonom yang dilengkapi dengan navigasi GPS, visi berbasis sensor, dan sistem kontrol cerdas. Dibangun sebagai proyek finalis Kontes Kapal Indonesia 2024.",
    href: "https://github.com/MChandraR",
    tech: ["C++", "Arduino", "GPS Navigation", "Computer Vision"],
    type: "AI/ML",
    image: "/images/project_placeholder.png",
  },
  {
    titleEn: "Auto-Correct (Turing Machine)",
    titleId: "Koreksi Otomatis (Turing Machine)",
    descriptionEn: "A web-based auto-correction system applying the Turing Machine concept, built with a Python Flask backend for linguistic and code pattern corrections.",
    descriptionId: "Sistem koreksi otomatis berbasis web yang menerapkan konsep Mesin Turing, dibangun dengan backend Python Flask untuk koreksi pola linguistik dan kode.",
    href: "https://github.com/MChandraR/Auto-Correct-TBFO-Kelompok-3",
    tech: ["Python", "Flask", "Turing Machine", "Web"],
    type: "Web",
    image: "/images/project_placeholder.png",
  },
  {
    titleEn: "Nusantara Culinary (GEMASTIK 2023)",
    titleId: "Nusantara Culinary (GEMASTIK 2023)",
    descriptionEn: "A game development entry for the GEMASTIK 2023 national competition, celebrating traditional Indonesian culinary arts in an interactive format.",
    descriptionId: "Karya pengembangan game untuk kompetisi nasional GEMASTIK 2023, merayakan seni kuliner tradisional Indonesia dalam format interaktif.",
    href: "https://github.com/MChandraR/Nusantara-Culinary",
    tech: ["C#", "Unity", "Game Dev"],
    type: "Game",
    image: "/images/project_placeholder.png",
  },
  {
    titleEn: "PHP Shopping Website",
    titleId: "Website Belanja PHP",
    descriptionEn: "A complete, clean e-commerce website platform implementing user carts, secure checkout flows, and product catalogs using PHP and MySQL.",
    descriptionId: "Platform situs web e-commerce lengkap yang menerapkan keranjang pengguna, alur checkout yang aman, dan katalog produk menggunakan PHP dan MySQL.",
    href: "https://github.com/MChandraR/ShoppingWebsite",
    tech: ["PHP", "MySQL", "Web Dev"],
    type: "Web",
    image: "/images/project_placeholder.png",
  },
  {
    titleEn: "Simple Chat Application",
    titleId: "Aplikasi Chat Sederhana",
    descriptionEn: "A multi-threaded client-server chat application utilizing distributed socket programming in Java for reliable TCP network messaging.",
    descriptionId: "Aplikasi obrolan klien-server multi-threaded yang memanfaatkan pemrograman soket terdistribusi di Java untuk pengiriman pesan jaringan TCP yang andal.",
    href: "https://github.com/MChandraR/Project-Aplikasi-Chat-Sederhana",
    tech: ["Java", "Socket Programming", "Distributed Systems"],
    type: "System",
    image: "/images/project_placeholder.png",
  },
  {
    titleEn: "Data Mining Final Project",
    descriptionEn: "Data analysis platform implementing mining algorithms, clusterings, and visualizations to extract insights from structured datasets.",
    titleId: "Proyek Akhir Data Mining",
    descriptionId: "Platform analisis data yang menerapkan algoritma data mining, pengklasteran, dan visualisasi untuk mengekstrak wawasan dari kumpulan data terstruktur.",
    href: "https://github.com/MChandraR/Data-Mining-Final-Project",
    tech: ["Python", "CSS", "Data Mining"],
    type: "AI/ML",
    image: "/images/project_placeholder.png",
  },
];
