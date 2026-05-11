export default function SectionHeader({
  label,
  title,
  highlight,
}: {
  label: string;
  title: string;
  highlight: string;
}) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <p
        style={{
          color: "#a855f7",
          fontSize: "0.82rem",
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}
      >
        {label}
      </p>
      <h2
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          fontWeight: 800,
          marginBottom: "1rem",
        }}
      >
        {title} <span style={{ color: "#a855f7" }}>{highlight}</span>
      </h2>
      <div
        style={{
          width: "60px",
          height: "3px",
          background: "linear-gradient(90deg, #7c3aed, #a855f7)",
          borderRadius: "2px",
        }}
      />
    </div>
  );
}
