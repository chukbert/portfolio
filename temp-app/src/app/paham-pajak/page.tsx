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

export default function PahamPajakShowcase() {
    const prefersReducedMotion = useReducedMotion();
    const heroRef = useRef(null);
    const statsRef = useRef(null);
    const techRef = useRef(null);
    const ctaRef = useRef(null);

    const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });
    const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });
    const isTechInView = useInView(techRef, { once: true, margin: "-50px" });
    const isCtaInView = useInView(ctaRef, { once: true, margin: "-50px" });

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

    return (
        <main style={{ minHeight: "100vh", background: "var(--bone)", color: "var(--ink)" }}>
            {/* Scroll Progress Bar */}
            <motion.div
                style={{
                    position: "fixed", top: 0, left: 0, right: 0, height: "2px",
                    background: "var(--vermillion)", transformOrigin: "0%", scaleX, zIndex: 70, pointerEvents: "none",
                }}
                aria-hidden="true"
            />

            {/* Fixed Navigation */}
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
                style={{
                    background: "rgba(245,242,236,0.9)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                    borderBottom: "1px solid var(--rule-light)",
                }}
            >
                <div className="wrap flex items-center justify-between" style={{ height: "64px" }}>
                    <Link href="/" className="btn-ghost" style={{ fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.85rem" }}>
                        Muflich&apos;s Labs
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="btn-ghost" style={{ gap: "0.4rem" }}>
                            <ArrowLeft style={{ width: "14px", height: "14px" }} />
                            <span>Portfolio</span>
                        </Link>
                        <a href="https://pahampajak.muflichlabs.online/" target="_blank" rel="noopener noreferrer" className="nav-btn">
                            Live App ↗
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section ref={heroRef} style={{ paddingTop: "clamp(7rem, 14vw, 10rem)", paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
                <div className="wrap">
                    <motion.div variants={staggerContainer} initial="hidden" animate={isHeroInView ? "visible" : "hidden"}>
                        <motion.div variants={fadeInUp} style={{ marginBottom: "1.5rem" }}>
                            <span style={{
                                fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.18em",
                                textTransform: "uppercase", color: "var(--vermillion)", display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            }}>
                                <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "var(--vermillion)" }} />
                                Fintech & AI Engineering
                            </span>
                        </motion.div>

                        <div style={{ display: "grid", gap: "3rem", alignItems: "center" }} className="md:grid-cols-12">
                            <div className="md:col-span-7">
                                <motion.h1 variants={fadeInUp} style={{
                                    fontSize: "clamp(3.5rem, 9vw, 6.5rem)", fontWeight: 800, letterSpacing: "-0.035em",
                                    lineHeight: 1.0, marginBottom: "0.15em", color: "var(--ink)",
                                }}>
                                    Paham Pajak
                                </motion.h1>
                                <motion.h2 variants={fadeInUp} style={{
                                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.035em",
                                    lineHeight: 1.05, color: "var(--fog)", marginBottom: "2rem",
                                }}>
                                    Lead Full-Stack AI Engineer
                                </motion.h2>

                                <motion.p variants={fadeInUp} style={{
                                    fontSize: "clamp(1rem, 1.8vw, 1.2rem)", color: "var(--fog)", maxWidth: "52ch",
                                    lineHeight: 1.72, marginBottom: "2.5rem",
                                }}>
                                    An advanced Indonesian tax consultation platform featuring an <strong>AI advisor powered by Google Gemini and RAG</strong>. Tightly integrated with 7 robust tax calculators and a real-time analytics dashboard, Paham Pajak simplifies complex financial regulations through an intuitive, data-driven architecture.
                                </motion.p>

                                <motion.div variants={fadeInUp}>
                                    <p style={{
                                        fontFamily: "var(--font-mono)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.18em",
                                        textTransform: "uppercase", color: "var(--fog)", marginBottom: "0.75rem",
                                    }}>
                                        Core Technologies
                                    </p>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                        {["Next.js 16", "React 19", "Gemini API", "RAG", "Drizzle ORM", "PostgreSQL", "Redis"].map((tech) => (
                                            <span key={tech} style={{
                                                fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 400, padding: "0.35rem 0.9rem",
                                                background: "var(--surface)", border: "1px solid var(--rule-light)", borderRadius: "100px",
                                                color: "var(--fog-dark)", letterSpacing: "0.02em", transition: "border-color 200ms, color 200ms", cursor: "default",
                                            }}
                                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--vermillion)"; e.currentTarget.style.color = "var(--vermillion)"; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--rule-light)"; e.currentTarget.style.color = "var(--fog-dark)"; }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div className="md:col-span-5" variants={fadeInUp} style={{
                                position: "relative", borderRadius: "var(--radius-card)", overflow: "hidden",
                                border: "1px solid var(--rule-light)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", background: "var(--surface)"
                            }}>
                                <div style={{ padding: "0.75rem", borderBottom: "1px solid var(--rule-light)", background: "var(--bone)", display: "flex", gap: "0.4rem" }}>
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f56" }} />
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffbd2e" }} />
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27c93f" }} />
                                </div>
                                <img src="/images/paham-pajak/thumbnail.png" alt="Paham Pajak Preview" style={{ width: "100%", height: "auto", display: "block" }} />
                                <div style={{ position: "absolute", bottom: "1rem", right: "1rem", background: "rgba(14,13,10,0.8)", backdropFilter: "blur(4px)", padding: "0.4rem 0.8rem", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.1)" }}>
                                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "white", letterSpacing: "0.05em", textTransform: "uppercase" }}>Quick Preview</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div style={{ borderTop: "1px solid var(--rule-light)" }} />

            {/* Architecture / Challenge Section */}
            <section ref={statsRef} style={{ padding: "clamp(5rem, 10vw, 8rem) 0", background: "var(--surface)", borderBottom: "1px solid var(--rule-light)" }}>
                <div className="wrap">
                    <motion.div variants={scrollReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: "center", maxWidth: "80ch", margin: "0 auto", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--vermillion)", display: "block", marginBottom: "1.5rem" }}>
                            Information Architecture
                        </span>
                        <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--ink)", lineHeight: 1.05, marginBottom: "2rem" }}>
                            Dynamic Tool Routing <br />
                            <span style={{ color: "var(--vermillion)" }}>&amp; RAG Integration</span>
                        </h2>
                        <p style={{ fontSize: "1.15rem", color: "var(--fog)", lineHeight: 1.7, marginBottom: "0" }}>
                            Tax laws are dense and frequently updated. I architected a system utilizing <strong>Retrieval-Augmented Generation (RAG)</strong> over the DJP Coretaxpedia via Google Gemini's File Search Store.
                        </p>
                    </motion.div>

                    <div style={{ display: "grid", gap: "clamp(2rem, 5vw, 4rem)", alignItems: "start" }} className="md:grid-cols-12">
                        <div className="md:col-span-6">
                            <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.5rem", color: "var(--ink)" }}>
                                Optimizing Token Costs
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                <p style={{ fontSize: "1.05rem", color: "var(--fog)", lineHeight: 1.72 }}>
                                    Handling high-volume AI queries requires aggressive cost management. I designed a <strong>dynamic tool routing strategy</strong> that inspects user messages and selectively injects context tools (`fileSearch`, `codeExecution`) only when required by the query intent.
                                </p>
                                <p style={{ fontSize: "1.05rem", color: "var(--fog)", lineHeight: 1.72 }}>
                                    For example, simple greetings skip tool injection entirely, saving significant prompt tokens. This intelligent routing is combined with a <strong>Redis-backed rate limiter</strong> and IDR-based user quotabuckets.
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-6">
                            <div className="card" style={{ padding: "clamp(1.25rem, 2.5vw, 2rem)", background: "var(--bone)" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontFamily: "var(--font-mono)", fontSize: "0.72rem", lineHeight: 1.4 }}>
                                    <div style={{ border: "1px solid var(--rule-light)", padding: "0.75rem", borderRadius: "4px" }}>
                                        <p style={{ color: "var(--vermillion)", fontWeight: 700, marginBottom: "0.25rem" }}>01 INTENT PARSING</p>
                                        <p style={{ color: "var(--fog)" }}>Inspect incoming user query for math/tax keywords.</p>
                                    </div>
                                    <div style={{ textAlign: "center", color: "var(--rule-light)", height: "12px", lineHeight: "12px" }}>▼</div>
                                    <div style={{ border: "1px solid var(--rule-light)", padding: "0.75rem", borderRadius: "4px", background: "rgba(14,13,10,0.02)" }}>
                                        <p style={{ color: "var(--ink)", fontWeight: 700, marginBottom: "0.25rem" }}>02 TOOL SELECTION</p>
                                        <p style={{ color: "var(--fog)" }}>Inject `fileSearch` for regulations; `codeExecution` for math.</p>
                                    </div>
                                    <div style={{ textAlign: "center", color: "var(--rule-light)", height: "12px", lineHeight: "12px" }}>▼</div>
                                    <div style={{ border: "1px solid var(--rule-light)", padding: "0.75rem", borderRadius: "4px" }}>
                                        <p style={{ color: "var(--vermillion)", fontWeight: 700, marginBottom: "0.25rem" }}>03 SSE STREAMING</p>
                                        <p style={{ color: "var(--fog)" }}>Stream Gemini response via Server-Sent Events (SSE).</p>
                                    </div>
                                    <div style={{ textAlign: "center", color: "var(--rule-light)", height: "12px", lineHeight: "12px" }}>▼</div>
                                    <div style={{ border: "1px solid var(--vermillion)", padding: "1rem", borderRadius: "4px", background: "rgba(235, 87, 87, 0.03)" }}>
                                        <p style={{ color: "var(--ink)", fontWeight: 700, marginBottom: "0.75rem", fontSize: "0.8rem" }}>04 COST TRACKING (Usage Logs)</p>
                                        <p style={{ color: "var(--fog)", fontSize: "0.65rem" }}>Calculate 5 token types → Update user IDR quota via Drizzle ORM.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ borderTop: "1px solid var(--rule-light)" }} />

            {/* Feature Sections Mapper */}
            {[
                {
                    num: "01", title: "Tax Planner Dashboard", subtitle: "Personalized Financial Strategy",
                    desc: "The central user hub combining interactive quick estimating tools and financial summaries. It features a dedicated Tax Planner interface that hooks directly into the AI consultation engine to generate personalized, data-driven tax strategies.",
                    feats: ["Interactive Tax Planner interface", "Real-time financial metric summaries", "Direct routing to AI Consultation", "Responsive grid layout via Tailwind v4"],
                    img: "/images/paham-pajak/dashboard.png", reverse: false
                },
                {
                    num: "02", title: "AI Tax Consultation", subtitle: "RAG + Gemini File Search",
                    desc: "Conversational interface powered by Google's Gemini-3-flash. Answers are grounded in the official DJP Coretaxpedia regulations loaded locally via RAG. The UI actively parses markdown responses to inject dynamic 'Navigation Step' cards (e.g. Langkah 1, Langkah 2) for complex tax-filing workflows.",
                    feats: ["RAG via Gemini File Search Store", "Dynamic Tool Routing logic", "SSE Streaming for real-time latency", "Interactive step-by-step navigation cards"],
                    img: "/images/paham-pajak/konsultasi_ai.png", reverse: true
                },
                {
                    num: "03", title: "Comprehensive Tax Calculators", subtitle: "Complex Financial Logic",
                    desc: "Includes 7 fully interactive tax calculators (PPh 21 TER, PPh Badan, PPh UMKM, PPN, etc.). This feature handles dynamic TER rate tables and PTKP (Non-Taxable Income) values seamlessly across the Next.js React 19 Frontend.",
                    feats: ["7 distinct calculation modules", "Server-side state validation", "Real-time cost updates", "Clean shadcn/ui integration"],
                    img: "/images/paham-pajak/kalkulator_pajak.png", reverse: false
                }
            ].map((f, idx) => (
                <FeatureSection
                    key={f.num} number={f.num} title={f.title} subtitle={f.subtitle} description={f.desc}
                    features={f.feats} imageSrc={f.img} imageAlt={f.title} imageLabel={f.title} reversed={f.reverse}
                />
            ))}

            {/* Tech Stack Section */}
            <section ref={techRef} style={{ padding: "clamp(5rem, 10vw, 8rem) 0", background: "var(--surface)", borderTop: "1px solid var(--rule-light)" }}>
                <div className="wrap">
                    <motion.div variants={scrollReveal} initial="hidden" animate={isTechInView ? "visible" : "hidden"} style={{ marginBottom: "3rem" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--vermillion)", display: "block", marginBottom: "0.75rem" }}>
                            Technology
                        </span>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05, color: "var(--ink)" }}>
                            Core Technologies
                        </h2>
                    </motion.div>

                    <motion.div variants={staggerContainer} initial="hidden" animate={isTechInView ? "visible" : "hidden"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "0.75rem" }}>
                        {[
                            { name: "Next.js 16", category: "Framework" },
                            { name: "React 19", category: "Library" },
                            { name: "Gemini API", category: "AI LLM" },
                            { name: "PostgreSQL", category: "Database" },
                            { name: "Drizzle ORM", category: "Schema/Types" },
                            { name: "Redis", category: "Cache/Rate Limiting" },
                            { name: "Better Auth", category: "Security" },
                            { name: "Tailwind v4", category: "Styling" },
                            { name: "Recharts", category: "Data Viz" }
                        ].map((tech, i) => (
                            <motion.div key={tech.name} variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : i * 0.03 } } }} style={{ padding: "1.1rem 1rem", background: "var(--bone)", border: "1px solid var(--rule-light)", borderRadius: "var(--radius-card)", textAlign: "center", cursor: "default", transition: "border-color 200ms, transform 200ms" }} onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--vermillion)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--rule-light)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}>
                                <p style={{ fontWeight: 700, color: "var(--ink)", fontSize: "0.95rem", letterSpacing: "-0.01em" }}>{tech.name}</p>
                                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--fog)", marginTop: "0.25rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{tech.category}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={ctaRef} style={{ padding: "clamp(5rem, 10vw, 8rem) 0", background: "var(--bone)", borderTop: "1px solid var(--rule-light)" }}>
                <div className="wrap" style={{ textAlign: "center" }}>
                    <motion.div variants={scrollReveal} initial="hidden" animate={isCtaInView ? "visible" : "hidden"}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--vermillion)", display: "block", marginBottom: "1rem" }}>
                            Explore
                        </span>
                        <h2 style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05, color: "var(--ink)", marginBottom: "1.25rem", maxWidth: "18ch", margin: "0 auto 1.25rem" }}>
                            Architecture & Implementation
                        </h2>
                        <p style={{ fontSize: "1.1rem", color: "var(--fog)", marginBottom: "3rem", maxWidth: "52ch", margin: "0 auto 3rem", lineHeight: 1.72 }}>
                            Paham Pajak showcases a rigorous, production-ready implementation of modern Next.js alongside advanced RAG AI integration and optimized real-time data flow.
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                            <a href="https://pahampajak.muflichlabs.online/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                Visit Live App
                                <ExternalLink style={{ width: "14px", height: "14px" }} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <footer style={{ padding: "2rem 0", borderTop: "1px solid var(--rule-light)", background: "var(--surface)" }}>
                <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                    <Link href="/" className="btn-ghost" style={{ fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.82rem" }}>
                        Muflich&apos;s Labs
                    </Link>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--fog)", letterSpacing: "0.1em", textAlign: "center", flex: "1 0 100%", marginTop: "1.5rem", opacity: 0.8 }}>
                        © {new Date().getFullYear()} PAHAM PAJAK. ALL RIGHTS RESERVED.<br />
                        PROJECT ARCHITECTED & ENGINEERED BY FAIZ MUHAMMAD MUFLICH
                    </p>
                    <Link href="/" className="btn-ghost" style={{ gap: "0.4rem", fontSize: "0.82rem" }}>
                        <ArrowLeft style={{ width: "14px", height: "14px" }} />
                        Back to Portfolio
                    </Link>
                </div>
            </footer>
        </main>
    );
}

