import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgcv from "../assets/IMG/photo cv-1-blue.jpg";
import { TypeAnimation } from "react-type-animation";
import cv from "../assets/photos/NOV Phannak-cv.jpg";
import per from "../assets/photos/Persnal photo.jpg";
import work from "../assets/photos/Poster work.jpg";
import photo from "../assets/photos/Photo make project.jpg";
const Home = () => {
  const Profile = [{ id: 1, name: "Look Cv ", Link: "/cv" }];
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
            Loading<span className="animate-pulse">...</span>
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
    <div className="w-full h-auto flex justify-center items-center py-1 md:py-10 lg:px-0 px-  ">
      <div className="grid grid-cols-1 lg:pt-20 md:py-0 sm:py-0  md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        <div className="col-span-1 w-full h-auto  flex justify-center items-center  px-13 md:px-10 lg:px-1  font-bold ">
          <div className="flex flex-col  gap-3 pt-10 md:pt-0 lg:pt-0  ">
            <div className="flex w-full items-center   ">
              <h1 className=" text-xl lg:text-3xl md:text-3xl">Hi, </h1>
              <h1 className=" text-xl lg:text-3xl md:text-3xl px-1">I'm</h1>
              <TypeAnimation
                sequence={["Nov Phannak", 1000, "", 500]}
                wrapper="span"
                speed={50}
                className="text-xl lg:text-3xl md:text-3xl inline-block animate-text-gradient"
                repeat={Infinity}
              />
            </div>
            <h1 className="text-md lg:text-xl md:text-xl">
              I'm a web developer specializing in <br /> building responsive
              websites and modern web applications
            </h1>
            <div className="flex gap-5  items-center pt-5">
              <button
                type="button"
                className=" bg-gradient-to-r hover:text-white from-gray-900 to-white/90   px-6 text-white py-3 rounded-lg font-semibold
                 hover:from-purple-600 hover:to-pink-900 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-[1.02]"
              >
                {Profile.map((item) => (
                  <div key={item.id}>
                    <Link to={item.Link}>
                      <div className="font-bold">{item.name}</div>
                    </Link>
                  </div>
                ))}
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1  flex justify-center items-center   h-auto">
          <div className="w-70">
            <div className=" ">
              <div className="group relative flex justify-center items-center rounded-xl bg-gray-400 hover:scale-102 hover:shadow-2xl hover:shadow-gray-500/25 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                {/* Gradient overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                {/* Profile card overlay */}
                <div className="absolute flex text-center pt-70 text-white z-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl w-66 h-auto py-3 px-3 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div className="flex justify-around items-center">
                      <div className="flex gap-4 font-bold font-serif">
                        <img
                          className="w-[35px] h-[35px] rounded-full border-2 border-white shadow-md transform group-hover:scale-102 transition-transform duration-500"
                          src={imgcv}
                          alt=""
                        />
                        <div className="flex flex-col">
                          <Link
                            to="https://t.me/Nov_Phannak"
                            className="text-[10px] text-gray-800 font-semibold"
                          >
                            @ Nov Phannak
                          </Link>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <h1 className="text-[10px] text-green-600 font-medium">
                              Online
                            </h1>
                          </div>
                        </div>
                      </div>
                      <Link to="https://t.me/Nov_Phannak">
                        <button className="py-2 bg-gradient-to-r hover:text-white from-gray-700 to-white/90 hover:from-gray-500 hover:to-blue-900 px-3 text-[12px] font-serif rounded-lg text-gray-900 shadow-md transform hover:scale-105 hover:shadow-lg transition-all duration-200 active:scale-95">
                          Contact
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Main image with hover effects */}
                <img
                  src={photo}
                  alt="Profile photo"
                  className="rounded-2xl transform group-hover:scale-102 transition-transform duration-500 ease-out"
                />

                {/* Animated border glow effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
