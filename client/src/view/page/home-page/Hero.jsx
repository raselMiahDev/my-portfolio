import React from "react";
import Avater from "../../../assets/image/rasel.jpg";
import BG from "../../../assets/image/cool-background.svg";
import Resume from "../../../assets/Resume of Md Rasel Miah_mern_stack_.pdf"
import SocialLink from "../../components/common/SocialLink";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="py-10 md:py-32"
    >
      <div className="max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:gap-20 gap-2">
          <div className="md:w-[50%] w-full text-center md:text-left">
            <div className="space-y-3">
              <h1 className="text-h2 md:text-h1">Md Rasel Miah</h1>
              <p className="font-light italic">
                Full Stack Web Developer (MERN)
              </p>
              <hr />
              <p className="body">
                I am a dedicated Full Stack Web Developer with three years of
                experience in the MERN stack. I specialize in creating robust,
                scalable, and user-friendly web applications, with a strong focus
                on integrating front-end and back-end functionalities. My skills
                include JavaScript (ES6+), React.js, Node.js, Express.js, and
                MongoDB. I am passionate about delivering high-quality user
                experiences and continuously improving my craft through
                self-learning and collaboration.
              </p>
              <SocialLink/>
              <div>
                <a
                    href={Resume}
                    download="Md Rasel Miah Resume"
                    className="bg-blue-600 px-10 py-3 rounded-lg text-white font-semibold hover:bg-transparent hover:text-blue-600 hover:border transition duration-200"
                  >
                    Download My Resume
                  </a>
              </div>
            </div>
          </div>

          <div>
            <img src={Avater} alt="" width={250} className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
