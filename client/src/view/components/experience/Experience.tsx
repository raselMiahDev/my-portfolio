import { 
  FaBriefcase, 
  FaMapMarkerAlt,
  FaClipboardList,
  FaAward,
  FaStar,
  FaMedal,
} from 'react-icons/fa';
import {experiences,keySkills,highlights} from "../../../data/experience.data"

const Experience = () => {


  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Over 10 years of expertise in store management, inventory control, and supply chain operations
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </div>

        {/* Experience Timeline - Mobile Optimized */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {/* Experience Items */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot - Hidden on mobile */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-purple-500 rounded-full z-10"></div>
                
                {/* Content Card - Full width on mobile, alternating on desktop */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:ml-0 lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                  
                  {/* Period Badge - Visible on all devices */}
                  <div className="mb-3 sm:mb-4">
                    <span className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${exp.color} text-white shadow-lg`}>
                      {exp.period} {exp.duration !== "Running" && `(${exp.duration})`}
                    </span>
                  </div>

                  {/* Main Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-4 sm:mb-6">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 ${exp.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <div className={`text-transparent bg-gradient-to-br ${exp.color} bg-clip-text text-2xl sm:text-3xl`}>
                          {exp.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Location, Type, Duration */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center bg-gray-50 dark:bg-gray-700 px-2 sm:px-3 py-1 rounded-full">
                        <FaMapMarkerAlt className="mr-1 text-blue-500" size={12} /> 
                        <span className="truncate max-w-[150px] sm:max-w-[200px]">{exp.location}</span>
                      </span>
                      <span className="flex items-center bg-gray-50 dark:bg-gray-700 px-2 sm:px-3 py-1 rounded-full">
                        <FaBriefcase className="mr-1 text-purple-500" size={12} /> {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                        <FaClipboardList className="mr-2 text-blue-500" size={16} />
                        Responsibilities
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                        <FaAward className="mr-2 text-yellow-500" size={16} />
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start bg-gray-50 dark:bg-gray-700 p-2 sm:p-3 rounded-lg">
                            <FaStar className="text-yellow-500 mr-2 flex-shrink-0 mt-0.5" size={10} />
                            <span className="text-xs text-gray-700 dark:text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Skills Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800 dark:text-white px-4">
            Key Skills Gained
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {keySkills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center group">
                <div className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 dark:text-blue-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-1.5 sm:h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 inline-block">
                  {skill.level}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800 dark:text-white px-4">
            Career Highlights
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl p-4 sm:p-6 text-white shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{item.icon}</div>
                <div className="text-xl sm:text-2xl font-bold mb-1">{item.value}</div>
                <div className="text-xs sm:text-sm opacity-90">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 text-white shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
                <FaMedal className="text-4xl sm:text-5xl flex-shrink-0" />
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-1">10+ Years of Excellence</h4>
                  <p className="text-sm sm:text-base text-blue-100">in Store Management & Inventory Control</p>
                </div>
              </div>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>

        {/* Add smooth scroll padding for fixed navbar */}
        <div className="h-2"></div>
      </div>
    </section>
  );
};

export default Experience;