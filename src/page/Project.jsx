import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import  VideoEdit from "../ux/VideoEdit"
import img1 from "../assets/photos/sellcomputer.png";
import img2 from "../assets/photos/project selling lamborghini.png";


const Project = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Website selling Computer",
      description: "Personal profile website.",
      tech: ["React", "Tailwindcss"],
      image: img1,
      color: "from-green-900 to-gray-500",
      link: "https://computer-beta-three.vercel.app/",
    },
    {
      id: 2,
      title: "Website Sell Cars LAMBORGHINI",
      description: "Personal  profile website",
      tech: ["React", "Tailwindcss"],
      image: img2,
      color: "from-purple-500 to-pink-500",
      link: "https://model-lamborghin.vercel.app/",
    },
    {
      id: 3,
      title: "No Website ",
      description: "Modern school website with admin dashboard",
      tech: ["React", "Tailwind CSS"],
      image: "🏫",
      color: "from-blue-500 to-cyan-500",
      link: "#",
    },
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          {/* Loading Spinner */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
          </div>

          {/* Loading Text */}
          <h2 className="text-white text-2xl font-bold mb-4">
            Loading Projects<span className="animate-pulse">...</span>
          </h2>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Percentage */}
          <p className="text-gray-400 mt-3 font-mono">{progress}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen from-gray-900 via-black to-gray-900 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Project
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Showcasing a selection of projects that reflect my skills,
            creativity, and passion for building meaningful digital experiences.
          </p>
        </div>
        {/* Project Website  */}
        <div className=" py-2 ">
          <div className="text-xl font-bold  text-center py-2 font-serif border-gray-600 border-2 bg-gray-800 ">
            <h1>Website</h1>
          </div>
        </div>
        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative  bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
            >
              {/* Project Preview/Image */}
              <div
                className={`relative h-59 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
              >
                {/* Mockup Window */}
                <div className="w-11/12 overflow-hidden h-5/6  bg-gray-900 rounded-lg border-2 border-gray-700 shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  <div className="bg-gray-800 h-6 rounded-t-lg flex items-center overflow-hidden gap-1.5 px-2 border-b border-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-center   w-full h-auto text-4xl">
                    <img src={project.image} alt="" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Link to={project.link}>
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-gray-100">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5 ">
                <h3 className="text-white font-bold  text-lg mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i}>
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600/50">
                        {" "}
                        {tech}
                      </span>
                    </span>
                  ))}
                  <Link
                    to={project.link}
                    className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600/50"
                  >
                    View Project
                  </Link>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        {/* Project Website  */}
        <div className=" py-2 ">
          <div className="text-xl font-bold  text-center py-2 font-serif border-gray-600 border-2 bg-gray-800 ">
            <h1>Video Edit</h1>
          </div>
        </div>

        {/* Video Grid   */}
       <div>
     <VideoEdit/>      
      </div>
      </div>
    </div>
  );
};

export default Project;
