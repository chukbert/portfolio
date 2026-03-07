import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faiz Muhammad Muflich — Fullstack AI Engineer",
  description:
    "Portfolio of Faiz Muhammad Muflich — Fullstack AI Engineer specialising in Healthcare AI, EHR systems, ETL pipelines, and ML deployment in Indonesia.",
  keywords: ["Faiz Muhammad Muflich", "Fullstack AI Engineer", "Healthcare AI", "EHR", "Next.js", "FastAPI", "Indonesia"],
  openGraph: {
    title: "Faiz Muhammad Muflich — Fullstack AI Engineer",
    description: "Bridging complex data systems and human-centered design in healthcare and enterprise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Noise grain overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
