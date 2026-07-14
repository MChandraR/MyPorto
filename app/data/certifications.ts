export type Certification = {
  title: string;
  issuer: string;
  year: string;
  type: "Academy" | "Technical" | "Competition" | "Award";
  description: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Apple Developer Certification",
    issuer: "Apple Developer Academy @ Infinite Learning",
    year: "2025",
    type: "Academy",
    description: "Successfully graduated from the iOS Developer track, mastering Swift, SwiftUI, clean architecture (MVVM), and collaborative agile software development.",
    credentialUrl: "https://www.linkedin.com/in/mchandrar/",
  },
  {
    title: "Samsung Innovation Campus Batch 6 Graduate",
    issuer: "Samsung Electronics",
    year: "2024",
    type: "Technical",
    description: "Completed intensive training in AI, Machine Learning, and programming, building a strong foundation in predictive models and intelligence integration.",
    credentialUrl: "https://www.linkedin.com/in/mchandrar/",
  },
  {
    title: "Finalist Autonomous Surface Vessel (ASV) Prototype Development & Performance",
    issuer: "Kontes Kapal Indonesia (KKI)",
    year: "2024",
    type: "Competition",
    description: "Recognized as a national finalist for building a fully autonomous catamaran boat featuring sensor-based computer vision and GPS-guided autopilot systems.",
    credentialUrl: "https://www.linkedin.com/in/mchandrar/",
  },
  {
    title: "Indonesian Ship Contest (Kontes Kapal Indonesia) ASV Division",
    issuer: "Pusat Prestasi Nasional (Puspresnas)",
    year: "2025",
    type: "Competition",
    description: "Competed in the national Autonomous Surface Vessel division, engineering marine navigation controllers and real-time vision processing modules.",
    credentialUrl: "https://www.linkedin.com/in/mchandrar/",
  },
  {
    title: "Gemastik XVII Programming & Cyber Security Division",
    issuer: "Pusat Prestasi Nasional (Puspresnas)",
    year: "2024",
    type: "Competition",
    description: "Participated and excelled in national-level programming and cybersecurity contests organized by the Indonesian Ministry of Education.",
    credentialUrl: "https://www.linkedin.com/in/mchandrar/",
  },
  {
    title: "2nd Winner in IT LKS Software Solution for Business",
    issuer: "Lomba Kompetensi Siswa (LKS) SMK",
    year: "2021",
    type: "Award",
    description: "Achieved 2nd place in the regional vocational high school competition for designing, developing, and presenting a desktop/web business solution application.",
    credentialUrl: "https://www.linkedin.com/in/mchandrar/",
  },
];
