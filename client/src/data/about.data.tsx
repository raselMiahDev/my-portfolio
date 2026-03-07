import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaGitAlt,
  FaFigma,
  FaCode,
  FaRocket,
  FaMobile,
  FaPalette,
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiRedux, 
  SiNextdotjs,
  SiVite,
} from 'react-icons/si';


  // Frontend skills with proficiency levels
 export const frontendSkills = [
    { name: 'React.js', icon: <FaReact />, level: 90, color: 'text-blue-500' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: 'text-blue-600' },
    { name: 'JavaScript', icon: <FaJs />, level: 90, color: 'text-yellow-500' },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 80, color: 'text-black dark:text-white' },
    { name: 'Redux', icon: <SiRedux />, level: 85, color: 'text-purple-600' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 95, color: 'text-cyan-500' },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: 'text-orange-600' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: 'text-blue-600' },
    { name: 'Bootstrap', icon: <FaBootstrap />, level: 85, color: 'text-purple-700' },
    { name: 'Git', icon: <FaGitAlt />, level: 80, color: 'text-orange-600' },
    { name: 'Figma', icon: <FaFigma />, level: 75, color: 'text-pink-600' },
    { name: 'Vite', icon: <SiVite />, level: 85, color: 'text-purple-500' },
  ];

  // Frontend specializations
 export const specializations = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Performance Optimization',
      description: 'Building fast, responsive web applications with optimal loading times and smooth interactions'
    },
    {
      icon: <FaMobile className="text-3xl" />,
      title: 'Responsive Design',
      description: 'Creating seamless experiences across all devices with mobile-first approach'
    },
    {
      icon: <FaPalette className="text-3xl" />,
      title: 'Modern UI/UX',
      description: 'Crafting beautiful, intuitive interfaces with attention to detail and user experience'
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices and design patterns'
    }
  ];

  // Tools & technologies
export const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Chrome DevTools', icon: '🔧' },
    { name: 'Postman', icon: '📮' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Vercel', icon: '▲' },
    { name: 'Netlify', icon: '☁️' },
  ];