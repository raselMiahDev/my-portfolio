import React, { useState } from "react";
import Card from "./Card";
import ps1 from "../../../assets/image/projectSS/e-learning-platform-one.vercel.app_.png";
import ps2 from "../../../assets/image/projectSS/react-ihadis-test.vercel.app_.png";
import ps3 from "../../../assets/image/projectSS/servey.png";
import Colleagues from "../../../assets/image/projectSS/colluages1.png";
import quickbuym from "../../../assets/image/projectSS/quickbuym.png";
import dashboard from "../../../assets/image/projectSS/dashboard.png";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const ProjectData = [
    {
      id: 1,
      image: Colleagues,
      title: "Colleagues Rating Web Application.",
      description:
        "A modern Colleagues Rating Web Application built using React, TypeScript, and Tailwind CSS. This application allows Google-authenticated users to create a profile, rate their colleagues on various skills and experiences, and report inappropriate ratings.",
      liveLink: "https://colluagesrate.netlify.app/",
      githubLink: "https://github.com/raselMiahDev/colluage-rate-client",
      tecnology: ["react", "fullStack"],
    },
    {
      id: 2,
      image: ps1,
      title: "Learning Managment",
      description:
        "I developed a full-stack e-learning platform using the MERN stack (React.js, Node.js, Express.js, MongoDB) and styled with Tailwind CSS. The platform includes features such as course browsing, user authentication, registration, and enrollment, providing secure access to course content for enrolled users. With a responsive design, the platform ensures a seamless experience across devices, showcasing my ability to build dynamic, scalable web applications.",
      liveLink: "https://e-learning-platform-one.vercel.app",
      githubLink: "https://github.com/raselMiahDev/E-learning-client-c",
      tecnology: "fullStack",
    },
    {
      id: 3,
      image: quickbuym,
      title: "Online e-commerce",
      description:
        "Features: User can see product , add to cart,Order,login,Register and user friendly Interface",
      liveLink: "https://quickbuym.netlify.app/",
      githubLink: "https://github.com/raselMiahDev/quickbuy-e-com",
      tecnology: ["react"],
    },

    {
      id: 4,
      image: ps2,
      title: "Hadis Sikkha-React",
      description:
        "Developed a book reading application using React.js and Tailwind CSS. The app allows users to read books by chapters and pages, offering a clean, responsive interface for an enjoyable reading experience on any device.",
      liveLink: "https://react-ihadis-test.vercel.app",
      githubLink: "https://github.com/raselMiahDev/react-ihadis-test",
      tecnology: ["react"],
    },

    {
      id: 5,
      image: ps3,
      title: "Oline Customer Survey",
      description:
        "Spacific company customer oline feedback servay application.",
      liveLink: "https://enamtrimsltd-mern.netlify.app/",
      githubLink: "https://github.com/raselMiahDev/client-survey",
      tecnology: ["react", "fullStack"],
    },
    {
      id: 6,
      image: dashboard,
      title: "Visualization of dashboard",
      description:
        "A mern stack project that visualizes data using charts and graphs. It provides an interactive dashboard for users to analyze and interpret data effectively.",
      liveLink: "https://visualized-dashboard.netlify.app/",
      githubLink: "https://github.com/rasel3pm/Visualized-Dashboard-client",
      tecnology: ["react", "fullStack"],
    },
  ];

  return (
    <div className="md:px-20 px-5 ">
      <div className="flex justify-center space-x-5">
        <button
          className={`py-2 px-6 rounded ${
            activeTab === "tab1"
              ? "text-[#dbdbdb] bg-[#133955]"
              : "text-gray-600 bg-slate-200"
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          All
        </button>
        <button
          className={`py-2 px-6 rounded ${
            activeTab === "tab2"
              ? "text-[#dbdbdb] bg-[#133955]"
              : "text-gray-600 bg-slate-200"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          React
        </button>
        <button
          className={`py-2 px-6 rounded ${
            activeTab === "tab3"
              ? "text-[#dbdbdb] bg-[#133955]"
              : "text-gray-600 bg-slate-200"
          }`}
          onClick={() => setActiveTab("tab3")}
        >
          Full Stack
        </button>
      </div>

      <div className="py-20">
        {activeTab === "tab1" && (
          <div className="md:grid grid-cols-3 gap-5 ">
            {ProjectData.map((project) => {
              return (
                <Card
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  liveLink={project.liveLink}
                  githubLink={project.githubLink}
                />
              );
            })}
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="md:grid grid-cols-3 gap-5">
            {
              // Filter projects that use "react" in the technology array
              ProjectData.filter((project) =>
                project.tecnology.includes("react")
              ).length > 0 ? (
                ProjectData.filter((project) =>
                  project.tecnology.includes("react")
                ).map((project) => (
                  <Card
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    liveLink={project.liveLink}
                    githubLink={project.githubLink}
                  />
                ))
              ) : (
                <p className="col-span-3 text-center text-gray-500">
                  No Project Found
                </p>
              )
            }
          </div>
        )}

        {activeTab === "tab3" && (
          <div className="md:grid grid-cols-3 gap-5 ">
            {
              ProjectData.filter(project => project.tecnology.includes("fullStack")).length > 0 ? (
                ProjectData.filter((project)=> project.tecnology.includes("fullStack")).map((project)=>(
                  <Card
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  liveLink={project.liveLink}
                  githubLink={project.githubLink}
                />
                ))
              ):(                <p className="col-span-3 text-center text-gray-500">
                No Project Found
              </p>)
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
