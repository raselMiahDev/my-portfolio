import { 
  FaHeart,
  FaArrowUp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb,
  SiExpress,
} from 'react-icons/si';
import {socialLinks} from "../../../data/social.link.data"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Quick navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];


  // Tech stack for footer
  const techStack = [
    { icon: <FaReact />, name: 'React', color: 'text-blue-500' },
    { icon: <SiTypescript />, name: 'TypeScript', color: 'text-blue-600' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-cyan-500' },
    { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-600' },
    { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-600' },
    { icon: <SiExpress />, name: 'Express', color: 'text-gray-600 dark:text-gray-400' },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Wave SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -mt-1">
        <svg
          className="relative block w-full h-8 md:h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-50 dark:fill-gray-800"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Md Rasel Miah
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              MERN Stack Developer passionate about creating beautiful, responsive, and user-friendly web applications with modern technologies.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="group relative"
                  title={tech.name}
                >
                  <div className={`text-2xl ${tech.color} hover:scale-125 transition-transform duration-300 cursor-pointer`}>
                    {tech.icon}
                  </div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center">
              <span className="w-1 h-5 bg-blue-500 rounded-full mr-2"></span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center">
              <span className="w-1 h-5 bg-purple-500 rounded-full mr-2"></span>
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-300">
                <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-sm">Tangail, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <FaPhoneAlt className="text-purple-400 flex-shrink-0" />
                <a href="tel:+8801715972211" className="text-sm hover:text-purple-400 transition-colors duration-300">
                  +880 1715-972211
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <FaEnvelope className="text-purple-400 flex-shrink-0" />
                <a href="mailto:raselmiahdev@gmail.com" className="text-sm hover:text-purple-400 transition-colors duration-300">
                  raselmiahdev@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter/Updates */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center">
              <span className="w-1 h-5 bg-green-500 rounded-full mr-2"></span>
              Stay Updated
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get updates on my latest projects and posts.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group relative w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="group-hover:animate-bounce" />
            </button>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p className="flex items-center">
              © {currentYear} Md Rasel Miah. All rights reserved.
            </p>
            <p className="flex items-center mt-2 md:mt-0">
              Built with 
              <FaHeart className="text-red-500 mx-1 animate-pulse" /> 
              using 
              <FaReact className="text-blue-500 ml-1 mr-1" /> 
              React & 
              <SiTailwindcss className="text-cyan-500 ml-1" /> 
              Tailwind
            </p>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Cookie Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Sitemap</a>
          </div>

          {/* Made with love note */}
          <p className="text-center text-xs text-gray-600 mt-6">
            Designed and developed with ❤️ in Bangladesh
          </p>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="5" fill="white" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;