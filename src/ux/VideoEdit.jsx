import { useState } from "react";

import Stronger from "../assets/video/Stronger.mp4";
import Walk from "../assets/video/Walk.mp4";
import Start from "../assets/video/Start.mp4";
import Morning from "../assets/video/Morning.mp4";

function VideoEdit() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Stronger",
      description: "Video Cinematic Part 1",
      tech: ["DaVinci Resolve", "Premiere Pro"],
      video: Stronger,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title:
        "Walking alone doesn't make you lonely, it helps you feel better about everything around you.",
      description: "Video Cinematic Part 2",
      tech: ["DaVinci Resolve", "Premiere Pro"],
      video: Walk,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Don't be afraid to start.",
      description: "Video Cinematic Part 3",
      tech: ["DaVinci Resolve", "Premiere Pro"],
      video: Start,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "My Morning 🍃✨🌞",
      description: "Video Cinematic Part 4",
      tech: ["DaVinci Resolve", "Premiere Pro"],
      video: Morning,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <>
      {/* Video Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            {/* Video Preview */}
            <div
              className={`relative h-64 bg-gradient-to-br ${video.color} flex items-center justify-center overflow-hidden`}
            >
              <div className="w-full h-full bg-gray-900 overflow-hidden">
                {/* Browser Header */}
                <div className="bg-gray-800 h-6 flex items-center gap-2 px-3 border-b border-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                {/* Video */}
                <video
                  className="w-full h-[calc(100%-24px)] object-cover cursor-pointer"
                  src={video.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  onClick={() => setSelectedVideo(video.video)}
                />
              </div>

              {/* Play Button */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"
                onClick={() => setSelectedVideo(video.video)}
              >
                <div className="bg-black/60 backdrop-blur-md rounded-full p-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-white font-bold text-lg mb-2">
                {video.title}
              </h3>

              <p className="text-gray-400 text-sm mb-3">
                {video.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {video.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Corner Effect */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* YouTube Style Video Popup */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-red-500"
            >
              ✕
            </button>

            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default VideoEdit;