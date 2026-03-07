"use client";

import { motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

// Scroll reveal variants using portfolio timing
const scrollReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.56,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.56,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function SehaShowcase() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const challengeRef = useRef(null);
  const techRef = useRef(null);
  const securityRef = useRef(null);
  const ctaRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });
  const isChallengeInView = useInView(challengeRef, { once: true, margin: "-50px" });
  const isTechInView = useInView(techRef, { once: true, margin: "-50px" });
  const isSecurityInView = useInView(securityRef, { once: true, margin: "-50px" });
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <main style={{ minHeight: "100vh", background: "var(--bone)", color: "var(--ink)" }}>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "var(--vermillion)",
          transformOrigin: "0%",
          scaleX,
          zIndex: 70,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Fixed Navigation */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: "rgba(245,242,236,0.9)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--rule-light)",
        }}
      >
        <div
          className="wrap flex items-center justify-between"
          style={{ height: "64px" }}
        >
          <Link href="/" className="btn-ghost" style={{ fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.85rem" }}>
            Muflich&apos;s Labs
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="btn-ghost" style={{ gap: "0.4rem" }}>
              <ArrowLeft style={{ width: "14px", height: "14px" }} />
              <span>Portfolio</span>
            </Link>
            <a
              href="https://sehaindonesia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn"
            >
              Visit Live ↗
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} style={{ paddingTop: "clamp(7rem, 14vw, 10rem)", paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
        <div className="wrap">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            {/* Category badge */}
            <motion.div variants={fadeInUp} style={{ marginBottom: "1.5rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--vermillion)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--vermillion)",
                  }}
                />
                Healthcare Technology
              </span>
            </motion.div>

            <div style={{ display: "grid", gap: "3rem", alignItems: "center" }} className="md:grid-cols-12">
              <div className="md:col-span-7">
                <motion.h1
                  variants={fadeInUp}
                  style={{
                    fontSize: "clamp(3.5rem, 9vw, 7rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.035em",
                    lineHeight: 1.0,
                    marginBottom: "0.15em",
                    color: "var(--ink)",
                  }}
                >
                  SEHA+
                </motion.h1>
                <motion.h2
                  variants={fadeInUp}
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.035em",
                    lineHeight: 1.05,
                    color: "var(--fog)",
                    marginBottom: "2rem",
                  }}
                >
                  Lead Architect & Solo Developer
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  style={{
                    fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                    color: "var(--fog)",
                    maxWidth: "52ch",
                    lineHeight: 1.72,
                    marginBottom: "2.5rem",
                  }}
                >
                  A production-grade, multi-tenant healthcare SaaS built for <strong>Seha Indonesia</strong>. I compressed a <strong>15-month enterprise roadmap into just 15 days</strong> using AI-augmented engineering workflows — delivering a resilient system that passed 100% of client UAT.
                </motion.p>

                {/* Tech Stack badges */}
                <motion.div variants={fadeInUp}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--fog)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Tech Stack
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {["Next.js 15", "TypeScript", "PostgreSQL", "Redis", "Prisma", "NextAuth.js", "Radix UI", "Tailwind CSS"].map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          fontWeight: 400,
                          padding: "0.35rem 0.9rem",
                          background: "var(--surface)",
                          border: "1px solid var(--rule-light)",
                          borderRadius: "100px",
                          color: "var(--fog-dark)",
                          letterSpacing: "0.02em",
                          transition: "border-color 200ms, color 200ms",
                          cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--vermillion)";
                          e.currentTarget.style.color = "var(--vermillion)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--rule-light)";
                          e.currentTarget.style.color = "var(--fog-dark)";
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="md:col-span-5"
                variants={fadeInUp}
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-card)",
                  overflow: "hidden",
                  border: "1px solid var(--rule-light)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                  background: "var(--surface)"
                }}
              >
                <div style={{ padding: "0.75rem", borderBottom: "1px solid var(--rule-light)", background: "var(--bone)", display: "flex", gap: "0.4rem" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f56" }} />
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffbd2e" }} />
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27c93f" }} />
                </div>
                <img
                  src="/images/seha/login_page_seha.png"
                  alt="SEHA+ Login Preview"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div style={{ position: "absolute", bottom: "1rem", right: "1rem", background: "rgba(14,13,10,0.8)", backdropFilter: "blur(4px)", padding: "0.4rem 0.8rem", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "white", letterSpacing: "0.05em", textTransform: "uppercase" }}>Quick Preview</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider rule */}
      <div style={{ borderTop: "1px solid var(--rule-light)" }} />

      {/* AI-Augmented Engineering & Methodology Section */}
      <section ref={statsRef} style={{ padding: "clamp(5rem, 10vw, 8rem) 0", background: "var(--surface)", borderBottom: "1px solid var(--rule-light)" }}>
        <div className="wrap">
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ textAlign: "center", maxWidth: "80ch", margin: "0 auto", marginBottom: "clamp(3rem, 6vw, 5rem)" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--vermillion)",
                display: "block",
                marginBottom: "1.5rem",
              }}
            >
              AI-Augmented Engineering
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--ink)",
                lineHeight: 1.05,
                marginBottom: "2rem",
              }}
            >
              15 Months of Roadmap<br />
              <span style={{ color: "var(--vermillion)" }}>Delivered in 15 Days</span>
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--fog)", lineHeight: 1.7, marginBottom: "0" }}>
              By orchestrating <strong>Claude Code</strong> with a custom autonomous loop (<code style={{ fontSize: "0.9em" }}>ralph.sh</code>), I achieved a 30x increase in development velocity. This enabled the complete architecture, implementation, and clinical UAT of SEHA+ in just two weeks — maintaining 100% data integrity and compliance.
            </p>
          </motion.div>

          <div style={{ display: "grid", gap: "clamp(2rem, 5vw, 4rem)", alignItems: "start" }} className="md:grid-cols-12">
            <div className="md:col-span-6">
              <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.5rem", color: "var(--ink)" }}>
                Project Ralph: The Velocity Framework
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "1.05rem", color: "var(--fog)", lineHeight: 1.72 }}>
                  To achieve extreme development speed without sacrificing quality, I engineered a custom orchestration bridge called <code style={{ color: "var(--vermillion)" }}>ralph.sh</code>.
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--fog)", lineHeight: 1.72 }}>
                  This <strong>Rigorous Autonomous Verification</strong> loop leverages <strong>Claude Code</strong> to handle the heavy lifting: from decomposition of complex PRDs to cascading test suites (Unit → Integration → E2E → Edge → Chaos).
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--fog)", lineHeight: 1.72 }}>
                  The framework ensures that only 100% verified code reaches production. If any test fails, an autonomous "Heal" session is spawned to self-correct and re-verify, enabling a zero-regression culture at high speed.
                </p>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="card" style={{ padding: "clamp(1.25rem, 2.5vw, 2rem)", background: "var(--bone)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontFamily: "var(--font-mono)", fontSize: "0.72rem", lineHeight: 1.4 }}>
                  {/* Step 1 */}
                  <div style={{ border: "1px solid var(--rule-light)", padding: "0.75rem", borderRadius: "4px" }}>
                    <p style={{ color: "var(--vermillion)", fontWeight: 700, marginBottom: "0.25rem" }}>01 DECOMPOSITION</p>
                    <p style={{ color: "var(--fog)" }}>Input: PRD.md content</p>
                    <p style={{ color: "var(--fog)" }}>Output: prd.json (Tasks, Deps, Test Config)</p>
                  </div>
                  <div style={{ textAlign: "center", color: "var(--rule-light)", height: "12px", lineHeight: "12px" }}>▼</div>

                  {/* Step 2 */}
                  <div style={{ border: "1px solid var(--rule-light)", padding: "0.75rem", borderRadius: "4px", background: "rgba(14,13,10,0.02)" }}>
                    <p style={{ color: "var(--ink)", fontWeight: 700, marginBottom: "0.25rem" }}>02 PLAN REVIEW</p>
                    <p style={{ color: "var(--fog)" }}>Human-in-the-loop: User approval gate (y/n/e)</p>
                  </div>
                  <div style={{ textAlign: "center", color: "var(--rule-light)", height: "12px", lineHeight: "12px" }}>▼</div>

                  {/* Step 3 */}
                  <div style={{ border: "1px solid var(--rule-light)", padding: "0.75rem", borderRadius: "4px" }}>
                    <p style={{ color: "var(--vermillion)", fontWeight: 700, marginBottom: "0.25rem" }}>03 CONTRACT DEFINITION</p>
                    <p style={{ color: "var(--fog)" }}>Output: Shared types & Interface contracts</p>
                  </div>
                  <div style={{ textAlign: "center", color: "var(--rule-light)", height: "12px", lineHeight: "12px" }}>▼</div>

                  {/* Step 4 Loop */}
                  <div style={{ border: "1px solid var(--vermillion)", padding: "1rem", borderRadius: "4px", background: "rgba(235, 87, 87, 0.03)" }}>
                    <p style={{ color: "var(--ink)", fontWeight: 700, marginBottom: "0.75rem", fontSize: "0.8rem" }}>04 ITERATIVE TASK LOOP (PER TASK)</p>
                    <div style={{ borderLeft: "2px solid var(--rule-light)", paddingLeft: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <div>
                        <p style={{ color: "var(--ink)", fontWeight: 700 }}>RESEARCH & IMPLEMENT</p>
                        <p style={{ color: "var(--fog)", fontSize: "0.65rem" }}>Exploration → Code Gen by <strong>Claude Code</strong></p>
                      </div>
                      <div style={{ borderTop: "1px dotted var(--rule-light)", paddingTop: "0.5rem" }}>
                        <p style={{ color: "var(--ink)", fontWeight: 700, marginBottom: "0.25rem" }}>CASCADING VERIFICATION</p>
                        <p style={{ color: "var(--fog)", fontSize: "0.65rem" }}>Unit → Integration → E2E → Edge → Chaos</p>
                        <p style={{ color: "var(--vermillion)", fontSize: "0.65rem", marginTop: "0.4rem", fontStyle: "italic" }}>
                          On Failure: Spawn &lt;heal.md&gt; → Re-verify
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--rule-light)" }} />

      {/* The Challenge Section */}
      <section ref={challengeRef} style={{ padding: "clamp(5rem, 10vw, 8rem) 0", background: "var(--bone)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gap: "clamp(2rem, 5vw, 4rem)" }} className="md:grid-cols-12">
            <motion.div
              variants={scrollReveal}
              initial="hidden"
              animate={isChallengeInView ? "visible" : "hidden"}
              className="md:col-span-7"
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--vermillion)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                The Challenge
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.05,
                  marginBottom: "2rem",
                  color: "var(--ink)",
                }}
              >
                Modernizing Indonesian Healthcare Infrastructure
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <p style={{ fontSize: "1.05rem", color: "var(--fog)", lineHeight: 1.72 }}>
                  Indonesian clinics still rely on paper-based medical records — leading to data loss, retrieval delays, and storage issues. Workflows between registration, examination, and billing are disconnected, and no digital solution exists for dental condition tracking.
                </p>
                <p style={{ fontSize: "1.05rem", color: "var(--fog)", lineHeight: 1.72 }}>
                  With the Ministry of Health&apos;s SATUSEHAT mandate requiring all healthcare facilities to digitize and sync records, SEHA+ was built to bridge this gap — a modern, compliant clinic management system with end-to-end digital workflows.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={scrollReveal}
              initial="hidden"
              animate={isChallengeInView ? "visible" : "hidden"}
              className="md:col-span-5"
            >
              <div
                className="card"
                style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--ink)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Key Requirements
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {[
                    "SATUSEHAT Integration for national health data exchange",
                    "Multi-tenant architecture for clinic chains",
                    "HIPAA-inspired security with field-level encryption",
                    "Full compliance with UU PDP and MOH Regulation 24/2022",
                    "Dental-specific features (Odontogram)",
                    "Real-time queue management system",
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--fog)" }}>
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          background: "var(--vermillion)",
                          borderRadius: "50%",
                          marginTop: "0.6rem",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <FeatureSection
        number="01"
        title="Secure Authentication System"
        subtitle="Role-Based Access Control"
        description="A clean login portal built with NextAuth.js v5, featuring email/password authentication with hardened hashing. The interface displays partner logos — BPJS Kesehatan, SATUSEHAT, Kemenkes RI, SNOMED CT, and HL7 FHIR — signaling compliance and interoperability. A language selector supports Bahasa Indonesia as the primary locale."
        features={[
          "Six user roles: Super Admin, Admin, Doctor, Dentist, Nurse, Cashier",
          "Industry-standard password hashing (OWASP recommended)",
          "Partner integrations: BPJS, SATUSEHAT, SNOMED CT, HL7 FHIR",
          "Bahasa Indonesia-first interface with language selector",
          "Session management with configurable timeout",
        ]}
        imageSrc="/images/seha/login_page_seha.png"
        imageAlt="SEHA+ Login Page"
        imageLabel="Secure Login Portal"
        reversed={false}
      />

      <FeatureSection
        number="02"
        title="Multi-Tenant Clinic Management"
        subtitle="Platform-Level Tenant Oversight"
        description="The Super Admin panel provides a bird's-eye view of all registered clinics. A platform summary shows total active tenants, patients, monthly visits, and revenue. Below it, a tenant overview table lists each clinic with real-time status, patient count, visit count, revenue, and last activity — with quick actions to view or manage each."
        features={[
          "Platform-wide summary cards (tenants, patients, visits, revenue)",
          "Tenant overview table with status, stats, and last activity",
          "One-click tenant creation and management",
          "Login-based tenant resolution and data scoping",
          "Per-clinic view and configuration actions",
        ]}
        imageSrc="/images/seha/super_admin_dashboard.png"
        imageAlt="SEHA+ Super Admin Dashboard"
        imageLabel="Super Admin Panel"
        reversed={true}
      />

      <FeatureSection
        number="03"
        title="Doctor's Operational Dashboard"
        subtitle="Real-Time Clinical Overview"
        description="The doctor's dashboard greets the clinician by name and provides a real-time operational summary: waiting queue count, total visits today, patients being examined, completed patients, and average wait time. A 'My Patients Today' section links directly to the doctor's active queue, and a patient search bar enables quick lookup."
        features={[
          "Real-time operational stats (queue, visits, wait time)",
          "Personalized greeting with doctor's name and credentials",
          "'My Patients Today' quick-access panel",
          "Global patient search bar",
          "Active poli and doctor count indicators",
          "Quick 'Add Patient' action button",
        ]}
        imageSrc="/images/seha/dashboard_dokter.png"
        imageAlt="SEHA+ Doctor Dashboard"
        imageLabel="Doctor's Operational Dashboard"
        reversed={false}
      />

      <FeatureSection
        number="04"
        title="Interactive Odontogram"
        subtitle="Digital Dental Charting"
        description="A full dental charting module with a 4-quadrant, 32-tooth interactive diagram using FDI (ISO 3950) notation. Dentists click any tooth to select it, then choose from 10 condition types (Sehat, Karies, Tambalan, Mahkota, Bridge, Perawatan Saluran Akar, Dicabut, Hilang, Implan, Gigi Susu) and mark affected surfaces (Oklusal, Mesial, Distal, Bukal, Lingual)."
        features={[
          "4-quadrant, 32-tooth interactive FDI diagram",
          "10 dental condition types with color-coded legend",
          "5-surface selector per tooth (O, M, D, B, L)",
          "Per-tooth detail panel with condition history",
          "Zoom, pan, and reset controls",
          "Save and export odontogram data",
        ]}
        imageSrc="/images/seha/odontogram.png"
        imageAlt="SEHA+ Odontogram"
        imageLabel="Interactive Dental Charting"
        reversed={true}
      />

      <FeatureSection
        number="05"
        title="SATUSEHAT National Integration"
        subtitle="Verified FHIR Data Exchange"
        description="SEHA+ integrates directly with Indonesia's SATUSEHAT platform via FHIR R4. The screenshot shows actual API logs from the SATUSEHAT developer portal — all POST requests returning 201 Created, confirming successful submission of clinical data including Organization, Location, Encounter, Condition, Observation, Medication, MedicationRequest, Composition, and PractitionerRole resources."
        features={[
          "FHIR R4 resource creation verified with 201 Created responses",
          "Organization and Location registration",
          "Encounter, Condition, and Observation submission",
          "Medication and MedicationRequest sync",
          "Composition (clinical document) submission",
          "PractitionerRole mapping to SATUSEHAT",
        ]}
        imageSrc="/images/seha/SATUSEHAT_integration_proof.png"
        imageAlt="SEHA+ SATUSEHAT Integration Proof"
        imageLabel="SATUSEHAT API Logs — All 201 Created"
        reversed={false}
      />

      <FeatureSection
        number="06"
        title="AI-Powered Clinical Assistant"
        subtitle="Context-Aware Patient Support (Gemini-Powered)"
        description="A resizable clinical assistant powered by Google Gemini that activates during examination. While the assistant provides real-time medical record lookup and differential diagnosis, its entire implementation was orchestrated by Claude Code — enabling a rigorous autonomous verification loop that ensured 100% clinical data integrity even at extreme velocity."
        features={[
          "Patient identity and medical record lookup",
          "Diagnosis history review with frequency analysis",
          "Medication history and drug interaction checks",
          "Differential diagnosis suggestions based on current findings",
          "Quick-action pill buttons for common queries",
          "Advisory-only — all suggestions clearly disclaimed",
        ]}
        imageSrc="/images/seha/Chatbot_assistant.png"
        imageAlt="SEHA+ AI Chatbot"
        imageLabel="AI Clinical Assistant"
        reversed={true}
        imageSmall={true}
      />


      {/* Tech Stack Section */}
      <section ref={techRef} style={{ padding: "clamp(5rem, 10vw, 8rem) 0", background: "var(--surface)", borderTop: "1px solid var(--rule-light)" }}>
        <div className="wrap">
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            animate={isTechInView ? "visible" : "hidden"}
            style={{ marginBottom: "3rem" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--vermillion)",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              Technology
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                color: "var(--ink)",
              }}
            >
              Built with Modern Tech
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isTechInView ? "visible" : "hidden"}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {[
              { name: "Next.js 15", category: "Framework" },
              { name: "TypeScript", category: "Language" },
              { name: "React 19", category: "UI" },
              { name: "Tailwind CSS", category: "Styling" },
              { name: "Radix UI", category: "Components" },
              { name: "PostgreSQL", category: "Database" },
              { name: "Redis", category: "Cache" },
              { name: "Prisma", category: "ORM" },
              { name: "NextAuth.js", category: "Auth" },
              { name: "Zod", category: "Validation" },
              { name: "Vitest", category: "Testing" },
              { name: "Docker", category: "DevOps" },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: prefersReducedMotion ? 0 : 0.4,
                      delay: prefersReducedMotion ? 0 : i * 0.03,
                    },
                  },
                }}
                style={{
                  padding: "1.1rem 1rem",
                  background: "var(--bone)",
                  border: "1px solid var(--rule-light)",
                  borderRadius: "var(--radius-card)",
                  textAlign: "center",
                  cursor: "default",
                  transition: "border-color 200ms, transform 200ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--vermillion)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--rule-light)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <p style={{ fontWeight: 700, color: "var(--ink)", fontSize: "0.95rem", letterSpacing: "-0.01em" }}>
                  {tech.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    color: "var(--fog)",
                    marginTop: "0.25rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {tech.category}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section ref={securityRef} style={{ padding: "clamp(5rem, 10vw, 8rem) 0", background: "var(--ink)", borderTop: "1px solid var(--rule)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gap: "clamp(3rem, 6vw, 5rem)" }} className="md:grid-cols-2">
            <motion.div
              variants={scrollReveal}
              initial="hidden"
              animate={isSecurityInView ? "visible" : "hidden"}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--vermillion)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Security
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.05,
                  color: "var(--bone)",
                  marginBottom: "1.25rem",
                }}
              >
                Enterprise-Grade Protection
              </h2>
              <p style={{ color: "var(--rule-light)", fontSize: "1.05rem", lineHeight: 1.72, marginBottom: "2.5rem" }}>
                Healthcare data requires the highest level of protection. SEHA+ implements field-level data encryption, comprehensive audit logging, and full compliance with Indonesian UU PDP and HIPAA-inspired security controls.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                {[
                  { title: "256-bit GCM", desc: "Field-level encryption" },
                  { title: "UU PDP", desc: "Indonesian data protection" },
                  { title: "MOH 24/2022", desc: "Medical record regulations" },
                  { title: "Hardened", desc: "Password hashing (OWASP)" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      borderLeft: "2px solid var(--vermillion)",
                      paddingLeft: "1rem",
                    }}
                  >
                    <p style={{ fontWeight: 700, color: "var(--bone)", fontSize: "1.05rem", letterSpacing: "-0.02em" }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: "0.82rem", color: "var(--rule-light)", marginTop: "0.15rem", lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={scrollReveal}
              initial="hidden"
              animate={isSecurityInView ? "visible" : "hidden"}
            >
              <div
                style={{
                  background: "var(--fog-dark)",
                  padding: "clamp(1.5rem, 3vw, 2.5rem)",
                  borderRadius: "var(--radius-card)",
                  border: "1px solid var(--rule)",
                }}
              >
                <h3
                  style={{
                    color: "var(--bone)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    marginBottom: "1.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Security Features
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    "Field-level data encryption for PHI",
                    "Cryptographic hashing for searchable encrypted fields",
                    "TLS/HTTPS enforced in production",
                    "Comprehensive audit logging with before/after values",
                    "Rate limiting (100 req/min authenticated)",
                    "CSP, HSTS, X-Frame-Options security headers",
                  ].map((feature, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--rule-light)" }}>
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          background: "var(--vermillion)",
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: "0.9rem", lineHeight: 1.5 }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} style={{ padding: "clamp(5rem, 10vw, 8rem) 0", background: "var(--bone)", borderTop: "1px solid var(--rule-light)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--vermillion)",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Explore
            </span>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                color: "var(--ink)",
                marginBottom: "1.25rem",
                maxWidth: "18ch",
                margin: "0 auto 1.25rem",
              }}
            >
              Solo Architect. 15-Day Velocity.
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--fog)",
                marginBottom: "3rem",
                maxWidth: "52ch",
                margin: "0 auto 3rem",
                lineHeight: 1.72,
              }}
            >
              SEHA+ isn&apos;t just a clinic management system—it&apos;s a demonstration of how a solo lead architect can deliver 15 months of enterprise-grade engineering in 15 days via AI-augmented workflows and Project Ralph.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <a
                href="https://sehaindonesia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                Visit Live Demo
                <ExternalLink style={{ width: "14px", height: "14px" }} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "2rem 0",
          borderTop: "1px solid var(--rule-light)",
          background: "var(--surface)",
        }}
      >
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <Link
            href="/"
            className="btn-ghost"
            style={{ fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.82rem" }}
          >
            Muflich&apos;s Labs
          </Link>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--fog)",
              letterSpacing: "0.1em",
              textAlign: "center",
              flex: "1 0 100%",
              marginTop: "1.5rem",
              opacity: 0.8,
            }}
          >
            © 2026 SEHA INDONESIA. ALL PRODUCT RIGHTS RESERVED.<br />
            PROJECT ARCHITECTED & ENGINEERED BY FAIZ MUHAMMAD MUFLICH
          </p>
          <Link href="/" className="btn-ghost" style={{ gap: "0.4rem", fontSize: "0.82rem" }}>
            <ArrowLeft style={{ width: "14px", height: "14px" }} />
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </main >
  );
}

