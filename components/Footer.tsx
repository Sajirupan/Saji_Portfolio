"use client";
import { personalInfo } from "@/lib/data";
import { Heart } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    if (id === "contact") {
      window.location.href = `mailto:${personalInfo.email}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = ["home", "about", "resume", "skills", "projects", "articles"];

  return (
    <footer
      style={{
        background: "#0f0f1a",
        borderTop: "1px solid #1e1b33",
        padding: "3rem 5% 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "1.4rem",
            color: "#a855f7",
          }}
        >
          {personalInfo.shortName}.
        </div>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {navItems.map((item) => (
            <button
              suppressHydrationWarning
              key={item}
              onClick={() => scrollTo(item)}
              style={{
                background: "none",
                border: "none",
                color: "#8b85a0",
                fontSize: "0.85rem",
                cursor: "pointer",
                fontFamily: "inherit",
                textTransform: "capitalize",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#a855f7")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8b85a0")}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #1e1b33",
          paddingTop: "1.5rem",
          textAlign: "center",
          color: "#8b85a0",
          fontSize: "0.85rem",
        }}
      >
        <p>
          {personalInfo.shortName}. — {personalInfo.title}
        </p>
        <p style={{ marginTop: "0.4rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem" }} suppressHydrationWarning>
          Built with <Heart size={14} fill="#a855f7" color="#a855f7" /> using Next.js &amp; TypeScript · © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
