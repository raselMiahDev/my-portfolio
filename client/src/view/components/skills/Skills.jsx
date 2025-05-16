import { FaHtml5, FaNode } from "react-icons/fa";
import { BiSolidFileCss, BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { SiExpress, SiMongoose, SiRedux } from "react-icons/si";
import Heading from "../common/Heading";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "JavaScript",
      icon: <IoLogoJavascript size={35} color="#F0DB4F"/>,
    },

    {
      id: 2,
      name: "React Js",
      icon: <GrReactjs size={35} color="#12a3dd"/>,
    },

    {
      id: 3,
      name: "Tailwind Css",
      icon: <RiTailwindCssFill size={35} color="#12a3dd"/>,
    },

    {
      id: 4,
      name: "Node Js",
      icon: <FaNode size={35} color="#RRGGBB"/>,
    },
    {
      id: 5,
      name: "Express Js",
      icon: <SiExpress size={35} color="#RRGGBB"/>,
    },
    {
      id: 6,
      name: "Mongodb",
      icon: <BiLogoMongodb size={35} color="#4DB33D"/>,
    },
    {
      id: 7,
      name: "Mongoose",
      icon: <SiMongoose size={35} color="#RRGGBB"/>,
    },
    {
      id: 8,
      name: "Redux",
      icon: <SiRedux size={35} color="#764abc"/>,
    },
    {
      id: 9,
      name: "MySQL",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width="35" height="35"/>,
    },
    {
      id: 10,
      name: "TypeScript",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="35" height="35"/>,
    },
    {
      id: 11,
      name: "Postman",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" width="35" height="35"/>,
    },
    {
      id: 12,
      name: "Git",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="35" height="35"/>,
    },
    {
      id: 13,
      name: "Github",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github" width="35" height="35"/>,
    },

    {
      id: 16,
      name: "Figma",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" width="35" height="35"/>,
    },
    {
      id: 17,
      name: "Canva",
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Canva" width="35" height="35"/>,
    },
  ];



  return (
    <div className="max-w-screen-xl mx-auto px-10 md:px-24 md:py-10">
          <Heading title="My Skills"/>

          <div className="grid md:grid-cols-5 grid-cols-1 gap-3 md:gap-5 justify-center items-center">
            {skills.map((item) => {
              return (
                <div className="flex items-center gap-3 border border-green-400 rounded-lg p-3 hover:shadow-lg transition duration-300 cursor-pointer" key={item.id}>
                    <span>{item.icon}</span>
                    <span className="font-light">{item.name}</span>
                </div>
              );
            })}
          </div>
    </div>
  );
};

export default Skills;
