import { 
  FaRocket,
  FaShieldAlt,
  FaMobile,
} from 'react-icons/fa';
import { featuredSkills,skillCategories } from '../../../data/skills.data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and professional toolkit
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Featured Skills Cloud */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {featuredSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative px-6 py-3 bg-white dark:bg-gray-800 rounded-lg flex items-center space-x-2 transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                  <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 text-white`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className={`text-xl ${skill.color} group-hover:text-white transition-colors duration-300`}>
                          {skill.icon}
                        </span>
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-white group-hover:to-white"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                    {/* Hover Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {skill.level}% Proficiency
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Learning & Growth */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
            <FaRocket className="text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">Always Learning</h4>
            <p className="text-blue-100">
              Currently exploring Web3, AI integration, and advanced animation techniques
            </p>
          </div>

          {/* Best Practices */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
            <FaShieldAlt className="text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">Best Practices</h4>
            <p className="text-purple-100">
              Clean code, responsive design, accessibility, and performance optimization
            </p>
          </div>

          {/* Collaboration */}
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
            <FaMobile className="text-4xl mb-4" />
            <h4 className="text-xl font-bold mb-2">Cross-platform</h4>
            <p className="text-pink-100">
              Experience with responsive web and progressive web applications
            </p>
          </div>
        </div>

        {/* Skill Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">40+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Technologies Mastered</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">2+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-pink-600 dark:text-pink-400">3+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Years Coding</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400">∞</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Learning Continuously</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;