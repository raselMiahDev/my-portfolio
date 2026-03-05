import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaCode, FaLaptopCode } from 'react-icons/fa';
import ProgrammingSVG from '../../../utility/ProgrammingSVG';
import Image from '../../../assets/image/rasel.jpg';

const Home = () => {
  // Social media links (replace with your actual URLs)
  const socialLinks = [
    { icon: <FaGithub size={24} />, url: 'https://github.com/raselMiahDev', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/md-rasel-miah-2696062a1', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: <FaFacebook size={24} />, url: 'https://www.facebook.com/Raselkibria11/', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: <FaWhatsapp size={24} />, url: 'https://wa.me/+8801715972211', label: 'WhatsApp', color: 'hover:text-green-500' },
  ];

  return (
    <section id="home" className="min-h-screen pt-20 lg:pt-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-3 animate-fade-in">
              👋 Hello, I'm
            </p>
            
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Md Rasel Miah
              </span>
            </h1>
            
            {/* Title with typing effect animation */}
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <FaLaptopCode className="text-blue-600 dark:text-blue-400 mr-2" size={28} />
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">
                MERN Stack Developer
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0">
              I build robust and scalable web applications using 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> MongoDB, Express.js, React.js, Node.js</span> 
              with <span className="text-purple-600 dark:text-purple-400 font-semibold">TypeScript</span>. 
              Passionate about creating elegant solutions to complex problems.
            </p>
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-300 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Resume Button */}
            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1AyGqar8MK0UbLEsZ8CQaqupdCjg1qOOd/view?usp=sharing"
                download
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Download Resume
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Content - Image with Programming SVG Background */}
          <div className="flex-1 relative order-1 lg:order-2">
            {/* Programming SVG Background */}
            <div className="absolute inset-0 -z-10 animate-float">
              <ProgrammingSVG />
            </div>
            
            {/* Profile Image Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-spin-slow"></div>
              
              {/* Image */}
              <div className="absolute inset-1 rounded-full overflow-hidden bg-white dark:bg-gray-800">
                <img
                  src={Image} // Replace with your actual image
                  alt="Md Rasel Miah"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating code elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg animate-bounce-slow">
                <FaCode className="text-blue-600 text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg animate-bounce-slow delay-100">
                <FaLaptopCode className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;