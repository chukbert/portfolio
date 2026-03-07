"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouch = window.matchMedia("(hover: none)").matches || "ontouchstart" in window;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Custom cursor — hidden on touch devices */}
      {!isTouchDevice && (
        <>
          <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
          <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
        </>
      )}

      <main id="main-content" className="flex flex-col w-full overflow-hidden" style={{ background: 'var(--bone)' }}>
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Footer />
      </main>
    </>
  );
}
