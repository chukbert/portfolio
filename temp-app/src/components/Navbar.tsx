"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Focus management: move focus into menu on open, return to button on close
  useEffect(() => {
    if (isOpen) {
      // Delay to allow animation to start
      const timer = setTimeout(() => firstLinkRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Escape key to close
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      {/* ── NAVBAR ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? "rgba(245,242,236,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--rule-light)" : "none",
        }}
      >
        <div
          className="wrap flex items-center justify-between h-16 lg:h-18"
          style={{ color: "var(--ink)" }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "var(--ink)",
              textDecoration: "none",
            }}
          >
            Muflich's Labs
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6282123300362"
              className="nav-btn"
              aria-label="Message Faiz on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile toggler */}
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex flex-col gap-[5px] w-7 p-1"
            style={{ color: "var(--ink)", touchAction: "manipulation", minHeight: "44px", minWidth: "44px", justifyContent: "center", alignItems: "center" }}
          >
            <span className="block transition-transform duration-400" style={{ height: "1.5px", width: "100%", background: "currentColor", transform: isOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span className="block transition-opacity duration-400" style={{ height: "1.5px", width: "100%", background: "currentColor", opacity: isOpen ? 0 : 1 }} />
            <span className="block transition-transform duration-400" style={{ height: "1.5px", width: "100%", background: "currentColor", transform: isOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </div>
      </header>

      {/* ── MOBILE OVERLAY ── */}
      <motion.div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        initial={false}
        animate={{ clipPath: isOpen ? "inset(0 0 0 0)" : "inset(0 0 100% 0)" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[45] flex flex-col px-6 pt-24 pb-10"
        style={{ background: "var(--bone-dark)", color: "var(--ink)", pointerEvents: isOpen ? "auto" : "none" }}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ duration: 0.4, delay: i * 0.07 + 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={link.href}
                ref={i === 0 ? firstLinkRef : undefined}
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(2.5rem, 10vw, 4rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "var(--ink)",
                  textDecoration: "none",
                  display: "block",
                  transition: "color 200ms",
                  padding: "0.5rem 0",
                  minHeight: "44px",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--vermillion)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--ink)")}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="mt-auto">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.15em", color: "var(--fog)" }}>
            faizmuh26@gmail.com
          </p>
        </div>
      </motion.div>

      {/* ── SCROLL PROGRESS ── */}
      <motion.div
        style={{
          position: "fixed", top: 0, left: 0, right: 0, height: "2px",
          background: "var(--vermillion)", transformOrigin: "0%",
          scaleX, zIndex: 70, pointerEvents: "none",
        }}
        aria-hidden="true"
      />
    </>
  );
}
