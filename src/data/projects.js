import img1 from "../assets/images/ri.png";
import img2 from "../assets/hero.png";

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with payment integration, user auth, and admin dashboard.",
    image: img1,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style project management tool with drag-and-drop and real-time collaboration.",
    image: img2,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather app with 7-day forecast, location search, and animated weather icons.",
    image: img1,
    tags: ["React", "OpenWeather API", "Chart.js", "CSS"],
    category: "frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Social Media API",
    description: "RESTful API for a social network with authentication, posts, comments, and real-time notifications.",
    image: img2,
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "backend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, animated portfolio built with React, Framer Motion, and Tailwind CSS.",
    image: img1,
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time messaging app with rooms, file sharing, typing indicators, and online status.",
    image: img2,
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const categories = ["all", "frontend", "backend", "fullstack"];
