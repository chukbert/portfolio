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

export default function KomateShowcase() {
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
                                Mental Wellness & AI Companion
                            </span>
                        </motion.div>

                        <div style={{ display: "grid", gap: "3rem", alignItems: "center" }} className="md:grid-cols-12">
                            <div className="md:col-span-7">
                                <motion.h1 variants={fadeInUp} style={{
                                    fontSize: "clamp(3.5rem, 9vw, 6.5rem)", fontWeight: 800, letterSpacing: "-0.035em",
                                    lineHeight: 1.0, marginBottom: "0.15em", color: "var(--ink)",
                                }}>
                                    KOMATE
                                </motion.h1>
                                <motion.h2 variants={fadeInUp} style={{
                                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.035em",
                                    lineHeight: 1.05, color: "var(--fog)", marginBottom: "2rem",
                                }}>
                                    Mobile AI Companion
                                </motion.h2>

                                <motion.p variants={fadeInUp} style={{
                                    fontSize: "clamp(1rem, 1.8vw, 1.2rem)", color: "var(--fog)", maxWidth: "52ch",
                                    lineHeight: 1.72, marginBottom: "2.5rem",
                                }}>
                                    A mental health companion app architected to provide a <strong>safe space for emotional release</strong>. Built with <strong>React Native and Expo</strong>, KOMATE features fluid, high-performance animations (Lottie & Skia) and an empathetic AI advisor powered by a streaming FastAPI backend.
                                </motion.p>

                                <motion.div variants={fadeInUp}>
                                    <p style={{
                                        fontFamily: "var(--font-mono)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.18em",
                                        textTransform: "uppercase", color: "var(--fog)", marginBottom: "0.75rem",
                                    }}>
                                        Core Mobile Stack
                                    </p>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                        {["React Native", "Expo Router", "FastAPI", "Lottie", "Skia", "Reanimated v3", "Firebase"].map((tech) => (
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
                                border: "1px solid var(--rule-light)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", background: "var(--surface)",
                                maxWidth: "320px", margin: "0 auto"
                            }}>
                                <div style={{ padding: "0.75rem", borderBottom: "1px solid var(--rule-light)", background: "var(--bone)", display: "flex", gap: "0.4rem" }}>
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f56" }} />
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffbd2e" }} />
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27c93f" }} />
                                </div>
                                <img src="/images/komate/login.jpeg" alt="KOMATE Login Preview" style={{ width: "100%", height: "auto", display: "block" }} />
                                <div style={{ position: "absolute", bottom: "1rem", right: "1rem", background: "rgba(14,13,10,0.8)", backdropFilter: "blur(4px)", padding: "0.4rem 0.8rem", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.1)" }}>
                                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "white", letterSpacing: "0.05em", textTransform: "uppercase" }}>Mobile View</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div style={{ borderTop: "1px solid var(--rule-light)" }} />

            {/* Animation & Performance Section */}
            <section ref={statsRef} style={{ padding: "clamp(5rem, 10vw, 8rem) 0", background: "var(--surface)", borderBottom: "1px solid var(--rule-light)" }}>
                <div className="wrap">
                    <motion.div variants={scrollReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: "center", maxWidth: "80ch", margin: "0 auto", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--vermillion)", display: "block", marginBottom: "1.5rem" }}>
                            Fluid Performance
                        </span>
                        <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--ink)", lineHeight: 1.05, marginBottom: "2rem" }}>
                            High-Fidelity Animations <br />
                            <span style={{ color: "var(--vermillion)" }}>&amp; Seamless Transitions</span>
                        </h2>
                        <p style={{ fontSize: "1.15rem", color: "var(--fog)", lineHeight: 1.7, marginBottom: "0" }}>
                            A mental health app must feel calm and responsive. I engineered the UI using <strong>React Native Reanimated v3</strong> and <strong>Lottie</strong> for complex state-driven animations that maintain a steady 60 FPS.
                        </p>
                    </motion.div>

                    <div style={{ display: "grid", gap: "clamp(2rem, 5vw, 4rem)", alignItems: "start" }} className="md:grid-cols-12">
                        <div className="md:col-span-6">
                            <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.5rem", color: "var(--ink)" }}>
                                Safe Space Engineering
                            </h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                <p style={{ fontSize: "1.05rem", color: "var(--fog)", lineHeight: 1.72 }}>
                                    To create a truly supportive environment, I implemented <strong>visual grounding techniques</strong> using <strong>React Native Skia</strong>. This allows for complex, GPU-accelerated canvas rendering that creates soothing, interactive visual patterns.
                                </p>
                                <p style={{ fontSize: "1.05rem", color: "var(--fog)", lineHeight: 1.72 }}>
                                    The backend, built with <strong>FastAPI</strong>, utilizes asynchronous streaming to deliver AI empathetic responses with minimal perceived latency, ensuring the conversation flows naturally.
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-6">
                            <div className="card" style={{ padding: "clamp(1.25rem, 2.5vw, 2rem)", background: "var(--bone)" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontFamily: "var(--font-mono)", fontSize: "0.72rem", lineHeight: 1.4 }}>
                                    <div style={{ border: "1px solid var(--rule-light)", padding: "0.75rem", borderRadius: "4px" }}>
                                        <p style={{ color: "var(--vermillion)", fontWeight: 700, marginBottom: "0.25rem" }}>01 EMOTIONAL PARSING</p>
                                        <p style={{ color: "var(--fog)" }}>FastAPI analyzes sentiment and selects appropriate empathy paths.</p>
                                    </div>
                                    <div style={{ textAlign: "center", color: "var(--rule-light)", height: "12px", lineHeight: "12px" }}>▼</div>
                                    <div style={{ border: "1px solid var(--rule-light)", padding: "0.75rem", borderRadius: "4px", background: "rgba(14,13,10,0.02)" }}>
                                        <p style={{ color: "var(--ink)", fontWeight: 700, marginBottom: "0.25rem" }}>02 ANIMATION TRIGGER</p>
                                        <p style={{ color: "var(--fog)" }}>Lottie & Reanimated synchronize visual feedback with AI tone.</p>
                                    </div>
                                    <div style={{ textAlign: "center", color: "var(--rule-light)", height: "12px", lineHeight: "12px" }}>▼</div>
                                    <div style={{ border: "1px solid var(--rule-light)", padding: "0.75rem", borderRadius: "4px" }}>
                                        <p style={{ color: "var(--vermillion)", fontWeight: 700, marginBottom: "0.25rem" }}>03 GPU ACCELERATION</p>
                                        <p style={{ color: "var(--fog)" }}>Skia renders interactive grounding visuals on the dedicated GPU thread.</p>
                                    </div>
                                    <div style={{ textAlign: "center", color: "var(--rule-light)", height: "12px", lineHeight: "12px" }}>▼</div>
                                    <div style={{ border: "1px solid var(--vermillion)", padding: "1rem", borderRadius: "4px", background: "rgba(235, 87, 87, 0.03)" }}>
                                        <p style={{ color: "var(--ink)", fontWeight: 700, marginBottom: "0.75rem", fontSize: "0.8rem" }}>04 CATHARTIC RELEASE</p>
                                        <p style={{ color: "var(--fog)", fontSize: "0.65rem" }}>Seamless state transitions → Interactive "Kotak Syukur" logging.</p>
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
                    num: "01", title: "Fluid Mobile Experience", subtitle: "Interactive Expo Router Navigation",
                    desc: "A cohesive and responsive mobile interface built on top of Expo Router. The app utilizes shared element transitions and gesture-based navigation to create a sense of continuity and focus.",
                    feats: ["Expo Router for deep linking", "Shared element transitions", "Custom gesture-based UI", "Native performance via React Native"],
                    video: "/images/komate/fitur_utama.mp4", reverse: false, isVideo: true
                },
                {
                    num: "02", title: "AI Empathy & Catharsis", subtitle: "Supportive AI Chat Interaction",
                    desc: "An empathetic conversational interface designed specifically for mental support. Answers are delivered via streaming to reduce perceived latency, and the UI adapts its visual tone (colors & animations) to match the conversation's emotional context.",
                    feats: ["FastAPI Async Streaming", "Dynamic UI state adaptation", "Sentiment-aware response paths", "Supportive grounding prompts"],
                    img: "/images/komate/curhat.jpeg", reverse: true
                },
                {
                    num: "03", title: "Langit Harapan", subtitle: "Skia-based Grounding Technique",
                    desc: "An interactive visual meditation tool built with React Native Skia. It provides users with a GPU-accelerated canvas where they can engage in mindfulness exercises through touch-driven visual patterns.",
                    feats: ["React Native Skia rendering", "GPU-accelerated canvas", "Interactive touch feedback", "Mindfulness focused design"],
                    video: "/images/komate/langit_harapan.mp4", reverse: false, isVideo: true
                },
                {
                    num: "04", title: "Gratitude Box", subtitle: "Positive Habit Formation",
                    desc: "A dedicated feature for recording moments of gratitude, designed to foster long-term mental wellness. Features a polished UI with subtle micro-animations that make the process of reflection feel rewarding.",
                    feats: ["Interactive logging interface", "Firebase real-time persistence", "Positive feedback animations", "Progressive disclosure design"],
                    img: "/images/komate/kotak_syukur.jpeg", reverse: true
                }
            ].map((f, idx) => (
                <FeatureSection
                    key={f.num} number={f.num} title={f.title} subtitle={f.subtitle} description={f.desc}
                    features={f.feats} imageSrc={f.img} imageAlt={f.title} imageLabel={f.title} isVideo={f.isVideo} videoSrc={f.video} reversed={f.reverse} imageSmall={true}
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
                            Mobile App Stack
                        </h2>
                    </motion.div>

                    <motion.div variants={staggerContainer} initial="hidden" animate={isTechInView ? "visible" : "hidden"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "0.75rem" }}>
                        {[
                            { name: "React Native", category: "Core Framework" },
                            { name: "Expo", category: "App Platform" },
                            { name: "FastAPI", category: "Python Backend" },
                            { name: "Lottie", category: "Vector Animation" },
                            { name: "React Native Skia", category: "2D Graphics" },
                            { name: "Firebase", category: "Auth & Database" },
                            { name: "NativeWind", category: "Styling" },
                            { name: "Reanimated v3", category: "Physics Engine" },
                            { name: "Expo Router", category: "Navigation" }
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
                            Project Focus
                        </span>
                        <h2 style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05, color: "var(--ink)", marginBottom: "1.25rem", maxWidth: "18ch", margin: "0 auto 1.25rem" }}>
                            Empathetic UX & Mobile Performance
                        </h2>
                        <p style={{ fontSize: "1.1rem", color: "var(--fog)", marginBottom: "3rem", maxWidth: "52ch", margin: "0 auto 3rem", lineHeight: 1.72 }}>
                            KOMATE demonstrates my ability to build high-performance universal mobile applications that bridge complex backend logic with smooth, empathetic user experiences.
                        </p>
                    </motion.div>
                </div>
            </section>

            <footer style={{ padding: "2rem 0", borderTop: "1px solid var(--rule-light)", background: "var(--surface)" }}>
                <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                    <Link href="/" className="btn-ghost" style={{ fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.82rem" }}>
                        Muflich&apos;s Labs
                    </Link>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--fog)", letterSpacing: "0.1em", textAlign: "center", flex: "1 0 100%", marginTop: "1.5rem", opacity: 0.8 }}>
                        © {new Date().getFullYear()} KOMATE. ALL RIGHTS RESERVED.<br />
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
function FeatureSection({ number, title, subtitle, description, features, imageSrc, imageAlt, imageLabel, reversed, isVideo, videoSrc, imageSmall = false }: any) {
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

                    <motion.div variants={scrollReveal} initial="hidden" animate={isInView ? "visible" : "hidden"} className={`md:col-span-7 ${reversed ? "md:order-1" : ""}`} style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                        <div style={{ borderRadius: "var(--radius-card)", overflow: "hidden", border: "1px solid var(--rule-light)", boxShadow: "0 12px 40px rgba(14,13,10,0.08)", ...(imageSmall ? { maxWidth: "280px", width: "100%" } : { width: "100%" }) }}>
                            {isVideo ? (
                                <video src={videoSrc} autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }} />
                            ) : (
                                <img src={imageSrc} alt={imageAlt} style={{ width: "100%", height: "auto", display: "block" }} />
                            )}
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
