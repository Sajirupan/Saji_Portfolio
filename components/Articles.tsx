"use client";
import { articles } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Articles() {
  return (
    <section id="articles" style={{ padding: "5rem 5%", background: "#0f0f1a" }}>
      <SectionHeader label="My Writing" title="Latest" highlight="Articles" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {articles.map((a) => (
          <a
            key={a.title}
            href={a.link}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#111120",
              border: "1px solid #1e1b33",
              borderRadius: "20px",
              overflow: "hidden",
              textDecoration: "none",
              display: "block",
              transition: "all 0.3s",
              color: "inherit",
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
            <div
              style={{
                height: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#a855f7",
                background: "linear-gradient(135deg, #0d1a2a, #1a0d2a)",
              }}
            >
              {a.emoji}
            </div>
            <div style={{ padding: "1.2rem" }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  color: "#8b85a0",
                  fontSize: "0.8rem",
                  marginBottom: "0.8rem",
                }}
              >
                <span style={{ color: "#a855f7", fontWeight: 600 }}>{a.cat}</span>
                <span>{a.date}</span>
                <span>{a.mins}</span>
              </div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  marginBottom: "0.5rem",
                  color: "#f1f0ff",
                }}
              >
                {a.title}
              </div>
              <div style={{ color: "#8b85a0", fontSize: "0.85rem", lineHeight: 1.7 }}>
                {a.excerpt}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
