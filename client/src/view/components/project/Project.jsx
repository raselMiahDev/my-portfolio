import React, { useState } from 'react';
import Project1 from "../../../assets/image/projectSS/colluages1.png";
import Project2 from "../../../assets/image/projectSS/elerning.png";
import Project3 from "../../../assets/image/projectSS/quickbuym.png";
import Project4 from "../../../assets/image/projectSS/hadis.png";
import Project5 from "../../../assets/image/projectSS/servey.png";

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

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Project data based on your information
  const projects = [
    {
      id: 1,
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
      id: 2,
      title: "E -Learning Platform",
      description: "Smart task management application with AI-powered prioritization, natural language processing for task creation, and predictive analytics for project timelines. Includes team collaboration features.",
      image: Project2,
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-black dark:text-white' },
        { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-500' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-600' },
        { name: 'Prisma', icon: <SiPrisma />, color: 'text-teal-500' },
        { name: 'tRPC', icon: <SiTrpc />, color: 'text-blue-700' }
      ],
      category: "frontend",
      featured: true,
      liveLink: "https://e-learning-platform-one.vercel.app/",
      githubLink: "https://github.com/raselMiahDev/E-learning-client-c",
      duration: "4 months",
      role: "Full Stack Developer"
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  // Filter projects based on category and search term
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Get featured projects
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing my best work in web development, from frontend designs to full-stack applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center">
            <FaRocket className="mr-3 text-blue-600" />
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Project Links Overlay */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className={`flex items-center space-x-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm ${tech.color}`}
                      >
                        <span>{tech.icon}</span>
                        <span>{tech.name}</span>
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>⏱️ {project.duration}</span>
                    <span>👤 {project.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter */}
          <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Quick Links */}
                <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub size={16} />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h4>
                  {project.featured && (
                    <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className={`flex items-center space-x-1 text-xs ${tech.color}`}
                    >
                      <span>{tech.icon}</span>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 group/btn">
                  View Details
                  <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/raselMiahDev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View All on GitHub
            <FaGithub className="ml-3" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;