// Feature Section Component
function FeatureSection({ number, title, subtitle, description, features, imageSrc, imageAlt, imageLabel, reversed, imageSmall = false }: any) {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
    const bg = reversed ? "var(--surface)" : "var(--bone)";

    return (
        <section ref={sectionRef} style={{ padding: "clamp(4rem, 8vw, 7rem) 0", background: bg, borderTop: "1px solid var(--rule-light)" }}>
            <div className="wrap">
                <motion.div variants={scrollReveal} initial="hidden" animate={isInView ? "visible" : "hidden"} style={{ marginBottom: "2.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--vermillion)" }}>Feature {number}</span>
                        <div style={{ height: "1px", background: "var(--rule-light)", width: "80px" }} />
                    </div>
                    <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.1, color: "var(--ink)" }}>{title}</h2>
                </motion.div>

                <div style={{ display: "grid", gap: "clamp(2rem, 4vw, 3.5rem)", alignItems: "start" }} className="md:grid-cols-12">
                    <motion.div variants={scrollReveal} initial="hidden" animate={isInView ? "visible" : "hidden"} className={`md:col-span-5 ${reversed ? "md:order-2" : ""}`}>
                        <div className="card" style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>{subtitle}</h3>
                            <p style={{ color: "var(--fog)", fontSize: "0.9rem", lineHeight: 1.72, marginBottom: "1.5rem" }}>{description}</p>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                                {features.map((feature: string, i: number) => (
                                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "var(--fog)" }}>
                                        <span style={{ width: "5px", height: "5px", background: "var(--vermillion)", borderRadius: "50%", marginTop: "0.55rem", flexShrink: 0 }} />
                                        <span style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div variants={scrollReveal} initial="hidden" animate={isInView ? "visible" : "hidden"} className={`md:col-span-7 ${reversed ? "md:order-1" : ""}`} style={imageSmall ? { display: "flex", justifyContent: "center", alignItems: "flex-start" } : {}}>
                        <div style={{ borderRadius: "var(--radius-card)", overflow: "hidden", border: "1px solid var(--rule-light)", boxShadow: "0 12px 40px rgba(14,13,10,0.08)", ...(imageSmall ? { maxWidth: "280px", width: "100%" } : {}) }}>
                            <img src={imageSrc} alt={imageAlt} style={{ width: "100%", height: "auto", display: "block" }} />
                            <div style={{ background: "var(--ink)", padding: "0.75rem 1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span style={{ width: "5px", height: "5px", background: "var(--vermillion)", borderRadius: "50%", flexShrink: 0 }} />
                                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--bone)", letterSpacing: "0.08em" }}>{imageLabel}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
