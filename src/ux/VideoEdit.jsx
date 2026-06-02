import Stronger from "../assets/video/Stronger.mp4";
import Walk from "../assets/video/Walk.mp4";
import Start from "../assets/video/Start.mp4";

function VideoEdit() {
  const videos = [
    {
      id: 1,
      title: " Stronger",
      description: "Video Cenematic Part 1, lern Edit Video",
      tech: ["DaVinci Resolve", "Premiere Pro"],
      video: Stronger,
    },
    {
      id: 2,
      title: " Walk",
      description: "Video Cenematic Part 1, lern Edit Video",
      tech: ["DaVinci Resolve", "Premiere Pro"],
      video: Walk,
    },
    {
      id: 3,
      title: " Start",
      description: "Video Cenematic Part 1, lern Edit Video",
      tech: ["DaVinci Resolve", "Premiere Pro"],
      video: Start,
    },
   
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <div
          key={video.id}
          className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
        >
          {/* Video Preview */}
          <div className="relative h-64 bg-gradient-to-br from-purple-500 to-pink-500 p-4">
            <div className="w-full h-full bg-gray-900 rounded-lg border-2 border-gray-700 overflow-hidden shadow-xl">
              {/* Browser Header */}
              <div className="bg-gray-800 h-6 flex items-center gap-2 px-3 border-b border-gray-700">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>

              {/* Video */}
              <video
                className="w-full h-[calc(100%-24px)] object-cover"
                src={video.video}
                muted
                loop
                controls
              />
            </div>

            {/* Hover Button */}
            
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
  );
}

export default VideoEdit;