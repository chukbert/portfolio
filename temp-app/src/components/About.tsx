"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const focusAreas = [
  { label: "Scalable Backend Systems", note: "Resilient Architectures · Real-time Concurrency" },
  { label: "Full-stack Product Engineering", note: "Polished UI · Optimized Performance" },
  { label: "AI-Augmented Workflows", note: "Claude Code · Accelerated Velocity" },
  { label: "Healthcare AI & EHR Systems", note: "Standard-Compliant · Security Focused" },
  { label: "Data Engineering & Analytics", note: "Automated Pipelines · Insights-Driven" },
  { label: "Cloud & Dev Infrastructure", note: "Distributed Systems · Automation" },
];

const timeline = [
  { year: "2025–2026", role: "Fullstack AI Engineer", company: "Seha Indonesia" },
  { year: "2025", role: "Fullstack Engineer", company: "Hagia Pediatric" },
  { year: "2025", role: "Data Engineer", company: "Xquisite AI" },
  { year: "2024–2025", role: "MLOps / Backend Engineer", company: "Pusat AI ITB" },
  { year: "2023–2024", role: "Backend Engineer Intern", company: "Prosa.ai" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const reduced = useReducedMotion();

  return (
    <section
      id="about"
      ref={ref}
      style={{ background: "var(--bone)", paddingTop: "7rem", paddingBottom: "8rem" }}
    >
      <div className="wrap">
        <motion.p
          initial={reduced ? {} : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--vermillion)", marginBottom: "0.75rem" }}
        >
          02 / About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* LEFT */}
          <div>
            <motion.h2
              initial={reduced ? {} : { opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              style={{
                fontFamily: "var(--font-body)", fontWeight: 800,
                fontSize: "clamp(1.85rem, 5vw, 4rem)", lineHeight: 1.0,
                letterSpacing: "-0.035em", color: "var(--ink)", marginBottom: "2.5rem",
              }}
            >
              Building full-stack products at the speed of AI.
            </motion.h2>

            <motion.div
              initial={reduced ? {} : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <blockquote style={{
                fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400,
                fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", lineHeight: 1.55, color: "var(--ink)",
                borderLeft: "2px solid var(--vermillion)", paddingLeft: "1.25rem", marginBottom: "2rem",
              }}>
                Quality and velocity aren't trade-offs — they're the result of clean architecture and AI-augmented workflows.
              </blockquote>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.85, color: "var(--ink)" }}>
                <p>
                  As a Software Engineer, I thrive on building digital products that scale. I'm a versatile full-stack engineer with a deep interest in architecting resilient backend systems and crafting polished, performant frontends that prioritize user experience and SEO.
                </p>
                <p>
                  I believe that quality and velocity are not trade-offs when paired with clean architecture and AI-augmented workflows. By leveraging modern development tools like <strong>Claude Code</strong>, I focus on shipping well-tested, maintainable code with high efficiency. I take pride in owning the entire product lifecycle—from technical planning to production deployment.
                </p>
              </div>

              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fog)", marginTop: "2rem" }}>
                Solo, Jawa Tengah · Open to freelance &amp; remote work
              </p>
            </motion.div>

            {/* Portrait on mobile */}
            <motion.div
              initial={reduced ? {} : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="md:hidden"
              style={{ position: "relative", height: "300px", borderRadius: "var(--radius-card)", overflow: "hidden", marginTop: "2.5rem", border: "1px solid var(--rule-light)" }}
            >
              <Image src="/images/closeup.png" alt="Faiz Muhammad Muflich" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
            </motion.div>
          </div>

          {/* RIGHT */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {/* Timeline */}
            <motion.div
              initial={reduced ? {} : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fog)", marginBottom: "1.5rem" }}>
                Experience
              </p>
              <ul role="list" style={{ display: "flex", flexDirection: "column", listStyle: "none" }}>
                {timeline.map((item, i) => (
                  <li
                    key={i}
                    className="timeline-item"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "clamp(5rem, 15vw, 7rem) 1fr",
                      gap: "1rem",
                      padding: "1.25rem 0",
                      borderBottom: "1px solid var(--rule-light)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.08em", color: "var(--vermillion)", paddingTop: "0.15rem" }}>
                      {item.year}
                    </span>
                    <div>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, color: "var(--ink)", display: "block", marginBottom: "0.25rem" }}>
                        {item.role}
                      </span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--fog)", letterSpacing: "0.06em" }}>
                        {item.company}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Expertise */}
            <motion.div
              initial={reduced ? {} : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fog)", marginBottom: "1.5rem" }}>
                Expertise
              </p>
              <div role="list" style={{ display: "flex", flexDirection: "column" }}>
                {focusAreas.map((area, i) => (
                  <div
                    key={area.label}
                    role="listitem"
                    className="group"
                    style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", padding: "1rem 0", borderBottom: "1px solid var(--rule-light)", cursor: "default" }}
                  >
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <span
                        className="group-hover:text-[var(--ink)] transition-colors duration-200"
                        style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 500, color: "var(--fog)", display: "block" }}
                      >
                        {area.label}
                      </span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--fog)", letterSpacing: "0.08em", wordBreak: "break-word" }}>
                        {area.note}
                      </span>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--fog)", flexShrink: 0, paddingTop: "0.15rem" }}>
                      0{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={reduced ? {} : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ background: "var(--bone-dark)", borderRadius: "var(--radius-card)", padding: "1.5rem 1.75rem", border: "1px solid var(--rule-light)" }}
            >
              {/* Education card */}
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fog)", marginBottom: "1rem" }}>
                Education
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                {/* ITB Logo — 80×80 square */}
                <div style={{
                  flexShrink: 0,
                  width: "80px",
                  height: "80px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  background: "var(--bone)",
                  border: "1px solid var(--rule-light)",
                  position: "relative",
                }}>
                  <Image
                    src="/images/itb-logo.png"
                    alt="ITB Logo"
                    fill
                    style={{ objectFit: "contain", padding: "8px" }}
                  />
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: "180px" }}>
                  <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1rem", color: "var(--ink)", marginBottom: "0.4rem" }}>
                    Bandung Institute of Technology
                  </p>
                  <div style={{ borderLeft: "2px solid var(--vermillion)", paddingLeft: "0.85rem" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--fog)", letterSpacing: "0.06em" }}>Bachelor of Informatics</p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--fog)", marginTop: "0.2rem" }}>Class of 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
