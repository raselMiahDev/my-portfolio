import { FaHtml5, FaNode } from "react-icons/fa";
import { BiSolidFileCss, BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { SiExpress, SiMongoose, SiRedux } from "react-icons/si";
import Heading from "../Heading";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "Html",
      icon: <FaHtml5 size={35} color="#f06529"/>,// 
    },
    {
      id: 2,
      name: "Css",
      icon: <BiSolidFileCss size={35} color="#RRGGBB"/>,
    },
    {
      id: 3,
      name: "Tailwind Css",
      icon: <RiTailwindCssFill size={35} color="#12a3dd"/>,
    },
    {
      id: 4,
      name: "JavaScript",
      icon: <IoLogoJavascript size={35} color="#F0DB4F"/>,
    },
    {
      id: 5,
      name: "React Js",
      icon: <GrReactjs size={35} color="#12a3dd"/>,
    },
    {
      id: 6,
      name: "Node Js",
      icon: <FaNode size={35} color="#RRGGBB"/>,
    },
    {
      id: 7,
      name: "Express Js",
      icon: <SiExpress size={35} color="#RRGGBB"/>,
    },
    {
      id: 8,
      name: "Mongodb",
      icon: <BiLogoMongodb size={35} color="#4DB33D"/>,
    },
    {
      id: 9,
      name: "Mongoose",
      icon: <SiMongoose size={35} color="#RRGGBB"/>,
    },
    {
      id: 10,
      name: "Redux",
      icon: <SiRedux size={35} color="#764abc"/>,
    },
  ];



  return (
    <div className="max-w-screen-xl mx-auto px-14 md:px-24 md:py-10">
          <Heading title="My Skills"/>

          <div className="grid md:grid-cols-5 grid-cols-2 gap-5 justify-center items-center">
            {skills.map((item) => {
              return (
                <div className="border border-green-400 rounded-lg p-3 hover:shadow-lg transition duration-300 cursor-pointer" key={item.id}>
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
