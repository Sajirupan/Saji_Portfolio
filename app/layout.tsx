import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sajirupan — Full-stack Developer",
  description: "Portfolio of a Full-stack Developer specializing in React, Node.js, and modern web technologies.",
  icons: {
    icon: "/s.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#0a0a0f", color: "#f1f0ff" }}>
        {children}
      </body>
    </html>
  );
}
