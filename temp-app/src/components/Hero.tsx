"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";



export default function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section
      id="home"
      style={{
        background: "var(--bone)",
        minHeight: "60svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "3.5rem",
        paddingBottom: "1rem",
        position: "relative",
      }}
    >
      <div className="wrap">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", height: "100%", gap: "2rem" }}>
          <motion.div
            variants={reduced ? {} : container}
            initial="hidden"
            animate="show"
            className="flex flex-col flex-1 max-w-2xl"
            style={{ gap: "1rem" }}
          >
            {/* Mobile avatar — visible only on small screens */}
            <motion.div
              variants={item}
              className="md:hidden flex items-center gap-4"
              style={{ marginBottom: "0.5rem" }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid var(--rule-light)",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                <Image
                  src="/images/closeup.png"
                  alt="Faiz Muhammad Muflich"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="64px"
                />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 600, color: "var(--ink)", lineHeight: 1.3 }}>
                  Faiz Muhammad Muflich
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginTop: "0.2rem" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--vermillion)", display: "inline-block" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--vermillion)" }}>
                    Open to Work
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Eyebrow */}
            <motion.div variants={item} className="flex items-center gap-3">
              <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "var(--vermillion)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fog)" }}>
                Fullstack AI Engineer · Solo, Indonesia
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 800,
                fontSize: "clamp(1.85rem, 7vw, 5.5rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
                color: "var(--ink)",
              }}
            >
              Hi, I'm{" "}
              <span style={{ color: "var(--vermillion)" }}>Faiz.</span>
              <br />
              I build intelligent
              <br />
              systems.
            </motion.h1>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4 mobile-stack">
              <a
                href="#projects"
                className="btn-primary"
                aria-label="View my portfolio projects"
              >
                View My Work
              </a>
              <a
                href="https://wa.me/6282123300362"
                className="btn-light"
                aria-label="Message me on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch →
              </a>
            </motion.div>


          </motion.div>

          {/* Portrait card — desktop only */}
          <div
            className="hidden md:block shrink-0"
            style={{
              width: "clamp(180px, 18vw, 280px)",
              borderRadius: "var(--radius-card)",
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(14,13,10,0.18)",
              border: "1px solid var(--rule-light)",
            }}
          >
            {/* Image */}
            <div style={{ position: "relative", height: "clamp(220px, 22vw, 340px)" }}>
              <Image
                src="/images/closeup.png"
                alt="Faiz Muhammad Muflich"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Caption below image */}
            <div
              style={{
                padding: "1rem 1.25rem",
                background: "var(--bone-dark)",
                borderTop: "1px solid var(--rule-light)",
              }}
            >
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 600, color: "var(--ink)" }}>
                Faiz Muhammad Muflich
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.12em", color: "var(--fog)", marginTop: "0.2rem" }}>
                Bachelor of Informatics ITB
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.6rem" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--vermillion)", display: "inline-block" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--vermillion)" }}>
                  Open to Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
