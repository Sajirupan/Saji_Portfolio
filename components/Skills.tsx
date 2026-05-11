"use client";
import { useState, useEffect } from "react";
import { skills } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const tabs = ["all", "frontend", "backend", "tools"];

export default function Skills() {
  const [active, setActive] = useState("all");
  const [animated, setAnimated] = useState(false);

  const filtered = active === "all" ? skills : skills.filter((s) => s.cat === active);

  useEffect(() => {
    setAnimated(false);
    const t = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <section id="skills" style={{ padding: "5rem 5%", background: "#0f0f1a" }}>
      <SectionHeader label="What I Know" title="My" highlight="Skills" />

      {/* Tabs */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        {tabs.map((tab) => (
          <button
            suppressHydrationWarning
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              background: active === tab ? "#7c3aed" : "#111120",
              border: `1px solid ${active === tab ? "#7c3aed" : "#1e1b33"}`,
              color: active === tab ? "#fff" : "#8b85a0",
              padding: "0.5rem 1.2rem",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontFamily: "inherit",
              textTransform: "capitalize",
              transition: "all 0.2s",
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "1rem",
        }}
      >
        {filtered.map((skill) => (
          <div
            key={skill.name}
            style={{
              background: "#111120",
              border: "1px solid #1e1b33",
              borderRadius: "16px",
              padding: "1.2rem",
              textAlign: "center",
              transition: "all 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#a855f7";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#1e1b33";
              (e.currentTarget as HTMLElement).style.transform = "none";
            }}
          >
            <div style={{ color: "#a855f7", marginBottom: "0.6rem", display: "flex", justifyContent: "center" }}>{skill.icon}</div>
            <div style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.5rem" }}>
              {skill.name}
            </div>
            <div
              style={{
                height: "4px",
                background: "#1e1b33",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #7c3aed, #a855f7)",
                  borderRadius: "2px",
                  width: animated ? `${skill.level}%` : "0%",
                  transition: "width 0.8s ease",
                }}
              />
            </div>
            <div style={{ color: "#8b85a0", fontSize: "0.75rem", marginTop: "0.4rem" }}>
              {skill.level}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
