// src/types/certificate.ts
export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  pdfPath: string; // Mengarah ke file PDF
  logoUrl: string;
}

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "AI Engineer",
    issuer: "Lintasarta x Dicoding Indonesia",
    issueDate: "June 2025",
    pdfPath: "public/certificate/laskarai.pdf", 
    logoUrl: "public/logo-laskar-ai.svg"
  },
  {
    id: 2,
    title: "Mobile Development",
    issuer: "Google, GoTo, Traveloka, Kemendikbudristek, & Dicoding Indonesia",
    issueDate: "Des 2023",
    pdfPath: "public/certificate/bangkit.pdf",
    logoUrl: "public/bangkit.png"
  },
  {
    id: 3,
    title: "Advanced Data Science",
    issuer: "Dicoding Indonesia",
    issueDate: "Mei 2025",
    pdfPath: "public/certificate/Advanced Data Science.pdf", 
    logoUrl: "public/dicoding.png"
  },
  {
    id: 4,
    title: "Data Analyst With Python",
    issuer: "Dicoding Indonesia",
    issueDate: "Oct 2024",
    pdfPath: "public/certificate/Data Analyst with Python.pdf", 
    logoUrl: "public/dicoding.png"
  },
  {
    id: 5,
    title: "Machine Learning for Beginner",
    issuer: "Dicoding Indonesia",
    issueDate: "Jan 2026",
    pdfPath: "public/certificate/Machine Learning for Beginners.pdf", 
    logoUrl: "public/dicoding.png"
  },
  {
    id: 6,
    title: "Machine Learning Intermediete",
    issuer: "Dicoding Indonesia",
    issueDate: "Apr 2025",
    pdfPath: "public/certificate/Machine Learning Intermediete.pdf", 
    logoUrl: "public/dicoding.png"
  },
  {
    id: 7,
    title: "Machine Learning Expert",
    issuer: "Dicoding Indonesia",
    issueDate: "Apr 2025",
    pdfPath: "public/certificate/Machine Learning Expert.pdf", 
    logoUrl: "public/dicoding.png"
  },
  {
    id: 8,
    title: "Building Machine Learning System",
    issuer: "Dicoding Indonesia",
    issueDate: "Jun 2025",
    pdfPath: "public/certificate/Building Machine Learning System.pdf", 
    logoUrl: "public/dicoding.png"
  },
  {
    id: 9,
    title: "Database Foundation",
    issuer: "Oracle",
    issueDate: "Nov 2022",
    pdfPath: "public/certificate/Database Foundation.pdf", 
    logoUrl: "public/oracle.png"
  },
  {
    id: 10,
    title: "Basic SQL",
    issuer: "Dicoding Indonesia",
    issueDate: "Mei 2023",
    pdfPath: "public/certificate/Basic Structured Query Language.pdf", 
    logoUrl: "public/dicoding.png"
  },
  {
    id: 11,
    title: "Starting Programming with Kotlin",
    issuer: "Dicoding Indonesia",
    issueDate: "Aug 2023",
    pdfPath: "public/certificate/Memulai Pemrograman dengan Kotlin.pdf", 
    logoUrl: "public/dicoding.png"
  },
  {
    id: 12,
    title: "Programming in Python",
    issuer: "Dicoding Indonesia",
    issueDate: "Feb 2025",
    pdfPath: "public/certificate/Getting Started Programming in Python.pdf", 
    logoUrl: "public/dicoding.png"
  },
  {
    id: 13,
    title: "Basic Data Visualization",
    issuer: "Dicoding Indonesia",
    issueDate: "Feb 2025",
    pdfPath: "public/certificate/Basic Data Visualization.pdf", 
    logoUrl: "public/dicoding.png"
  },
  {
    id: 14,
    title: "Basic Artificial Intelligence",
    issuer: "Dicoding Indonesia",
    issueDate: "Sept 2024",
    pdfPath: "public/certificate/Basic Artificial Intelligence.pdf", 
    logoUrl: "public/dicoding.png"
  },
  {
    id: 15,
    title: "Basic Data Science",
    issuer: "Dicoding Indonesia",
    issueDate: "Nov 2023",
    pdfPath: "public/certificate/Basic Data Science.pdf", 
    logoUrl: "public/dicoding.png"
  },
  {
    id: 16,
    title: "Basic Web Developer",
    issuer: "BPVP Samarinda",
    issueDate: "Mei 2025",
    pdfPath: "public/certificate/SERTIFIKAT KELULUSAN PELATIHAN - Basic Web Developer.pdf", 
    logoUrl: "public/bpvp.png"
  },
];