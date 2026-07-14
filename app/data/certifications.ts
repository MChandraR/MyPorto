export type Certification = {
  titleEn: string;
  titleId: string;
  issuerEn: string;
  issuerId: string;
  year: string;
  type: "Academy" | "Technical" | "Competition" | "Award";
  descriptionEn: string;
  descriptionId: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    titleEn: "Apple Developer Certification",
    titleId: "Sertifikasi Developer Apple",
    issuerEn: "Apple Developer Academy @ Infinite Learning",
    issuerId: "Apple Developer Academy @ Infinite Learning",
    year: "2025",
    type: "Academy",
    descriptionEn: "Successfully graduated from the iOS Developer track, mastering Swift, SwiftUI, clean architecture (MVVM), and collaborative agile software development.",
    descriptionId: "Berhasil lulus dari jalur iOS Developer, menguasai Swift, SwiftUI, clean architecture (MVVM), dan pengembangan perangkat lunak tangkas kolaboratif.",
    credentialUrl: "https://www.linkedin.com/in/mchandrar/",
  },
  {
    titleEn: "Samsung Innovation Campus Batch 6 Graduate",
    titleId: "Lulusan Samsung Innovation Campus Angkatan 6",
    issuerEn: "Samsung Electronics",
    issuerId: "Samsung Electronics",
    year: "2024",
    type: "Technical",
    descriptionEn: "Completed intensive training in AI, Machine Learning, and programming, building a strong foundation in predictive models and intelligence integration.",
    descriptionId: "Menyelesaikan pelatihan intensif di bidang AI, Machine Learning, dan pemrograman, membangun fondasi yang kuat dalam model prediktif dan integrasi kecerdasan.",
    credentialUrl: "https://www.linkedin.com/in/mchandrar/",
  },
  {
    titleEn: "Finalist Autonomous Surface Vessel (ASV) Prototype Development & Performance",
    titleId: "Finalis Pengembangan & Performa Prototipe Autonomous Surface Vessel (ASV)",
    issuerEn: "Kontes Kapal Indonesia (KKI)",
    issuerId: "Kontes Kapal Indonesia (KKI)",
    year: "2024",
    type: "Competition",
    descriptionEn: "Recognized as a national finalist for building a fully autonomous catamaran boat featuring sensor-based computer vision and GPS-guided autopilot systems.",
    descriptionId: "Diakui sebagai finalis tingkat nasional karena membangun kapal katamaran otonom lengkap dengan visi komputer berbasis sensor dan sistem autopilot berbasis GPS.",
    credentialUrl: "https://www.linkedin.com/in/mchandrar/",
  },
  {
    titleEn: "Indonesian Ship Contest (Kontes Kapal Indonesia) ASV Division",
    titleId: "Kontes Kapal Indonesia Divisi ASV",
    issuerEn: "Pusat Prestasi Nasional (Puspresnas)",
    issuerId: "Pusat Prestasi Nasional (Puspresnas)",
    year: "2025",
    type: "Competition",
    descriptionEn: "Competed in the national Autonomous Surface Vessel division, engineering marine navigation controllers and real-time vision processing modules.",
    descriptionId: "Berkompetisi di tingkat nasional pada divisi Kapal Otonom (ASV), merekayasa kontroler navigasi laut dan modul pemrosesan visi real-time.",
    credentialUrl: "https://www.linkedin.com/in/mchandrar/",
  },
  {
    titleEn: "Gemastik XVII Programming & Cyber Security Division",
    titleId: "Gemastik XVII Divisi Pemrograman & Keamanan Siber",
    issuerEn: "Pusat Prestasi Nasional (Puspresnas)",
    issuerId: "Pusat Prestasi Nasional (Puspresnas)",
    year: "2024",
    type: "Competition",
    descriptionEn: "Participated and excelled in national-level programming and cybersecurity contests organized by the Indonesian Ministry of Education.",
    descriptionId: "Berpartisipasi dan unggul dalam kontes pemrograman dan keamanan siber tingkat nasional yang diselenggarakan oleh Kementerian Pendidikan RI.",
    credentialUrl: "https://www.linkedin.com/in/mchandrar/",
  },
  {
    titleEn: "2nd Winner in IT LKS Software Solution for Business",
    titleId: "Juara 2 IT LKS Software Solution for Business",
    issuerEn: "Lomba Kompetensi Siswa (LKS) SMK",
    issuerId: "Lomba Kompetensi Siswa (LKS) SMK",
    year: "2021",
    type: "Award",
    descriptionEn: "Achieved 2nd place in the regional vocational high school competition for designing, developing, and presenting a desktop/web business solution application.",
    descriptionId: "Meraih juara ke-2 dalam kompetisi sekolah menengah kejuruan tingkat regional untuk merancang, mengembangkan, dan mempresentasikan aplikasi solusi bisnis desktop/web.",
    credentialUrl: "https://www.linkedin.com/in/mchandrar/",
  },
];
