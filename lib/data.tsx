import { 
  Atom, Code2, Layout, FileCode, Wind, Triangle, Hexagon, Zap, Terminal, Database, 
  Share2, Box, Cloud, GitBranch, Frame, RefreshCw, ShoppingCart, CheckCircle2, 
  Dumbbell, Plug2, Bot, Palette, Layers
} from "lucide-react";

import { FaBootstrap } from "react-icons/fa6";

export const personalInfo = {
  name: "Balabavan Sajirupan",
  shortName: "Sajirupan",
  title: "Full-stack Developer",
  greeting: "I am",
  bio: [
    "I design and develop digital experiences that combine creativity, performance, and usability. With a strong focus on clean design and smooth interactions, I bring ideas to life through thoughtful development.",
    "With experience across both frontend and backend technologies, I enjoy working on every layer of the stack — from crafting beautiful interfaces to designing robust APIs and databases.",
    "When I'm not coding, you'll find me exploring new tech, reading about design systems, or contributing to open source.",
  ],
  location: "Jaffna, Sri Lanka",
  email: "balabavansajirupan@gmail.com",
  phone: "+94 76 736 0102",
  availability: "Open to Work",
  // stats: [
  //   { num: "1+", label: "Years Experience" },
  //   { num: "7+", label: "Projects Completed" },
  //   { num: "2+", label: "Clients Served" },
  //   { num: "2", label: "Certifications" },
  // ],
  socials: {
    linkedin: "https://www.linkedin.com/in/balabavan-sajirupan/",
    github: "https://github.com/Sajirupan",
    twitter: "https://x.com/saji__sr",
  },
};

export const skills = [
  { name: "React", icon: <Atom size={32} />, level: 90, cat: "frontend" },
  { name: "HTML & CSS", icon: <Layout size={32} />, level: 95, cat: "frontend" },
  { name: "TypeScript", icon: <FileCode size={32} />, level: 85, cat: "frontend" },
  { name: "Tailwind CSS", icon: <Wind size={32} />, level: 88, cat: "frontend" },
  { name: "Bootstrap CSS", icon: <FaBootstrap size={32} />, level: 88, cat: "frontend" },
  { name: "Next.js", icon: <Triangle size={32} />, level: 86, cat: "frontend" },
  { name: "Node.js", icon: <Hexagon size={32} />, level: 85, cat: "backend" },
  { name: "Express.js", icon: <Zap size={32} />, level: 82, cat: "backend" },
  { name: "Python", icon: <Terminal size={32} />, level: 75, cat: "backend" },
  { name: "MySQL", icon: <Database size={32} />, level: 78, cat: "backend" },
  { name: "MongoDB", icon: <Layers size={32} />, level: 80, cat: "backend" },
  { name: "Git & GitHub", icon: <GitBranch size={32} />, level: 92, cat: "tools" },
  { name: "Figma", icon: <Frame size={32} />, level: 75, cat: "tools" },
  { name: "Linux", icon: <Terminal size={32} />, level: 70, cat: "tools" },
];

export const experience = [
  {
    period: "2026 — Present",
    title: "Full-stack Developer Intern",
    place: "Decode Labs",
    type: "Internship",
    desc: "Developed mobile-first responsive web applications and built user-friendly interfaces optimized for performance across multiple devices and screen sizes.",
  },
  // {
  //   period: "2022 — 2023",
  //   title: "Frontend Developer",
  //   place: "Agency Name",
  //   type: "Full-time",
  //   desc: "Built responsive UIs for 10+ client projects. Collaborated with design teams to implement pixel-perfect interfaces.",
  // },
  // {
  //   period: "2021 — 2022",
  //   title: "Junior Web Developer",
  //   place: "Startup Name",
  //   type: "Part-time",
  //   desc: "Assisted in developing e-commerce platforms and REST APIs using Express and MongoDB.",
  // },
];

