import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink?: string;
  liveLink?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "King Mebel & Furniture",
      description: "Website pemesanan Mebel dan Furniture",
      technologies: ["PHP", "MySQL", "Bootstrap 5"],
      imageUrl: "src/assets/Furniture.png",
      githubLink: "https://github.com/FransZalukhu/Furniture",
    },
    {
      id: 2,
      title: "Ebullience Mart",
      description: "Aplikasi Desktop untuk Manajemen Minimarket",
      technologies: ["Java", "MySQL"],
      imageUrl: "src/assets/EbuMart.png",
      githubLink: "https://github.com/FransZalukhu/tugasakhirPBO",
    },
  ];

  return (
    <div className="w-full px-4 py-16" style={{ backgroundColor: "#F3F3E0" }}>
      <h2
        className="text-4xl font-bold text-center mb-12"
        style={{ color: "#133E87" }}
      >
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-auto max-w-screen-xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 mx-auto"
            style={{ borderColor: "#CBDCEB" }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#133E87" }}
              >
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#CBDCEB] text-[#133E87] text-xs px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F96E2A] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#F96E2A] border-2 border-[#F96E2A] transition duration-300"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
