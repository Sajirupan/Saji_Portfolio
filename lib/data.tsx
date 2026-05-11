import { 
  Atom, Code2, Layout, FileCode, Wind, Triangle, Hexagon, Zap, Terminal, Database, 
  Share2, Box, Cloud, GitBranch, Frame, RefreshCw, ShoppingCart, CheckCircle2, 
  Dumbbell, Plug2, Bot, Palette, Layers
} from "lucide-react";

export const personalInfo = {
  name: "Sajirupan",
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
  stats: [
    { num: "1+", label: "Years Experience" },
    { num: "7+", label: "Projects Completed" },
    { num: "2+", label: "Clients Served" },
    { num: "2", label: "Certifications" },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/balabavan-sajirupan/",
    github: "https://github.com/Sajirupan",
    twitter: "https://x.com/saji__sr",
  },
};

export const skills = [
  { name: "React", icon: <Atom size={32} />, level: 90, cat: "frontend" },
  { name: "Vue.js", icon: <Code2 size={32} />, level: 80, cat: "frontend" },
  { name: "HTML & CSS", icon: <Layout size={32} />, level: 95, cat: "frontend" },
  { name: "TypeScript", icon: <FileCode size={32} />, level: 85, cat: "frontend" },
  { name: "Tailwind CSS", icon: <Wind size={32} />, level: 88, cat: "frontend" },
  { name: "Next.js", icon: <Triangle size={32} />, level: 86, cat: "frontend" },
  { name: "Node.js", icon: <Hexagon size={32} />, level: 85, cat: "backend" },
  { name: "Express.js", icon: <Zap size={32} />, level: 82, cat: "backend" },
  { name: "Python", icon: <Terminal size={32} />, level: 75, cat: "backend" },
  { name: "PostgreSQL", icon: <Database size={32} />, level: 78, cat: "backend" },
  { name: "MongoDB", icon: <Layers size={32} />, level: 80, cat: "backend" },
  { name: "GraphQL", icon: <Share2 size={32} />, level: 70, cat: "backend" },
  { name: "Docker", icon: <Box size={32} />, level: 72, cat: "tools" },
  { name: "AWS", icon: <Cloud size={32} />, level: 68, cat: "tools" },
  { name: "Git & GitHub", icon: <GitBranch size={32} />, level: 92, cat: "tools" },
  { name: "Figma", icon: <Frame size={32} />, level: 75, cat: "tools" },
  { name: "Linux", icon: <Terminal size={32} />, level: 70, cat: "tools" },
  { name: "CI/CD", icon: <RefreshCw size={32} />, level: 65, cat: "tools" },
];

export const experience = [
  {
    period: "2023 — Present",
    title: "Full-stack Developer",
    place: "Company Name",
    type: "Full-time",
    desc: "Developed and maintained web applications using React, Node.js, and PostgreSQL. Led frontend architecture decisions and improved performance by 40%.",
  },
  {
    period: "2022 — 2023",
    title: "Frontend Developer",
    place: "Agency Name",
    type: "Full-time",
    desc: "Built responsive UIs for 10+ client projects. Collaborated with design teams to implement pixel-perfect interfaces.",
  },
  {
    period: "2021 — 2022",
    title: "Junior Web Developer",
    place: "Startup Name",
    type: "Part-time",
    desc: "Assisted in developing e-commerce platforms and REST APIs using Express and MongoDB.",
  },
];

export const education = [
  {
    period: "2018 — 2022",
    title: "BSc in Computer Science",
    place: "Your University",
    desc: "Focused on software engineering, algorithms, and web technologies. Graduated with First Class Honours.",
  },
  {
    period: "2023",
    title: "Full-Stack Web Development",
    place: "Udemy / Coursera",
    desc: "Completed advanced courses in React, Node.js, Docker, and AWS cloud services.",
  },
];

export const certifications = [
  { period: "2023", title: "AWS Certified Developer", place: "Amazon Web Services" },
  { period: "2022", title: "Meta Frontend Developer", place: "Meta / Coursera" },
];

export const projects = [
  {
    title: "VocaTrust Lanka",
    image: "/vocatrust.png",
    desc: "Full-stack  Voice-based customer feedback and testimonial platform with AI-powered transcription and secure user management.",
    tags: ["Next.js", "Node.js", "MY SQL"],
    cat: "web",
    demo: "https://voca-trust-lanka.vercel.app/",
    code: "https://github.com/Sajirupan/VocaTrust_Lanka",
  },
  {
    title: "Smart Queue Handling System",
    image: "/smart_queue.png",
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
