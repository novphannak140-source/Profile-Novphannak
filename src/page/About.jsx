import { useState, useEffect } from "react";
import cv from "../assets/photos/NOV Phannak-cv.jpg";
const About = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
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
            Loading About<span className="animate-pulse">...</span>
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
    <div>
      <div className="min-h-screen bg-gradient-to-br  flex items-center justify-center p-6">
        <div className="max-w-5xl w-full bg-slate-900/50 backdrop-blur-sm rounded-3xl border-2 border-purple-500/30 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative stars */}
          <div className="absolute top-10 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-40 w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Left Content */}
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Me
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8">
                I'm a 21-year-old frontend developer who is passionate about
                designing and building clean, responsive, and user-friendly
                interfaces. I love turning creative ideas into interactive
                digital experiences that feel smooth and intuitive for users.
                With a strong focus on design details, performance, and
                usability, I aim to create websites and applications that not
                only look modern but also provide meaningful value. I enjoy
                exploring new tools and techniques in frontend development to
                continuously improve my work and bring fresh ideas into every
                project I build.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-1">
                    06<span className="text-purple-400">+</span>
                  </h3>
                  <p className="text-purple-400 font-semibold mb-1">
                    Project Finished
                  </p>
                  <p className="text-gray-400 text-sm">High-quality work.</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-white mb-1">
                    3<span className="text-purple-400">+</span>
                  </h3>
                  <p className="text-purple-400 font-semibold mb-1">
                    Years of Experience,and learning
                  </p>
                  <p className="text-gray-400 text-sm">
                    Continuous learning and growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="flex justify-center items-center md:col-span-1">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-48 h-96 bg-gradient-to-b from-purple-900 to-slate-900 rounded-[2.5rem] border-4 border-purple-500/50 shadow-2xl shadow-purple-500/30 relative overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20"></div>

                  {/* Screen Content */}
                  <div className="absolute inset-3 bg-slate-800 rounded-[2rem] overflow-hidden">
                    <div className="h-full flex flex-col items-center justify-center p-4">
                      {/* Profile Image */}
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 mb-3 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-slate-700 flex items-center  justify-center">
                          <img src={cv} className="w-[100%]" alt="" />
                        </div>
                      </div>

                      {/* Name */}
                      <h4 className="text-white text-xs font-bold mb-1">
                        Nov Phannak
                      </h4>
                      <p className="text-purple-400 text-[10px] mb-4">
                        Frontand Developer
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1 justify-center">
                        <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-full text-[8px]">
                          React
                        </span>
                        <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded-full text-[8px]">
                          Node.js
                        </span>
                        <span className="px-2 py-0.5 bg-green-500/20 text-green-300 rounded-full text-[8px]">
                          TS/C#
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Power Button */}
                  <div className="absolute right-0 top-20 w-1 h-12 bg-purple-600/50 rounded-l"></div>

                  {/* Volume Buttons */}
                  <div className="absolute left-0 top-16 w-1 h-8 bg-purple-600/50 rounded-r"></div>
                  <div className="absolute left-0 top-28 w-1 h-8 bg-purple-600/50 rounded-r"></div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-purple-500/20 blur-2xl -z-10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
