"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const socials = [
  { name: "GitHub", href: "https://github.com/chukbert" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/faiz-muhammad-muflich/" },
  { name: "WhatsApp", href: "https://wa.me/6282123300362" },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduced = useReducedMotion();

  return (
    <footer
      id="contact"
      ref={ref}
      style={{ background: "var(--ink)", paddingTop: "7rem", paddingBottom: "3rem" }}
    >
      <div className="wrap">
        {/* Big name banner */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ borderTop: "1px solid var(--rule)", paddingTop: "4rem", marginBottom: "5rem" }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--vermillion)", marginBottom: "1.5rem" }}>
            03 / Contact
          </p>
          <h2
            className="hover:text-[var(--vermillion)] transition-colors duration-700 select-none"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 8vw, 9rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "var(--bone)",
              cursor: "default",
            }}
          >
            FAIZ<br />MUHAMMAD<br />MUFLICH
          </h2>
        </motion.div>

        {/* CTA + Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left CTA */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "var(--bone)", marginBottom: "1.25rem" }}>
              Let's build something{" "}
              <em style={{ color: "var(--vermillion)", fontStyle: "italic", fontFamily: "var(--font-display)", fontWeight: 400 }}>
                extraordinary.
              </em>
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--rule-light)", maxWidth: "38ch", marginBottom: "2.5rem" }}>
              Whether you need a full-stack AI product, a data pipeline, or technical consulting — I'd love to hear about your project.
            </p>
            <a
              href="https://wa.me/6282123300362"
              className="btn-light"
              aria-label="Message me on WhatsApp to start a conversation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a Conversation
            </a>
          </motion.div>

          {/* Right socials */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
          >
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--rule-light)", marginBottom: "1.25rem" }}>
                Links
              </p>
              <ul style={{ display: "flex", flexDirection: "column", listStyle: "none" }} role="list">
                {socials.map((s) => (
                  <li key={s.name} style={{ borderBottom: "1px solid var(--rule)" }}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      aria-label={`Visit ${s.name}`}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1.1rem 0",
                        textDecoration: "none",
                        minHeight: "44px",
                      }}
                    >
                      <span
                        className="group-hover:text-[var(--vermillion)] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1.5rem", color: "var(--bone)" }}
                      >
                        {s.name}
                      </span>
                      <span
                        className="group-hover:text-[var(--vermillion)] group-hover:translate-x-1 transition-all duration-300"
                        style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--rule-light)" }}
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--rule-light)", marginBottom: "0.5rem" }}>
                Location
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1.1rem", color: "var(--bone)" }}>
                Solo, Jawa Tengah, Indonesia
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-1"
          style={{ borderTop: "1px solid var(--rule)", marginTop: "5rem", paddingTop: "1.5rem" }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--rule-light)", display: "block", textAlign: "center" }}>
            © {new Date().getFullYear()} Faiz Muhammad Muflich
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--rule-light)", display: "block", textAlign: "center" }}>
            Fullstack AI Engineer · Available for Projects
          </span>
        </div>
      </div>
    </footer>
  );
}
