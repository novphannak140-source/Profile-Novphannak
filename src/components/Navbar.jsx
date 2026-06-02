import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import { useState } from "react";
import imgcv from "../assets/photos/NOV Phannak.jpg";
import photo from "../assets/photos/Photo make project.jpg";
import per from "../assets/photos/Persnal photo.jpg";
function Navbar() {
  const [mobail, setMobaile] = useState(false);

  const NavLink = [
    { id: 1, name: "HOME", Link: "/" },
    { id: 2, name: "ABOUT", Link: "about" },
    { id: 3, name: "SKILL", Link: "skil" },
    { id: 4, name: "PROJECT", Link: "project" },
    { id: 5, name: "CONTACET", Link: "contacet" },
  ];

  return (
    <div className="sticky top-0 z-[50] bg-gray-900  ">
      <div className="from-purple-800 sticky top-0 z-[50]shadow-2xl py-2 overflow-hidden sh ">
        <div className="flex justify-between px-7 items-center ">
          {/* Logo */}
          <div className="">
            <Link to="/" className="font-bold">
              <img
                className="w-[50px] h-[50px] rounded-full border-2  border-white shadow-md transform group-hover:scale-102 transition-transform duration-500"
                src={imgcv}
                alt=""
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="flex gap-4 md:gap-5 lg:gap-10">
              {NavLink.map((item) => (
                <div key={item.id} className="relative group">
                  <Link
                    to={item.Link}
                    className="relative py-2 px-1 text-md text-white font-medium transition-colors duration-400 hover:text-blue-500"
                  >
                    {item.name}

                    {/* Animated underline */}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dark Mode + Mobile Menu Button */}
          <div className="flex gap-4">
            <DarkMode />
            <div
              className="block lg:hidden cursor-pointer transition-all duration-500"
              onClick={() => setMobaile(!mobail)}
            >
              <div className="flex items-center text-3xl bg-gradient-to-r  hover:text-white/50 from-gray-900 to-white/50  hover:from-purple-600 hover:to-pink-900  p-1 transition-all duration-500  rounded-md">
                <ion-icon name={mobail ? "close" : "menu"}></ion-icon>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed z-50 top-16 left-0 w-80 md:w-150 bg-gray-900 py-2  shadow-lg rounded-e-md  via-slate-800k text-white h-screen text-lg transition-all duration-500 ease-in-out transform ${
              mobail
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col gap-9 py-5 ">
              {NavLink.map((item) => (
                <div key={item.id} className=" pl-7">
                  <Link
                    className="bg-amber-300 "
                    to={item.Link}
                    onClick={() => setMobaile(false)}
                  >
                    <div className=" py-2">{item.name}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
