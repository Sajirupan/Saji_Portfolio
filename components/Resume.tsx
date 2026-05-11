"use client";
import { Briefcase, GraduationCap, Trophy, Download } from "lucide-react";
import { experience, education, certifications } from "@/lib/data";
import SectionHeader from "./SectionHeader";

function TimelineItem({
  period,
  title,
  place,
  type,
  desc,
  last,
}: {
  period: string;
  title: string;
  place: string;
  type?: string;
  desc?: string;
  last?: boolean;
}) {
  return (
    <div style={{ position: "relative", paddingLeft: "1.5rem", marginBottom: last ? 0 : "1.8rem" }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "6px",
          width: "10px",
          height: "10px",
          background: "#a855f7",
          borderRadius: "50%",
        }}
      />
      {!last && (
        <div
          style={{
            position: "absolute",
            left: "4px",
            top: "16px",
            width: "2px",
            bottom: "-1.8rem",
            background: "#1e1b33",
          }}
        />
      )}
      <div style={{ color: "#c084fc", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.3rem" }}>
        {period}
      </div>
      <div style={{ fontWeight: 600, marginBottom: "0.2rem" }}>{title}</div>
      <div style={{ color: "#8b85a0", fontSize: "0.9rem", marginBottom: desc ? "0.4rem" : 0 }}>
        {place}
        {type && ` · ${type}`}
      </div>
      {desc && (
        <div style={{ color: "#8b85a0", fontSize: "0.85rem", lineHeight: 1.7 }}>{desc}</div>
      )}
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" style={{ padding: "5rem 5%" }}>
      <SectionHeader label="My Journey" title="Resume &" highlight="Experience" />

      <div style={{ marginBottom: "2rem" }}>
        <a
          href="/resume.pdf"
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            border: "1.5px solid #a855f7",
            color: "#a855f7",
            background: "transparent",
            padding: "0.7rem 1.6rem",
            borderRadius: "50px",
            fontSize: "0.9rem",
            fontWeight: 600,
            cursor: "pointer",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.background = "rgba(168,85,247,0.1)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.background = "transparent")
          }
        >
          <Download size={18} /> Download Resume
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* Experience */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "1.2rem",
              color: "#a855f7",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <Briefcase size={22} /> Work Experience
          </h3>
          {experience.map((e, i) => (
            <TimelineItem key={i} {...e} last={i === experience.length - 1} />
          ))}
        </div>

        {/* Education + Certs */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "1.2rem",
              color: "#a855f7",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <GraduationCap size={24} /> Education
          </h3>
          {education.map((e, i) => (
            <TimelineItem key={i} {...e} last={i === education.length - 1} />
          ))}

          <h3
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "1.2rem",
              color: "#a855f7",
              margin: "2rem 0 1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <Trophy size={22} /> Certifications
          </h3>
          {certifications.map((c, i) => (
            <TimelineItem key={i} {...c} last={i === certifications.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
