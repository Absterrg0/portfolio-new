import { BiLogoPostgresql } from "react-icons/bi"
import {FaGithub, FaLinkedinIn, FaPython } from "react-icons/fa6"
import { DiJavascript } from "react-icons/di"
import { FaGitAlt } from "react-icons/fa6"
import { IoLogoNodejs } from "react-icons/io5"
import { PiFigmaLogoBold } from "react-icons/pi"
import { FaDocker, FaMediumM } from "react-icons/fa"
import { BsFiletypeSql } from "react-icons/bs"

import {
  RiBearSmileLine,
  RiJavaLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri"
import {
  SiRedis,
  SiBehance,
  SiExpress,
  SiGreensock,
  SiMongodb,
  SiPostman,
  SiShadcnui,
  SiVercel,
  SiReactquery,
  SiLeetcode,
  SiPrisma,
  SiDjango,
} from "react-icons/si"
import {
  TbBrandCpp,
  TbBrandFramerMotion,
  TbBrandTypescript,
  TbHexagonLetterC,
} from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"
import { ImLab } from "react-icons/im"

const skills = [
  { id: 1, icon: RiReactjsLine, text: "ReactJs" },
  { id: 2, icon: RiNextjsLine, text: "NextJs" },
  { id: 5, icon: TbBrandTypescript, text: "TypeScript" },
  { id: 6, icon: RiTailwindCssFill, text: "Tailwind" },
  { id: 8, icon: SiReactquery, text: "Tanstack Query" },
  { id: 10, icon: TbBrandFramerMotion, text: "Motion" },
  { id: 13, icon: SiExpress, text: "ExpressJS" },
  { id: 14, icon: BiLogoPostgresql, text: "PostgreSQL" },
  { id: 16, icon: SiRedis, text: "Redis" },
  { id: 17, icon: SiPrisma, text: "Prisma" },
  { id: 19, icon: FaGitAlt, text: "Git" },
  { id: 25, icon: BsFiletypeSql, text: "SQL" },
  { id: 26, icon: FaDocker, text: "Docker" },
  { id: 27, icon: VscTerminalLinux, text: "Linux" },
  { id: 29, icon: PiFigmaLogoBold, text: "Figma" },
]
const packages = [
  {
    id: 1,
    title: "Okito SDK",
    content:
      "A Solana SDK package that wraps various Solana functions in a developer-friendly manner, similar to how WAGMI works for Ethereum. Provides a clean, intuitive API for building Solana dApps with TypeScript support and comprehensive documentation.",
    url: "https://okito.dev/",
    github: "https://github.com/Absterrg0/Okito-app",
    skill: ["TypeScript", "Solana", "Web3", "npm", "SDK", "Blockchain"],
  },
]

const projects = [
  {
    id: 1,
    img: "/assets/Images/project/Okito.png",
    title: "Okito",
    status: true,
    featured: true,
    content:
      "A cutting-edge Web3 payment gateway built on Solana blockchain, designed with developer experience and user experience at its core. Currently my main focus, I'm continuously working to enhance its capabilities and make crypto payments as simple as traditional payment methods.",
    url: "https://app.okito.dev/",
    github: "https://github.com/Absterrg0/Okito-app",
    skill: [
      "Next.js",
      "TypeScript",
      "Solana",
      "Web3",
      "React",
      "Tailwind",
      "Blockchain",
    ],
  },
  {
    id: 2,
    img: "/assets/Images/project/Droplert.png",
    title: "Droplert",
    status: true,
    content:
      "A real-time notification system that can be integrated into any website through a simple npm package. Enables developers to add customizable, non-intrusive notifications to their applications with minimal setup.",
    url: "https://droplert.abstergo.dev/",
    github: "https://github.com/Absterrg0/Alertify",
    skill: ["TypeScript", "npm", "JavaScript", "React", "Node.js"],
  },
  {
    id: 3,
    img: "/assets/Images/project/DecentraWork.png",
    title: "DecentraWork",
    status: true,
    content:
      "A Web3-powered freelancing platform leveraging the Solana blockchain to create a decentralized marketplace. Eliminates traditional intermediaries, ensuring secure, transparent transactions through smart contracts with instant payments.",
    url: "https://decentrawork.abstergo.dev/",
    github: "https://github.com/Absterrg0/DecentraWork",
    skill: [
      "Solana",
      "Web3",
      "Blockchain",
      "Smart Contracts",
      "React",
      "TypeScript",
    ],
  },
  {
    id: 4,
    img: "/assets/Images/project/JustDraw.png",
    title: "JustDraw",
    status: true,
    content:
      "An intuitive single-user drawing application with customizable tools and shape selection options. Perfect for sketching ideas, creating mockups, or expressing creativity with a smooth and responsive drawing experience.",
    url: "https://justdraw.abstergo.dev/",
    github: "https://github.com/Absterrg0/JustDraw",
    skill: ["React", "Canvas API", "TypeScript", "Tailwind", "JavaScript"],
  },
]

const writings = [
  {
    id: 1,
    img: "/assets/Images/writing/jwt.png",
    head: "JWT Authentication APIs with TypeScript, Node.js, and MongoDB.",
    des: "This blog guides you through building a JWT authentication system using TypeScript, Node.js, Express, and MongoDB. Learn to implement secure authentication, protect routes, and test APIs with Postman.",
    link: "https://medium.com/@rinkitadhana/jwt-authentication-apis-with-typescript-node-js-and-mongodb-b05a8a3cb062",
  },
  {
    id: 2,
    img: "/assets/Images/writing/docker1.png",
    head: "Part 1: Docker with Node.js & Express.js — Basics.",
    des: "This blog is part one of the Docker series, and it will guide you through how to containerize your simple Node.js application at a basic level with some extra CLI commands.",
    link: "https://medium.com/@rinkitadhana/part-1-docker-with-node-js-express-js-basics-06229c95ff7a",
  },
  {
    id: 3,
    img: "/assets/Images/writing/gsoc.png",
    head: "My GSOC Journey: The 2-Month Sprint from Doubt to Done",
    des: "This blog details my intense, two-month journey to cracking GSOC 2025, from nearly giving up to securing a spot through hard work, strategic learning, and crucial mentorship.",
    link: "https://medium.com/@rinkitadhana/my-gsoc-journey-the-2-month-sprint-from-doubt-to-done-b92aee22dc1f",
  },
  {
    id: 4,
    img: "/assets/Images/writing/prisma.jpg",
    head: "Getting Started with Prisma: Quick and Easy Node.js Setup",
    des: "Learn how to quickly set up Prisma in your Node.js (and TypeScript) project with this step-by-step guide. This tutorial will walk you through the simplest and fastest way to get Prisma configured and ready to use.",
    link: "https://medium.com/@rinkitadhana/getting-started-with-prisma-set-up-prisma-on-your-typescript-express-server-45bcef5e178c",
  },
  {
    id: 5,
    img: "/assets/Images/writing/gsoc2.webp",
    head: "How I almost ruined my GSoC project: My Bonding Period Journey",
    des: "In this blog, I’ll share my journey after getting selected for GSoC, the challenges I faced while balancing exams and project work, and how I tackled the unexpected complexities of my project.",
    link: "https://medium.com/@rinkitadhana/how-i-almost-ruined-my-gsoc-project-my-community-bonding-period-journey-9b890d6002eb",
  },
  {
    id: 6,
    img: "/assets/Images/writing/figma.png",
    head: "Create Common Patterns in Figma Effortlessly",
    des: "In this blog, I will share a simple and effective way to create some of the most common patterns in Figma. You'll learn how to design grid patterns and dotted grid patterns effortlessly",
    link: "https://medium.com/@rinkitadhana/create-common-patterns-in-figma-effortlessly-grid-and-dotted-grid-patterns-43eadb877fe2",
  },
]

const hireText =
  "I’m currently available for internships, full-time opportunities, and freelance projects. If you’re looking for someone passionate, skilled, and ready to contribute, I’m here to help bring your ideas to life!"

const emailLink =
  "mailto:parvj@abstergo.dev?subject=Interested%20in%20Hiring%20You"

const navLinks = [
  {
    id: 1,
    name: "Lab",
    link: "/lab",
    icon: ImLab,
  },
  {
    id: 2,
    name: "Medium",
    link: "https://medium.com/@absterrg0",
    icon: FaMediumM,
  },
  {
    id: 3,
    name: "Behance",
    link: "https://www.behance.net/absterrg0",
    icon: SiBehance,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/parv-jain-82169b297",
    icon: FaLinkedinIn,
  },
  {
    id: 5,
    name: "LeetCode",
    link: "https://leetcode.com/u/absterrg0",
    icon: SiLeetcode,
  },
]

const supportText =
  "If you love what I do, whether it’s my work, the content I share, or anything else, please consider supporting me. Your support helps me continue creating, improving, and sharing my work."

const newsText =
  "Subscribe to my newsletter to get updates on my latest projects, blogs, and news. Stay connected and be the first to know what I’m working on!"
export {
  projects,
  packages,
  writings,
  emailLink,
  skills,
  hireText,
  navLinks,
  supportText,
  newsText,
}
