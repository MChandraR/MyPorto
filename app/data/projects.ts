export type Project = {
  title: string;
  description: string;
  href: string;
  tech: string[];
  type: "AI/ML" | "System" | "Web" | "Game";
  image: string;
};

export const projects: Project[] = [
  {
    title: "Autonomous Surface Vessel (KKI 2024)",
    description: "An autonomous catamaran boat equipped with GPS navigation, sensor-based vision, and intelligent control systems. Built as a finalist project for Kontes Kapal Indonesia 2024.",
    href: "https://github.com/MChandraR",
    tech: ["C++", "Arduino", "GPS Navigation", "Computer Vision"],
    type: "AI/ML",
    image: "/images/project_placeholder.png",
  },
  {
    title: "Auto-Correct (Turing Machine)",
    description: "A web-based auto-correction system applying the Turing Machine concept, built with a Python Flask backend for linguistic and code pattern corrections.",
    href: "https://github.com/MChandraR/Auto-Correct-TBFO-Kelompok-3",
    tech: ["Python", "Flask", "Turing Machine", "Web"],
    type: "Web",
    image: "/images/project_placeholder.png",
  },
  {
    title: "Nusantara Culinary (GEMASTIK 2023)",
    description: "A game development entry for the GEMASTIK 2023 national competition, celebrating traditional Indonesian culinary arts in an interactive format.",
    href: "https://github.com/MChandraR/Nusantara-Culinary",
    tech: ["C#", "Unity", "Game Dev"],
    type: "Game",
    image: "/images/project_placeholder.png",
  },
  {
    title: "PHP Shopping Website",
    description: "A complete, clean e-commerce website platform implementing user carts, secure checkout flows, and product catalogs using PHP and MySQL.",
    href: "https://github.com/MChandraR/ShoppingWebsite",
    tech: ["PHP", "MySQL", "Web Dev"],
    type: "Web",
    image: "/images/project_placeholder.png",
  },
  {
    title: "Simple Chat Application",
    description: "A multi-threaded client-server chat application utilizing distributed socket programming in Java for reliable TCP network messaging.",
    href: "https://github.com/MChandraR/Project-Aplikasi-Chat-Sederhana",
    tech: ["Java", "Socket Programming", "Distributed Systems"],
    type: "System",
    image: "/images/project_placeholder.png",
  },
  {
    title: "Data Mining Final Project",
    description: "Data analysis platform implementing mining algorithms, clusterings, and visualizations to extract insights from structured datasets.",
    href: "https://github.com/MChandraR/Data-Mining-Final-Project",
    tech: ["Python", "CSS", "Data Mining"],
    type: "AI/ML",
    image: "/images/project_placeholder.png",
  },
];
