"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  year: string;
  tags: string[];
  description: string;
  image: string;
  href?: string;
}

const projects: Project[] = [
  {
    id: 1, slug: "01", title: "Creator Pulse", subtitle: "AI-Augmented Analytics & Storefront",
    company: "Personal Project", year: "2026", tags: ["Elixir", "Phoenix", "Nuxt 3", "Claude Code"],
    description: "High-concurrency digital storefront and analytics platform with an autonomous Text-to-SQL AI agent and in-memory query caching.",
    image: "/images/creator-pulse/thumbnail.png", href: "/creator-pulse"
  },
  {
    id: 2, slug: "02", title: "Enterprise EHR Platform", subtitle: "Clinical Decision AI + SATUSEHAT",
    company: "Seha Indonesia", year: "2025", tags: ["FHIR R4", "OAuth2", "Next.js", "PostgreSQL"],
    description: "Multi-tenant SaaS EHR platform with AI clinical decision chatbot, SATUSEHAT integration, and RBAC security; built using AI-augmented workflows.",
    image: "/images/seha/login_page_seha.png", href: "/seha",
  },
  {
    id: 3, slug: "03", title: "AI Tax Consultation", subtitle: "RAG-powered Tax Assistant",
    company: "Paham Pajak", year: "2026", tags: ["Gemini API", "RAG", "Drizzle", "Redis"],
    description: "Indonesian tax consultation platform with AI-powered chat using Google Gemini and RAG over 2023-2026 tax regulations.",
    image: "/images/paham-pajak/thumbnail.png", href: "/paham-pajak"
  },
  {
    id: 4, slug: "04", title: "KOMA: Mental Health Companion", subtitle: "Safe Space & AI Empathy",
    company: "Ongoing Project", year: "2025", tags: ["Next.js 14", "FastAPI", "LLM", "Docker"],
    description: "Virtual companion with a focus on empathy, featuring cathartic release animations, grounding techniques, and supportive AI interactions.",
    image: "/images/koma_with_bg.png",
  },
  {
    id: 5, slug: "05", title: "Growth Chart Plotter", subtitle: "CDC & WHO Standard Visualisation",
    company: "Healthcare SaaS", year: "2025", tags: ["CDC/WHO", "Z-Score", "React", "TypeScript"],
    description: "Clinical growth chart application with z-score interpretation and multi-visit trend overlays for paediatric clinicians.",
    image: "/images/Gemini_Generated_Image_ubsaxyubsaxyubsa.png",
  },
  {
    id: 6, slug: "06", title: "Clinic Management Platform", subtitle: "RBAC + WhatsApp Patient Portal",
    company: "Hagia Pediatric", year: "2025", tags: ["JWT", "Audit Log", "WhatsApp API", "NestJS"],
    description: "Pediatric clinic management system with role-based access control, secure patient portals, and prepaid deposit tracking.",
    image: "/images/closeup.png",
  },
  {
    id: 7, slug: "07", title: "ETL Pipeline Orchestration", subtitle: "Airflow + NiFi Data Workflows",
    company: "Xquisite AI", year: "2025", tags: ["Apache Airflow", "NiFi", "Snowflake", "Python"],
    description: "Automated ETL workflows for cross-cloud data extraction and transformation with modular logging and retry logic.",
    image: "/images/hero-portrait.jpg",
  },
  {
    id: 8, slug: "08", title: "ML Pipeline Infrastructure", subtitle: "CI/CD + Cloud Deployment",
    company: "Pusat AI ITB", year: "2024", tags: ["MLOps", "GitHub Actions", "FastAPI", "GCP"],
    description: "End-to-end ML pipelines for enterprise projects with optimized feature engineering and automated CI/CD deployment.",
    image: "/images/arak.jpeg",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6%" });
  const reduced = useReducedMotion();

  const CardWrapper = project.href ? Link : "div";
  const wrapperProps = project.href
    ? { href: project.href, style: { textDecoration: "none", color: "inherit", display: "block" } }
    : {};

  return (
    <motion.article
      ref={ref}
      initial={reduced ? {} : { opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.1 }}
      className="card group flex flex-col"
      style={{ cursor: project.href ? "pointer" : "default" }}
    >
      {/* @ts-expect-error - dynamic component type */}
      <CardWrapper {...wrapperProps}>
        {/* Image */}
        <div style={{ position: "relative", height: "clamp(180px, 28vw, 260px)", overflow: "hidden", borderRadius: "20px 20px 0 0" }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span style={{
            position: "absolute", top: "1rem", right: "1rem",
            fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.1em",
            padding: "0.3rem 0.7rem", borderRadius: "100px",
            background: "rgba(14,13,10,0.65)", backdropFilter: "blur(6px)", color: "var(--bone)",
          }}>
            {project.slug}
          </span>
          <span style={{
            position: "absolute", top: "1rem", left: "1rem",
            fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.1em",
            padding: "0.3rem 0.7rem", borderRadius: "100px",
            background: "rgba(14,13,10,0.65)", backdropFilter: "blur(6px)", color: "var(--vermillion)",
          }}>
            {project.year}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: "1.5rem 1.75rem 1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--vermillion)" }}>
            {project.company}
          </p>
          <h3
            className="group-hover:text-[var(--vermillion)] transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "1.35rem", lineHeight: 1.15, letterSpacing: "-0.025em", color: "var(--ink)" }}
          >
            {project.title}
          </h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--fog)", fontStyle: "italic" }}>
            {project.subtitle}
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.75, color: "var(--ink)", flex: 1 }}>
            {project.description}
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem", marginTop: "0.5rem" }}>
            <div className="flex flex-wrap gap-[0.4rem]" role="list" aria-label="Technologies used">
              {project.tags.map((tag) => (
                <span key={tag} role="listitem" style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "0.25rem 0.65rem", borderRadius: "100px",
                  background: "var(--bone)", color: "var(--fog)", border: "1px solid var(--rule-light)",
                }}>
                  {tag}
                </span>
              ))}
            </div>
            {project.href && (
              <span
                className="group-hover:text-[var(--vermillion)] transition-colors duration-300"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--fog)", whiteSpace: "nowrap", flexShrink: 0 }}
                aria-hidden="true"
              >
                View →
              </span>
            )}
          </div>
        </div>
      </CardWrapper>
    </motion.article>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const reduced = useReducedMotion();

  return (
    <section id="projects" style={{ background: "var(--bone-dark)", paddingTop: "1.5rem", paddingBottom: "8rem" }}>
      <div className="wrap">
        <div ref={headerRef} style={{ marginBottom: "3.5rem" }}>
          <motion.p
            initial={reduced ? {} : { opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--vermillion)", marginBottom: "0.75rem" }}
          >
            01 / Selected Work
          </motion.p>
          <motion.h2
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "clamp(1.85rem, 5vw, 4rem)", lineHeight: 1.0, letterSpacing: "-0.035em", color: "var(--ink)", maxWidth: "16ch" }}
          >
            Things I've Built
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
