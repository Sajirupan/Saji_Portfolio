"use client";
import { useState } from "react";
import { projects } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const filters = ["all", "web", "mobile", "api"];

export default function Projects() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" style={{ padding: "5rem 5%" }}>
      <SectionHeader label="My Work" title="Featured" highlight="Projects" />

      {/* Filter */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        {filters.map((f) => (
          <button
            suppressHydrationWarning
            key={f}
            onClick={() => setActive(f)}
            style={{
              background: active === f ? "#7c3aed" : "#111120",
              border: `1px solid ${active === f ? "#7c3aed" : "#1e1b33"}`,
              color: active === f ? "#fff" : "#8b85a0",
              padding: "0.4rem 1rem",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontFamily: "inherit",
              textTransform: "capitalize",
              transition: "all 0.2s",
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filtered.map((p) => (
          <div
            key={p.title}
            style={{
              background: "#111120",
              border: "1px solid #1e1b33",
              borderRadius: "20px",
              overflow: "hidden",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#a855f7";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#1e1b33";
              (e.currentTarget as HTMLElement).style.transform = "none";
            }}
          >
            {/* Thumbnail */}
            <div
              style={{
                height: "180px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#a855f7",
                background: "linear-gradient(135deg, #1a1030, #0d1a2a)",
              }}
            >
              {p.emoji}
            </div>

            {/* Body */}
            <div style={{ padding: "1.2rem" }}>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "0.8rem" }}>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(124,58,237,0.2)",
                      color: "#c084fc",
                      fontSize: "0.75rem",
                      padding: "0.2rem 0.7rem",
                      borderRadius: "50px",
                      border: "1px solid rgba(124,58,237,0.3)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.4rem" }}>
                {p.title}
              </div>
              <div
                style={{
                  color: "#8b85a0",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                {p.desc}
              </div>
              <div style={{ display: "flex", gap: "0.8rem" }}>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#a855f7",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    transition: "color 0.2s",
                  }}
                >
                  🔗 Live Demo
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#a855f7",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    transition: "color 0.2s",
                  }}
                >
                  ⌥ Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
