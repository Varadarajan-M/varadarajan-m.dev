import { Experience, NavLinkProps, Project, Skill } from "@/types/common";

export const CONSTANTS = {
  email: "varad2k12@gmail.com",
  navLinks: [
    {
      href: "#projects",
      label: "Projects",
      type: "link",
    },
    {
      href: "#experience",
      label: "Experience",
      type: "link",
    },
    {
      href: "#skills",
      label: "Skills",
      type: "link",
    },
    {
      href: "#contact",
      label: "Contact Me",
      type: "cta_link",
    },
  ] satisfies NavLinkProps[],
  hero: {
    name: "Varadarajan M",
    initials: "VR",
    role: {
      highlight: "Full-Stack",
      base: "Software Engineer",
    },
    cta: {
      resume: "Download Resume",
    },
    description:
      "The web is my canvas. I specialize in crafting high-performance applications that deliver exceptional user experiences.",
    resumeLink:
      "https://drive.google.com/file/d/1sUMpEOpkF0mdt6Z9spfqozOXcg1J1D58/view?usp=drive_link",
    socials: {
      linkedin: "https://www.linkedin.com/in/varadarajan-m-724512164/",
      instagram: "https://www.instagram.com/vk_.31/",
      github: "https://github.com/Varadarajan-M",
    },
    avatar: "/avatar-bg.avif",
    scrollText: "Scroll to explore",
  },
  projects: [
    {
      type: "Web App",
      title: "ResumeCraft",
      description:
        "AI-powered resume builder with real-time PDF preview, ATS friendly resume templates, smart content suggestions, PDF import, rich text editing, and deep editor-to-preview sync. Fully open-source and built for serious job seekers.",
      tech: [
        "Next.js 15",
        "TypeScript",
        "React 19",
        "MongoDB",
        "Generative AI",
      ],
      image: "/projects/resume-craft.avif",
      live: "https://theresumecraft.vercel.app?utm_source=varadarajan-m.dev&utm_medium=referral&utm_campaign=landing_page",
      github: "https://github.com/Varadarajan-M/resume-craft",
      size: "large",
    },

    {
      type: "PWA",
      title: "VI Messenger",
      description:
        "Real-time chat application with personal and group chats, AI assistant, file sharing, typing indicators, read receipts, and full offline-capable PWA support.",
      features: [
        "Real-time messaging",
        "AI Assistant",
        "File sharing",
        "PWA Support",
      ],
      tech: [
        "React",
        "TypeScript",
        "Socket.io",
        "Service Workers",
        "Express",
        "MongoDB",
        "Generative AI",
      ],
      image: "/projects/vi-messenger.avif",
      live: "https://vi-messenger.onrender.com?utm_source=varadarajan-m.dev&utm_medium=referral&utm_campaign=landing_page",
      github: "https://github.com/Varadarajan-M/vi-messenger",
      size: "small",
    },
    {
      type: "CLI Tool",
      title: "Mac Dev Starter CLI",
      description:
        "Interactive CLI tool to bootstrap a complete macOS development environment — installs Git, Node (via NVM), code editors, terminal apps, browser tools, and more — all with one command.",
      features: [
        "Interactive CLI",
        "DX focused",
        "One-command setup",
        "Toolchain automation",
      ],
      tech: ["Node.js", "TypeScript", "Shell", "Homebrew"],
      image: "/projects/mac-dev-starter-kit.avif",
      github: "https://github.com/Varadarajan-M/mac-dev-starter-kit",
      size: "small",
    },
    {
      type: "Web App",
      title: "FormCraft",
      description:
        "AI-powered no-code form builder with drag-and-drop UI, conditional logic, analytics dashboard, integrations, and real-time customization.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Gemini AI"],
      image: "/projects/form-craft.avif",
      live: "https://form-craft-v1-beta.vercel.app?utm_source=varadarajan-m.dev&utm_medium=referral&utm_campaign=landing_page",
      github: "https://github.com/Varadarajan-M/form-craft",
      size: "large",
    },
  ] satisfies Project[],
  experiences: [
    {
      company: "Rize Ag-Tech",
      role: "Mid-level Frontend Engineer",
      period: "Sep 2024 - Present",
      description:
        "Working on internal and customer-facing tools that deal with large datasets, real-time updates, and complex user workflows in an agri-tech environment.",
      highlights: [
        "Built map-based views rendering 5k+ markers and worked through multiple performance bottlenecks around clustering, re-renders, and interaction latency",
        "Worked extensively on large, data-heavy tables (5k+ rows) with complex selection rules, bulk actions, and filters, using virtualization to keep interactions smooth",
        "Designed and maintained dashboards that combine charts, tables, and maps while keeping the UI responsive under heavy data loads",
        "Refactored data-fetching and caching patterns using TanStack Query to reduce unnecessary network calls and UI inconsistencies",
        "Implemented a role-based access control layer to handle permissions cleanly as the product surface area grew",
      ],
    },
    {
      company: "Genpro Research",
      role: "Frontend Engineer",
      period: "Jul 2023 - Sept 2024",
      description:
        "Worked on MAIA, an AI-powered platform used by medical and regulatory writers to search, edit, and author large volumes of content.",
      highlights: [
        "Built an AI-driven semantic search and chat experience with streaming responses and citation-aware navigation over large document sets",
        "Developed the admin interface for managing users, roles, and system configuration using Next.js",
        "Worked on a collaborative rich text editor built with SlateJS, including live synchronization across browser tabs",
        "Created and maintained a shared UI component library, published as an npm package, to keep behavior and design consistent across teams",
      ],
    },
    {
      company: "Infosys Ltd.",
      role: "CyberSecurity Engineer",
      period: "Dec 2021 - Jul 2023",
      description:
        "Part of the SOAR team, focused on automating repetitive and error-prone parts of security incident response.",
      highlights: [
        "Built automation playbooks to handle common security incidents with minimal manual intervention",
        "Developed an incident response workbench in Cortex XSOAR to process and act on SIEM alerts",
        "Worked closely with security analysts to translate real incident workflows into reliable automation",
      ],
    },
    {
      company: "Tech RSR",
      role: "Full-stack Engineer",
      period: "May 2021 - Dec 2021",
      description:
        "Worked as a full-stack engineer on internal project management tools.",
      highlights: [
        "Built frontend features in React and backend APIs in Node.js and TypeScript",
        "Focused on performance issues like redundant API calls and slow interactions",
        "Added integration tests using Cypress to stabilize core user flows",
      ],
    },
  ] satisfies Experience[],
  skills: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 92 },
    { name: "JavaScript", level: 93 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js", level: 75 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 80 },
    { name: "Redux", level: 94 },
    { name: "Zustand", level: 95 },
    { name: "TanStack Query", level: 95 },
    { name: "SCSS", level: 95 },
  ] satisfies Skill[],
  contact: {
    title: {
      highlight: "Connect",
      base: "Let's",
    },
    description:
      "Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.",
    cta: {
      email: "Send me an email",
    },
  },
  skill: {
    title: {
      highlight: "Skills",
      base: "& Tools",
    },
    description:
      "Some of the tools I play with, Flexible to learn anything new though :)",
  },
  experience: {
    title: {
      highlight: "My",
      base: "Experience",
    },
    description: "Delivering Results: A Tech Professional's Journey",
  },
  project: {
    title: "Recent Projects",
    description:
      "I enjoy building side projects and constantly challenge myself apart from my actual work :)",
    cta: {
      github: "View more on GitHub",
    },
  },
  footer: {
    backToTop: "Back to top ↑",
  },
} as const;
