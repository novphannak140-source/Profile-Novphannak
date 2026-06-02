import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`relative lg:w-20 w-17 h-10 rounded-full transition-all duration-500 shadow-lg border-2 ${
        dark ? "bg-slate-800 border-slate-700" : "bg-sky-900 border-sky-500"
      }`}
      aria-label="Toggle dark mode"
    >
      {/* Stars (visible in dark mode) */}
      {dark && (
        <>
          <span className="absolute top-1.5 left-11 text-yellow-300 text-[10px] animate-pulse">
            ★
          </span>
          <span
            className="absolute top-4 left-9 text-yellow-300 text-[6px] animate-pulse"
            style={{ animationDelay: "0.2s" }}
          >
            ★
          </span>
          <span
            className="absolute top-2 left-13 text-yellow-300 text-[5px] animate-pulse"
            style={{ animationDelay: "0.4s" }}
          >
            ★
          </span>
          <span
            className="absolute top-2 left-13 text-yellow-300 text-[5px] animate-pulse"
            style={{ animationDelay: "0.4s" }}
          >
            ★
          </span>
          <span
            className="absolute top-2 left-13 text-yellow-300 text-[5px] animate-pulse"
            style={{ animationDelay: "0.4s" }}
          >
            ★ ★ ★ ★ ★
          </span>
        </>
      )}

      {/* Moon (visible in dark mode) */}
      {dark && (
        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6">
          <div className="relative w-full h-full">
            <div className="absolute inset-0  rounded-full"></div>
          </div>
        </div>
      )}

      {/* Toggle circle */}
      <div
        className={`absolute top-0.5 w-8 h-8 bg-white rounded-full shadow-md transition-all duration-500 transform ${
          dark ? "translate-x-1" : "translate-x-7.5 lg:translate-x-11"
        }`}
      >
        {!dark && (
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="w-5 h-5rounded-full "> </div>
          </div>
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;
