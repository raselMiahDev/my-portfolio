const ProjectCard = ({ image, title, description, liveLink, githubLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full mt-5">
      <div className="relative overflow-hidden group h-64">
        <img
          src={image}
          alt={title}
          className="w-full object-cover transform group-hover:translate-y-[-62%] transition-transform duration-700 ease-in-out"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description.slice(0,120)}...</p>
        <div className="flex justify-between">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#133955] px-5 py-1 text-[#dbdbdb] hover:border-[#133955] hover:border hover:bg-transparent transition duration-300 hover:text-[#133955] rounded"
          >
            Live
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#133955]  px-5 py-1 text-primary rounded hover:bg-[#133955] transition duration-300 hover:text-[#dbdbdb]"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
