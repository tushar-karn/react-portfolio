import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";
import PROJECT_IMG_7 from "../assets/images/project-7.png";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 70, color: "bg-blue-500" },
      { name: "Laravel", level: 50, color: "bg-blue-600" },
      { name: "HTML", level: 77, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 55, color: "bg-cyan-500" },
      { name: "JavaScript", level: 60, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 70, color: "bg-green-500" },
      { name: "Express.js", level: 75, color: "bg-gray-700" },
      { name: "Python", level: 60, color: "bg-yellow-500" },
      { name: "Docker", level: 60, color: "bg-pink-600" },
      { name: "REST APIs", level: 70, color: "bg-orange-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 60, color: "bg-green-600" },
      { name: "MySQL", level: 70, color: "bg-blue-700" },
      { name: "Redis", level: 50, color: "bg-red-500" },
      { name: "AWS S3", level: 55, color: "bg-indigo-600" },
      { name: "Firebase", level: 45, color: "bg-yellow-600" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Google Cloud", level: 60, color: "bg-blue-600" },
      { name: "AWS", level: 60, color: "bg-orange-600" },
      { name: "Vercel", level: 90, color: "bg-gray-900" },
      { name: "Git", level: 95, color: "bg-orange-700" },
      { name: "CI/CD", level: 75, color: "bg-purple-600" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Vite",
  "Express",
  "MongoDb",
  "Figma",
  "React",
  "Notion",
  "Java",
];

export const STATS = [
  { number: "5+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "10+", label: "Technologies" },
  { number: "5+", label: "Team Collaboration" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory management.",
    image: PROJECT_IMG_1,
    tags: ["React", "Tailwind", "Framer motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team chat, and advanced analytics dashboard.",
    image: PROJECT_IMG_3,
    tags: ["React.js", "Express.js", "Node.js", "MongoDb"],
    liveUrl: "https://taskmanagerfrontend-m2j1.onrender.com/",
    githubUrl: "https://github.com/tushar-karn/TaskManager",
    featured: true,
    category: "Web App",
  },

  {
    id: 3,
    title: "Expense Tracker App",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and the ability to export data in Excel format.",
    image: PROJECT_IMG_6,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDb"],
    liveUrl: "https://youtu.be/PQnbtnsYUho",
    githubUrl: "#",
    featured: true,
    category: "Web App",
  },

  // {
  //   id: 7,
  //   title: "Polling App",
  //   description:
  //     "Polling app with features like user authentication, creating polls, voting, bookmarking, closing polls, and managing bookmarked or voted polls. Perfect for mastering MERN stack development!",
  //   image: PROJECT_IMG_7,
  //   tags: ["React", "Framer Motion", "Tailwind", "Vercel"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  //   category: "Frontend",
  // },
];

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with creating digital experiences.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "Independent Full Stack Developer",
    company: "Self-Initiated",
    description:
      "Started building full-stack applications independently using the MERN stack. Focused on hands-on learning through real-world projects and continuous skill development.",
    icon: Rocket,
    color: "bg-orange-500",
  },

  {
    year: "2024",
    title: "Remote Work",
    company: "Outlier AI",
    description:
      "Worked as a Math expert training AI models by evaluating and generating math content. Contributed remotely to multiple high-quality assessment and feedback projects.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  
  {
    year: "2022",
    title: "Computer Science Student",
    company: "Lovely Professional University",
    description:
      "Final-year student specializing in web technologies and software engineering. Currently leading the final year project team with a focus on real-world applications.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

export const SOCIAL_LINKS = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/tushar-karn",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/tusharkarn/",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10",
    },
    {
      name: "Twitter",
      icon: FiTwitter,
      url: "https://x.com/TusharKarnLive",
      color: "hover:text-sky-400",
      bgColor: "hover:bg-sky-500/10",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:contact@tushar.live",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-500/10",
    },
  ];

  export const CONTACT_INFO = [
    {
      icon: MapPin,
      label: "Location",
      value: "Jalandhar Punjab, IN",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@tushar.live",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8797001406",
    },
  ];