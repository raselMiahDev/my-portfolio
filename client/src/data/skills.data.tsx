import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub,
  FaBootstrap,
  FaCloud,
  FaServer,
  FaCode,
  FaTools,
  FaShieldAlt,
  FaChartLine
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
  SiFramer,
  SiVite,
  SiWebpack,
  SiNpm,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiPostman,
} from 'react-icons/si';
export const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaReact className="text-3xl" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 90, color: 'text-blue-500' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: 'text-black dark:text-white' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: 'text-blue-600' },
        { name: 'JavaScript', icon: <FaJs />, level: 90, color: 'text-yellow-500' },
        { name: 'Redux', icon: <SiRedux />, level: 85, color: 'text-purple-600' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 95, color: 'text-cyan-500' },
        { name: 'Bootstrap', icon: <FaBootstrap />, level: 85, color: 'text-purple-700' },
        { name: 'Framer Motion', icon: <SiFramer />, level: 75, color: 'text-purple-500' },
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaServer className="text-3xl" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 85, color: 'text-green-600' },
        { name: 'Express.js', icon: <SiExpress />, level: 85, color: 'text-gray-600 dark:text-gray-400' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: 'text-green-600' },
        { name: 'Firebase', icon: <SiFirebase />, level: 80, color: 'text-yellow-500' },
        { name: 'REST API', icon: <FaCloud />, level: 90, color: 'text-blue-500' },
        { name: 'JWT Auth', icon: <FaShieldAlt />, level: 85, color: 'text-yellow-600' },
        {name: 'zod', icon: <FaCode />, level: 75, color: 'text-purple-600' },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <FaTools className="text-3xl" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: 'text-orange-600' },
        { name: 'GitHub', icon: <FaGithub />, level: 90, color: 'text-gray-900 dark:text-white' },
        { name: 'Postman', icon: <SiPostman />, level: 85, color: 'text-orange-600' },
        { name: 'Vercel', icon: <SiVercel />, level: 85, color: 'text-black dark:text-white' },
        { name: 'Netlify', icon: <SiNetlify />, level: 85, color: 'text-blue-500' },
        { name: 'Heroku', icon: <SiHeroku />, level: 75, color: 'text-purple-600' },
        { name: 'NPM/Yarn', icon: <SiNpm />, level: 85, color: 'text-red-600' },
      ]
    },
    {
      title: 'Soft Skills',
      icon: <FaChartLine className="text-3xl" />,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Team Collaboration', icon: '👥', level: 95, color: 'text-blue-500' },
        { name: 'Problem Solving', icon: '🧩', level: 90, color: 'text-green-500' },
        { name: 'Communication', icon: '💬', level: 90, color: 'text-purple-500' },
        { name: 'Time Management', icon: '⏰', level: 85, color: 'text-yellow-500' },
        { name: 'Adaptability', icon: '🔄', level: 90, color: 'text-pink-500' },
        { name: 'Critical Thinking', icon: '🤔', level: 85, color: 'text-indigo-500' },
        { name: 'Leadership', icon: '👑', level: 80, color: 'text-orange-500' },
        { name: 'Creativity', icon: '🎨', level: 90, color: 'text-purple-600' },
        { name: 'Attention to Detail', icon: '🔍', level: 95, color: 'text-blue-600' },
        { name: 'Project Management', icon: '📊', level: 80, color: 'text-green-600' },
      ]
    }
  ];
export const featuredSkills = [
    { name: 'React.js', icon: <FaReact />, color: 'text-blue-500' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-black dark:text-white' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-cyan-500' },
  ];