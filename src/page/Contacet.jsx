import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contacet = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            Loading Contact<span className="animate-pulse">...</span>
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
    <div className="min-h-auto from-gray-900 via-black to-gray-900 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Contact & Chat
          </h2>
          <p className="text-gray-400">
            Get in touch with me or chat in real-time
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-1 gap-6">
          {/* Chat Room Section */}

          {/* Contact Form Section */}
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:border-gray-600/50 transition-all duration-300">
            <div className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-gray-300 font-medium mb-2 text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name..."
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 font-medium mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email..."
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 font-medium mb-2 text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <Link to="https://t.me/Nov_Phannak">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-[1.02]">
                  Send
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacet;
