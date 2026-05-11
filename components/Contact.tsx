"use client";
import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { MapPin, Mail, Phone, Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }
    setStatus("sending");
    // Simulate sending (replace with real API call e.g. EmailJS / Resend)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0a0a0f",
    border: "1px solid #1e1b33",
    borderRadius: "10px",
    padding: "0.75rem 1rem",
    color: "#f1f0ff",
    fontFamily: "inherit",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "#8b85a0",
    fontSize: "0.85rem",
    marginBottom: "0.4rem",
  };

  return (
    <section id="contact" style={{ padding: "5rem 5%" }}>
      <SectionHeader label="Get In Touch" title="Contact" highlight="Me" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Info */}
        <div>
          <p style={{ color: "#8b85a0", lineHeight: 1.85, marginBottom: "2rem" }}>
            Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll
            get back to you as soon as possible.
          </p>
          {[
            { icon: <MapPin size={20} />, label: "Location", value: personalInfo.location },
            { icon: <Mail size={20} />, label: "Email", value: personalInfo.email },
            { icon: <Phone size={20} />, label: "Phone", value: personalInfo.phone },
            { icon: <Briefcase size={20} />, label: "Availability", value: "Open to freelance & full-time", accent: true },
          ].map((item) => (
            <div
              key={item.label}
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  background: "rgba(124,58,237,0.15)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ color: "#8b85a0", fontSize: "0.78rem" }}>{item.label}</div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    color: item.accent ? "#a855f7" : "#f1f0ff",
                    fontWeight: item.accent ? 600 : 400,
                  }}
                >
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#111120",
            border: "1px solid #1e1b33",
            borderRadius: "24px",
            padding: "2rem",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.2rem" }}>
            <div>
              <label style={labelStyle}>First Name *</label>
              <input
                suppressHydrationWarning
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="John"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#a855f7")}
                onBlur={(e) => (e.target.style.borderColor = "#1e1b33")}
              />
            </div>
            <div>
              <label style={labelStyle}>Last Name</label>
              <input
                suppressHydrationWarning
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Doe"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#a855f7")}
                onBlur={(e) => (e.target.style.borderColor = "#1e1b33")}
              />
            </div>
          </div>

          <div style={{ marginBottom: "1.2rem" }}>
            <label style={labelStyle}>Email Address *</label>
            <input
              suppressHydrationWarning
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#a855f7")}
              onBlur={(e) => (e.target.style.borderColor = "#1e1b33")}
            />
          </div>

          <div style={{ marginBottom: "1.2rem" }}>
            <label style={labelStyle}>Subject</label>
            <input
              suppressHydrationWarning
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project Discussion"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#a855f7")}
              onBlur={(e) => (e.target.style.borderColor = "#1e1b33")}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={labelStyle}>Message *</label>
            <textarea
              suppressHydrationWarning
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => (e.target.style.borderColor = "#a855f7")}
              onBlur={(e) => (e.target.style.borderColor = "#1e1b33")}
            />
          </div>

          <button
            suppressHydrationWarning
            type="submit"
            disabled={status === "sending"}
            style={{
              width: "100%",
              background:
                status === "sent"
                  ? "linear-gradient(135deg,#16a34a,#15803d)"
                  : status === "error"
                  ? "linear-gradient(135deg,#dc2626,#b91c1c)"
                  : "linear-gradient(135deg,#7c3aed,#a855f7)",
              color: "#fff",
              padding: "0.85rem",
              borderRadius: "50px",
              border: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: status === "sending" ? "wait" : "pointer",
              fontFamily: "inherit",
              transition: "all 0.3s",
            }}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "✅ Message Sent!"
              : status === "error"
              ? "⚠️ Please fill required fields"
              : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}
