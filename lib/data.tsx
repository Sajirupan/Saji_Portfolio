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
    { num: "2+", label: "Years Experience" },
    { num: "20+", label: "Projects Completed" },
    { num: "10+", label: "Clients Served" },
    { num: "5", label: "Certifications" },
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
    title: "E-Commerce Platform",
    emoji: <ShoppingCart size={56} />,
    desc: "Full-stack online shopping platform with real-time inventory, payment integration (Stripe), and a powerful admin dashboard.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    cat: "web",
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    emoji: <CheckCircle2 size={56} />,
    desc: "Collaborative project management tool with drag-and-drop boards, real-time team collaboration, and analytics.",
    tags: ["Vue.js", "PostgreSQL", "Socket.io"],
    cat: "web",
    demo: "#",
    code: "#",
  },
  {
    title: "Fitness Tracker",
    emoji: <Dumbbell size={56} />,
    desc: "Mobile-first fitness tracking app with workout plans, progress charts, and nutrition logging.",
    tags: ["React Native", "Firebase"],
    cat: "mobile",
    demo: "#",
    code: "#",
  },
  {
    title: "REST API Service",
    emoji: <Plug2 size={56} />,
    desc: "Scalable RESTful API with authentication, rate limiting, caching, and comprehensive documentation.",
    tags: ["Node.js", "Redis", "Docker"],
    cat: "api",
    demo: "#",
    code: "#",
  },
  {
    title: "AI Chat Interface",
    emoji: <Bot size={56} />,
    desc: "Modern AI chat application with streaming responses, conversation history, and multi-model support.",
    tags: ["React", "Python", "OpenAI"],
    cat: "web",
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio CMS",
    emoji: <Palette size={56} />,
    desc: "Headless CMS built for developers to manage portfolio content with a clean admin interface.",
    tags: ["Next.js", "MongoDB"],
    cat: "web",
    demo: "#",
    code: "#",
  },
];

export const articles = [
  {
    title: "Building Scalable React Applications in 2024",
    emoji: <Atom size={32} />,
    cat: "React",
    date: "Dec 2024",
    mins: "8 min read",
    excerpt: "Exploring modern patterns for state management, code splitting, and performance optimization.",
    link: "#",
  },
  {
    title: "The Complete Guide to Node.js REST APIs",
    emoji: <Hexagon size={32} />,
    cat: "Backend",
    date: "Nov 2024",
    mins: "12 min read",
    excerpt: "From zero to production-ready API with authentication, validation, and error handling.",
    link: "#",
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which",
    emoji: <Layout size={32} />,
    cat: "CSS",
    date: "Oct 2024",
    mins: "6 min read",
    excerpt: "A practical deep-dive into layout systems with real-world use cases and visual examples.",
    link: "#",
  },
  {
    title: "Docker for Full-stack Developers",
    emoji: <Box size={32} />,
    cat: "DevOps",
    date: "Sep 2024",
    mins: "10 min read",
    excerpt: "Containerizing your app, multi-stage builds, and orchestrating with Docker Compose.",
    link: "#",
  },
  {
    title: "TypeScript Best Practices You Should Know",
    emoji: <FileCode size={32} />,
    cat: "TypeScript",
    date: "Aug 2024",
    mins: "7 min read",
    excerpt: "Advanced types, generics, utility types, and patterns that will transform your codebase.",
    link: "#",
  },
  {
    title: "PostgreSQL Performance Tuning Tips",
    emoji: <Database size={32} />,
    cat: "Database",
    date: "Jul 2024",
    mins: "9 min read",
    excerpt: "Indexing strategies, query optimization, connection pooling, and monitoring techniques.",
    link: "#",
  },
];
