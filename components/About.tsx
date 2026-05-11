"use client";
import { personalInfo } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "5rem 5%", background: "#0f0f1a" }}
    >
      <SectionHeader label="Get To Know Me" title="About" highlight="Me" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            background: "#111120",
            border: "1px solid #1e1b33",
            borderRadius: "24px",
            minHeight: "340px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "8rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "40%",
              background: "linear-gradient(transparent, rgba(124,58,237,0.2))",
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

        {/* Text */}
        <div>
          {personalInfo.bio.map((para, i) => (
            <p
              key={i}
              style={{
                color: "#8b85a0",
                lineHeight: 1.9,
                fontSize: "1rem",
                marginBottom: "1.1rem",
              }}
            >
              {para}
            </p>
          ))}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.8rem",
              margin: "1.5rem 0",
            }}
          >
            {[
              { label: "Name", value: personalInfo.name },
              { label: "Location", value: personalInfo.location },
              { label: "Email", value: personalInfo.email },
              { label: "Availability", value: personalInfo.availability, accent: true },
            ].map((d) => (
              <div key={d.label}>
                <div style={{ color: "#8b85a0", fontSize: "0.78rem", marginBottom: "0.2rem" }}>
                  {d.label}
                </div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: d.accent ? "#a855f7" : "#f1f0ff",
                  }}
                >
                  {d.value}
                  {d.accent && " ✓"}
                </div>
              </div>
            ))}
          </div>

          <button
            suppressHydrationWarning
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
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
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </section>
  );
}
