"use client";
import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";
import { Menu, X } from "lucide-react";

const navItems = ["home", "about", "resume", "skills", "projects", "articles"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      navItems.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === "contact") {
      window.location.href = `mailto:${personalInfo.email}`;
      setMenuOpen(false);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.1rem 5%",
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1b33" : "1px solid transparent",
        transition: "all 0.3s",
      }}
    >
      {/* Logo */}
      <div
        onClick={() => scrollTo("home")}
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 800,
          fontSize: "1.4rem",
          color: "#a855f7",
          cursor: "pointer",
          letterSpacing: "-0.5px",
        }}
      >
        {personalInfo.shortName}.
      </div>

      {/* Desktop links */}
      <ul
        style={{
          gap: "2rem",
          listStyle: "none",
        }}
        className="hidden md:flex"
      >
        {navItems.map((item) => (
          <li key={item}>
            <button
              suppressHydrationWarning
              onClick={() => scrollTo(item)}
              style={{
                background: "none",
                border: "none",
                color: active === item ? "#a855f7" : "#8b85a0",
                fontSize: "0.9rem",
                cursor: "pointer",
                fontFamily: "inherit",
                textTransform: "capitalize",
                transition: "color 0.2s",
                fontWeight: active === item ? 600 : 400,
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <button
        suppressHydrationWarning
        className="flex md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#f1f0ff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            background: "#0f0f1a",
            borderBottom: "1px solid #1e1b33",
            padding: "1.5rem 5%",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {navItems.map((item) => (
            <button
              suppressHydrationWarning
              key={item}
              onClick={() => scrollTo(item)}
              style={{
                background: "none",
                border: "none",
                color: active === item ? "#a855f7" : "#8b85a0",
                fontSize: "1rem",
                cursor: "pointer",
                fontFamily: "inherit",
                textAlign: "left",
                textTransform: "capitalize",
                padding: "0.3rem 0",
                fontWeight: active === item ? 600 : 400,
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