// Feature Section Component — aligned with portfolio design system
function FeatureSection({
  number,
  title,
  subtitle,
  description,
  features,
  imageSrc,
  imageAlt,
  imageLabel,
  reversed,
  imageSmall = false,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
  reversed: boolean;
  imageSmall?: boolean;
}) {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const bg = reversed ? "var(--surface)" : "var(--bone)";

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "clamp(4rem, 8vw, 7rem) 0",
        background: bg,
        borderTop: "1px solid var(--rule-light)",
      }}
    >
      <div className="wrap">
        {/* Section header */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ marginBottom: "2.5rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--vermillion)",
              }}
            >
              Feature {number}
            </span>
            <div
              style={{
                height: "1px",
                background: "var(--rule-light)",
                width: "80px",
              }}
            />
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              color: "var(--ink)",
            }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Content grid */}
        <div
          style={{
            display: "grid",
            gap: "clamp(2rem, 4vw, 3.5rem)",
            alignItems: "start",
          }}
          className="md:grid-cols-12"
        >
          {/* Text Card */}
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`md:col-span-5 ${reversed ? "md:order-2" : ""}`}
          >
            <div
              className="card"
              style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.75rem",
                }}
              >
                {subtitle}
              </h3>
              <p style={{ color: "var(--fog)", fontSize: "0.9rem", lineHeight: 1.72, marginBottom: "1.5rem" }}>
                {description}
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {features.map((feature, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "var(--fog)" }}>
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        background: "var(--vermillion)",
                        borderRadius: "50%",
                        marginTop: "0.55rem",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`md:col-span-7 ${reversed ? "md:order-1" : ""}`}
            style={imageSmall ? { display: "flex", justifyContent: "center", alignItems: "flex-start" } : {}}
          >
            <div
              style={{
                borderRadius: "var(--radius-card)",
                overflow: "hidden",
                border: "1px solid var(--rule-light)",
                boxShadow: "0 12px 40px rgba(14,13,10,0.08)",
                ...(imageSmall ? { maxWidth: "280px", width: "100%" } : {}),
              }}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div
                style={{
                  background: "var(--ink)",
                  padding: "0.75rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    background: "var(--vermillion)",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--bone)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {imageLabel}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