export const education: any[] = [
  {
    period: "2021 — 2024",
    title: "G.C.E. Advanced Level (Physical Science)",
    place: "Jaffna Centeral College",
    desc: "Passed the G.C.E. Advanced Level Examination in Physical Science.",
  },
  {
    period: "2025 - 2026",
    title: "Full-Stack Web Development",
    place: "UKI Technology School, Jaffna",
    desc: "Completed advanced courses in Full-Stack Development.",
  },
  {
    period: "2026 - Present",
    title: "Bachelor of Information Technology (BIT)",
    place: "Faculty of Information Technology, University of Moratuwa",
    desc: "Bachelor of Information Technology (BIT) ",
  },
];

export const certifications: any[] = [
  { period: "2026", title: "MongoDB Certification", place: "MongoDB" },
  { period: "2026", title: "Full Stark Developer", place: "UKI Technology School, Jaffna" },
];

export const projects = [
  {
    title: "VocaTrust Lanka",
    image: "/vocatrust.png",
    emoji: <Bot size={40} />,
    desc: "Full-stack  Voice-based customer feedback and testimonial platform with AI-powered transcription and secure user management.",
    tags: ["Next.js", "Node.js", "MY SQL"],
    cat: "web",
    demo: "https://voca-trust-lanka.vercel.app/",
    code: "https://github.com/Sajirupan/VocaTrust_Lanka",
  },
  {
    title: "Smart Queue Handling System",
    image: "/smart_queue.png",
    emoji: <RefreshCw size={40} />,
    desc: "A web application to manage queues in shops and restaurants, with real-time updates and notifications.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    cat: "web",
    demo: "https://saji-portfolio-mu.vercel.app/",
    code: "https://github.com/Sajirupan/Smart-Queue-Handling-System",
  }
];

export const articles = [
  {
    title: "Purpose of “use client” in Next.JS",
    emoji: <Triangle size={32} />,
    cat: "Next",
    date: "March 2026",
    mins: "2 min read",
    excerpt: "What is the useClient directive and why do we need it in our NextJS application?",
    link: "https://medium.com/@SAJI-SR/purpose-of-use-client-in-next-js-d4877c62dffc",
  },
  {
    title: "Integrate backend with frontend using Axios",
    emoji: <Zap size={32} />,
    cat: "Backend & Frontend",
    date: "March 2026",
    mins: "3 min read",
    excerpt: "A simple and easy guide to integrate backend with frontend using Axios",
    link: "https://medium.com/@SAJI-SR/integrate-backend-with-frontend-using-axios-a0614075ba9c",
  },
  {
    title: "Why react uses virtual DOM instead of direct DOM manipulation",
    emoji: <Atom size={32} />,
    cat: "React",
    date: "December 2025",
    mins: "2 min read",
    excerpt: "What is Virtual DOM and why react uses it instead of direct DOM manipulation.",
    link: "https://medium.com/@SAJI-SR/why-react-uses-virtual-dom-instead-of-direct-dom-manipulation-2c518e5daa0f",
  },
  {
    title: "Team Collaboration using GIT",
    emoji: <GitBranch size={32} />,
    cat: "Git",
    date: "November 2025",
    mins: "3 min read",
    excerpt: "Team Collaboration using Git.",
    link: "https://medium.com/@SAJI-SR/team-collaboration-using-git-944c43b868b2",
  },
  {
    title: "Tailwind CSS vs Bootstrap",
    emoji: <Wind size={32} />,
    cat: "CSS",
    date: "October 2025",
    mins: "3 min read",
    excerpt: "Tailwind CSS vs Bootstrap.",
    link: "https://medium.com/@SAJI-SR/tailwind-css-vs-bootstrap-e17287a32371",
  },
  {
    title: "What is Artificial Intelligence (Explained to Beginners)  ",
    emoji: <Bot size={32} />,
    cat: "Artificial Intelligence",
    date: "October 2025",
    mins: "3 min read",
    excerpt: "Indexing strategies, query optimization, connection pooling, and monitoring techniques.",
    link: "https://medium.com/@SAJI-SR/what-is-artificial-intelligence-explained-to-beginners-63a9f9793976",
  },
];
