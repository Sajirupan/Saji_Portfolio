"use client";
import { personalInfo } from "@/lib/data";
import { Hand } from "lucide-react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "7rem 5% 4rem",
        gap: "2rem",
        position: "relative",
        overflow: "hidden",
        flexWrap: "wrap",
      }}
    >
      {/* Glow background */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)",
          top: "50%",
          left: "40%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Left */}
      <div style={{ flex: 1, minWidth: "280px", zIndex: 1 }}>
        <p style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#8b85a0", fontSize: "1.05rem", marginBottom: "0.4rem" }}>
          <Hand size={20} color="#a855f7" /> {personalInfo.greeting}
        </p>
        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "0.4rem",
          }}
        >
          {personalInfo.name}
        </h1>
        <h2
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#a855f7",
            marginBottom: "1.2rem",
          }}
        >
          {personalInfo.title}
        </h2>
        <p
          style={{
            color: "#8b85a0",
            fontSize: "1rem",
            lineHeight: 1.85,
            maxWidth: "500px",
            marginBottom: "2rem",
          }}
        >
          {personalInfo.bio[0]}
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          <button
            suppressHydrationWarning
            onClick={() => scrollTo("contact")}
            style={{
              background: "linear-gradient(135deg,#7c3aed,#a855f7)",
              color: "#fff",
              padding: "0.75rem 1.8rem",
              borderRadius: "50px",
              border: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = "translateY(-2px)";
              (e.target as HTMLElement).style.boxShadow = "0 8px 25px rgba(124,58,237,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = "none";
              (e.target as HTMLElement).style.boxShadow = "none";
            }}
          >
            Hire Me
          </button>
          <button
            suppressHydrationWarning
            onClick={() => scrollTo("projects")}
            style={{
              border: "1.5px solid #a855f7",
              color: "#a855f7",
              background: "transparent",
              padding: "0.75rem 1.8rem",
              borderRadius: "50px",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.background = "rgba(168,85,247,0.1)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.background = "transparent")
            }
          >
            View Projects
          </button>
        </div>

        {/* Socials */}
        <div style={{ display: "flex", gap: "0.8rem" }}>
          {[
            { icon: <FaLinkedin size={20} />, href: personalInfo.socials.linkedin, title: "LinkedIn" },
            { icon: <FaGithub size={20} />, href: personalInfo.socials.github, title: "GitHub" },
            { icon: <FaXTwitter size={20} />, href: personalInfo.socials.twitter, title: "Twitter" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              title={s.title}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: "1.5px solid #1e1b33",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#8b85a0",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#a855f7";
                (e.currentTarget as HTMLElement).style.color = "#a855f7";
                (e.currentTarget as HTMLElement).style.background = "rgba(168,85,247,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#1e1b33";
                (e.currentTarget as HTMLElement).style.color = "#8b85a0";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right - Avatar */}
      <div style={{ flexShrink: 0, zIndex: 1 }}>
        <div
          style={{
            width: "clamp(220px, 25vw, 300px)",
            height: "clamp(270px, 30vw, 360px)",
            borderRadius: "24px",
            border: "2px solid #7c3aed",
            background: "linear-gradient(135deg,#1a1030,#0d0d1a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "6rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, transparent 40%, rgba(124,58,237,0.3) 100%)",
            }}
          />
          <img
            src="/saji.jpeg"
            alt="Sajirupan"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
            }}
          />
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "1.2rem",
          flexWrap: "wrap",
          zIndex: 1,
        }}
      >
        {personalInfo.stats.map((s) => (
          <div
            key={s.label}
            style={{
              background: "#111120",
              border: "1px solid #1e1b33",
              borderRadius: "16px",
              padding: "1.1rem 1.6rem",
              minWidth: "120px",
              transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "#7c3aed")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "#1e1b33")
            }
          >
            <div
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "2rem",
                fontWeight: 800,
                color: "#a855f7",
              }}
            >
              {s.num}
            </div>
            <div style={{ color: "#8b85a0", fontSize: "0.8rem", marginTop: "0.2rem" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
