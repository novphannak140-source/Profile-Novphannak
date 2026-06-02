import { useState, useEffect } from "react";
import Tailwndcss from "../assets/IMG/icon/Tailwind CSS.png";
import Bootstrap from "../assets/IMG/icon/Bootstrap.png";
import Typescript from "../assets/IMG/icon/TypeScript.png";
import Nodejs from "../assets/IMG/icon/Node.js.png";
import Java from "../assets/IMG/icon/Java.png";
import Javascript from "../assets/IMG/icon/JavaScript.png";
import Html from "../assets/IMG/icon/HTML5.png";
import Css from "../assets/IMG/icon/CSS3.png";
import Git from "../assets/IMG/icon/GitHub.png";
import ReactIcon from "../assets/IMG/icon/React.png";
import C1 from "../assets/IMG/icon/C.png";
import C2 from "../assets/IMG/icon/C++ (CPlusPlus).png";
import C3 from "../assets/IMG/icon/C3 (CSharp).png";
import Vercel from "../assets/IMG/icon/Vercel.png";

const Skil = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const tools = [
    {
      name: "C",
      category: "Language",
      icon: C1,
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "C++",
      category: "Language",
      icon: C2,
      color: "from-blue-700 to-purple-700",
    },
    {
      name: "C#",
      category: "Language",
      icon: C3,
      color: "from-purple-700 to-purple-900",
    },
    {
      name: "HTML5",
      category: "Markup Language",
      icon: Html,
      color: "from-orange-700 to-orange-800",
    },
    {
      name: "CSS3",
      category: "Styling",
      icon: Css,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "JavaScript",
      category: "Language",
      icon: Javascript,
      color: "from-yellow-400 to-yellow-700",
    },
    {
      name: "TypeScript",
      category: "Language",
      icon: Typescript,
      color: "from-blue-800 to-blue-900",
    },
    {
      name: "React JS",
      category: "JavaScript Library",
      icon: ReactIcon,
      color: "from-cyan-800 to-cyan-900",
    },
    {
      name: "Node JS",
      category: "JavaScript Runtime",
      icon: Nodejs,
      color: "from-green-700 to-green-900",
    },
    {
      name: "Java",
      category: "Language",
      icon: Java,
      color: "from-gray-600 to-white",
    },
    {
      name: "Tailwind CSS",
      category: "CSS Framework",
      icon: Tailwndcss,
      color: "from-cyan-900 to-blue",
    },
    {
      name: "Bootstrap",
      category: "Framework",
      icon: Bootstrap,
      color: "from-purple-900 to-purple-900",
    },
    {
      name: "GitHub",
      category: "Repository",
      icon: Git,
      color: "from-gray-500 to-gray-300",
    },
    {
      name: "Vercel",
      category: "Deployment Platform",
      icon: Vercel,
      color: "from-white to-gray-900",
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
            Loading Skills<span className="animate-pulse">...</span>
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
    <div className="min-h-screen from-gray-900 via-black to-gray-900 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Tools & Technologies
          </h2>
          <p className="text-gray-400">My Professional Skills</p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300 p-1.5`}
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm mb-0.5 truncate group-hover:text-purple-400 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-gray-400 text-xs truncate">
                    {tool.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skil;
