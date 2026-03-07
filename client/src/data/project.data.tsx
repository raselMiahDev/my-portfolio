import {Project1,Project2,Project3,Project4,Project5,Inventory} from "../constant/image"

import React, { useState } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaMobile,
  FaShieldAlt,
  FaRocket,
  FaPalette,
  FaChartLine,
  FaArrowRight,
  FaSearch
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs,
  SiTailwindcss, 
  SiRedux, 
  SiMongodb, 
  SiExpress,
  SiFirebase,
  SiJest,
  SiDocker,
  SiGraphql,
  SiFramer,
  SiVite,
  SiPostgresql,
  SiPrisma,
  SiTrpc,
  SiRedis,
  SiStorybook
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';


export const projects = [
     {
    id: 1,
    title: "Inventory Management System",
    description: "A comprehensive inventory management solution with real-time stock tracking, supplier management, order processing, and sales analytics. Features include product categorization, low stock alerts, barcode scanning, purchase order management, invoice generation, and role-based access control. Built for small to medium businesses to streamline their inventory operations.",
    image: Inventory,
    technologies: [
      { name: 'React', icon: <FaReact />, color: 'text-blue-500' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-500' },
      { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
      { name: 'Express', icon: <SiExpress />, color: 'text-gray-600' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
      { name: 'Redux', icon: <SiRedux />, color: 'text-purple-600' },
      { name: 'JWT', icon: <FaShieldAlt />, color: 'text-yellow-600' }
    ],
    category: "fullstack",
    featured: true,
    liveLink: "https://inventory-master-client.vercel.app/auth/login",
    githubLink: "https://github.com/raselMiahDev/inventory-master-client",
    duration: "3 months",
    role: "Full Stack Developer"
  },
    {
      id: 2,
      title: "Colleagues Rating Web Application.",
      description: "A full-stack web application for rating and reviewing colleagues. Features include user authentication, rating submission, and detailed analytics.",
      image: Project1,
      technologies: [
        { name: 'React', icon: <FaReact />, color: 'text-blue-500' },
        { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-500' },
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
        { name: 'Redux', icon: <SiRedux />, color: 'text-purple-600' }
      ],
      category: "fullstack",
      featured: true,
      liveLink: "https://colluagesrate.netlify.app/",
      githubLink: "https://github.com/raselMiahDev/colluage-rate-client",
      duration: "3 months",
      role: "Lead Developer"
    },
{
  id: 3,
  title: "EduLearn - Online Learning Platform",
  description: "Interactive e-learning platform with video courses, quizzes, progress tracking, and certification. Includes student dashboard, instructor panel, payment integration, and real-time discussion forums.",
  image: Project2,
  technologies: [
    { name: 'React', icon: <FaReact />, color: 'text-blue-500' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-500' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
    { name: 'Redux', icon: <SiRedux />, color: 'text-purple-600' }
  ],
  category: "fullstack",
  featured: false,
  liveLink: "https://edulearn-demo.vercel.app",
  githubLink: "https://github.com/yourusername/edulearn",
  duration: "5 months",
  role: "Full Stack Developer"
},
    {
      id: 4,
      title: "Online e-commerce Store",
      description: "Comprehensive social media analytics dashboard with real-time data visualization, competitor analysis, sentiment analysis, and automated reporting. Supports multiple platform integration.",
      image: Project3,
      technologies: [
        { name: 'React', icon: <FaReact />, color: 'text-blue-500' },
        { name: 'D3.js', icon: <FaChartLine />, color: 'text-orange-500' },
        { name: 'Express', icon: <SiExpress />, color: 'text-gray-600' },
        { name: 'Redis', icon: <SiRedis />, color: 'text-red-600' },
      ],
      category: "fullstack",
      featured: false,
      liveLink: "https://quickbuym.netlify.app/",
      githubLink: "https://github.com/raselMiahDev/quickbuy-e-com",
      duration: "5 months",
      role: "Frontend Developer"
    },
    {
      id: 5,
      title: "Online Hadis Sikkha",
      description: "Developed a book reading application using React.js and Tailwind CSS. The app allows users to read books by chapters and manage their reading progress.",
      image: Project4,
      technologies: [
        { name: 'React', icon: <FaReact />, color: 'text-blue-500' },
        { name: 'Firebase', icon: <SiFirebase />, color: 'text-yellow-500' },
        { name: 'WebRTC', icon: <FaMobile />, color: 'text-blue-400' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-500' },
        { name: 'Jest', icon: <SiJest />, color: 'text-red-600' },
        { name: 'Storybook', icon: <SiStorybook />, color: 'text-pink-600' }
      ],
      category: "frontend",
      featured: false,
      liveLink: "https://react-ihadis-test.vercel.app",
      githubLink: "https://github.com/raselMiahDev/react-ihadis-test",
      duration: "6 months",
      role: "Lead Frontend Developer"
    },
    {
      id: 6,
      title: "Online Customer Survey",
      description: "Real-time cryptocurrency portfolio tracker with price alerts, transaction history, profit/loss calculations, and DeFi integration. Supports 1000+ cryptocurrencies.",
      image: Project5,
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-black dark:text-white' },
        { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
        { name: 'WebSocket', icon: <FaDatabase />, color: 'text-purple-600' },
      ],
      category: "fullstack",
      featured: false,
      liveLink: "https://enamtrimsltd-mern.netlify.app/",
      githubLink: "https://github.com/raselMiahDev/client-survey",
      duration: "3 months",
      role: "Full Stack Developer"
    }
]