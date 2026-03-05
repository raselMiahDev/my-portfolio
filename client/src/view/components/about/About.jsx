import React from 'react';
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
  FaUsers
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiRedux, 
  SiNextdotjs,
  SiVite,
  SiJest,
  SiStorybook,
  SiFramer,
  SiAdobexd
} from 'react-icons/si';

const About = () => {
  // Frontend skills with proficiency levels
  const frontendSkills = [
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
  const specializations = [
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
  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Chrome DevTools', icon: '🔧' },
    { name: 'Postman', icon: '📮' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Vercel', icon: '▲' },
    { name: 'Netlify', icon: '☁️' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Frontend Developer passionate about creating beautiful, responsive, and user-friendly web applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Personal Info & Stats */}
          <div className="space-y-8">
            {/* Personal Info Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <FaUsers className="mr-3 text-blue-600" />
                Who I Am
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Md Rasel Miah</span>, a Frontend Developer with a passion for creating exceptional digital experiences. I specialize in building modern, responsive web applications using the latest technologies.
                </p>
                <p className="text-lg leading-relaxed">
                  With a strong foundation in <span className="font-semibold">React.js</span> and <span className="font-semibold">TypeScript</span>, I transform designs into fully functional, interactive web applications that provide seamless user experiences across all devices.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 dark:bg-gray-700 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-gray-700 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-pink-50 dark:bg-gray-700 rounded-xl">
                  <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                What I Do Best
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {specializations.map((spec, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:scale-105 transition-transform duration-300">
                    <div className="text-blue-600 dark:text-blue-400 mb-3">{spec.icon}</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{spec.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{spec.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            {/* Frontend Skills with Progress Bars */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <FaCode className="mr-3 text-blue-600" />
                Frontend Expertise
              </h3>
              
              <div className="space-y-5">
                {frontendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Tools I Use
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <span className="text-xl">{tool.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
              <svg className="w-10 h-10 mb-4 opacity-75" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
              </svg>
              <p className="text-xl italic mb-4">
                "Frontend development is not just about writing code, it's about creating experiences that users love and remember."
              </p>
              <p className="font-semibold">- My Development Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;