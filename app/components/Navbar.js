"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0c0c0c]/98 backdrop-blur-sm" : ""}`}>
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <span className="font-mono text-sm text-[#666]">DA — 2026</span>
        <div className="flex items-center gap-10">
          {["Proyectos", "Skills", "Contacto"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-widest text-[#666] hover:text-white transition-colors duration-200">
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
