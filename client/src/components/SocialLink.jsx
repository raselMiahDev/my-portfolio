import React from "react";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const SocialLink = () => {
  return (
    <div className="flex gap-5 pb-5 justify-center md:justify-start">
      <div className="border rounded-full p-2 hover:bg-blue-500 hover:text-white transition duration-300">
        <a href="https://www.facebook.com/Raselkibria11/" target="_blank" rel="noopener noreferrer">
          <BiLogoFacebook size={30} />
        </a>
      </div>

      <div className="border rounded-full p-2 hover:bg-blue-500 hover:text-white transition duration-300">
        <a href="https://www.linkedin.com/in/md-rasel-miah-2696062a1/" target="_blank" rel="noopener noreferrer">
          <BiLogoLinkedin size={30} />
        </a>
      </div>

      <div className="border rounded-full p-2 hover:bg-blue-500 hover:text-white transition duration-300">
        <a href="https://github.com/raselMiahDev" target="_blank" rel="noopener noreferrer">
          <BiLogoGithub size={30} />
        </a>
      </div>
    </div>
  );
};

export default SocialLink;
