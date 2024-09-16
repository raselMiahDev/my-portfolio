import React, { useState } from "react";
import Card from "./Card";
import ps1 from "../../assets/image/projectSS/e-learning-platform-one.vercel.app_.png"
import ps2 from "../../assets/image/projectSS/react-ihadis-test.vercel.app_.png"

const Tab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const ProjectData =[
    {
      id:1,
      image:ps1,
      title:"Learning Managment",
      description:" I specialize in creating robust, scalable, and user-friendly web applications, with a strong focus on integrating front-end",
      liveLink:"https://e-learning-platform-one.vercel.app",
      githubLink:"" 
    },
    {
      id:2,
      image:ps2,
      title:"Hadis Sikkha-React",
      description:" I specialize in creating robust, scalable, and user-friendly web applications, with a strong focus on integrating front-end",
      liveLink:"https://react-ihadis-test.vercel.app",
      githubLink:"" 
    },
    {
      id:3,
      image:ps1,
      title:"Ecomerce",
      description:" I specialize in creating robust, scalable, and user-friendly web applications, with a strong focus on integrating front-end",
      liveLink:"",
      githubLink:"" 
    },
    {
      id:3,
      image:ps1,
      title:"Ecomerce",
      description:" I specialize in creating robust, scalable, and user-friendly web applications, with a strong focus on integrating front-end",
      liveLink:"",
      githubLink:"" 
    }
  ]

  return (
    <div className="md:px-20 px-5 ">
      <div className="flex justify-center">
        <button
          className={`py-2 px-6 rounded ${
            activeTab === "tab1" ? "text-[#dbdbdb] bg-[#133955]" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          All
        </button>
        <button
          className={`py-2 px-6 rounded ${
            activeTab === "tab2" ? "text-[#dbdbdb] bg-[#133955]" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          React
        </button>
        <button
          className={`py-2 px-6 rounded ${
            activeTab === "tab3" ? "text-[#dbdbdb] bg-[#133955]" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("tab3")}
        >
          Full Stack
        </button>
      </div>

      <div className="py-20">
        {activeTab === "tab1" && <div className="md:grid grid-cols-3 gap-5 ">
          {
            ProjectData.map((project)=>{
              return(
                <Card key={project.id} image={project.image

                } title={project.title} description={project.description} liveLink={project.liveLink} githubLink={project.githubLink}/>
              )
            })
          }
          </div>}
        {activeTab === "tab2" && <div className="md:grid grid-cols-3 gap-5 ">
          {
            ProjectData.map((project)=>{
              return(
                <Card key={project.id} image={project.image

                } title={project.title} description={project.description} liveLink={project.liveLink} githubLink={project.githubLink}/>
              )
            })
          }

          </div>}
        {activeTab === "tab3" && <div className="md:grid grid-cols-3 gap-5 ">
          {
            ProjectData.map((project)=>{
              return(
                <Card key={project.id} image={project.image

                } title={project.title} description={project.description} liveLink={project.liveLink} githubLink={project.githubLink}/>
              )
            })
          }
          
          </div>}
      </div>
    </div>
  );
};

export default Tab;
