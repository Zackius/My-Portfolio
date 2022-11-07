import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex  justify-between  items-center  px-4  bg-[#0a192f] text-gray-300">
      <div>
        <p>Zack.</p>
      </div>

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Huamber */}
      <div onClick={handleClick} className=" md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col  justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl"> Contact</li>
        </ul>
      </div>
      {/* Social Icons */}
      <div className=" hidden  lg:flex fixed  flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between  items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-blue-500 rounded-lg">
            <a
              className="flex justify-between  items-center  w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={50} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between  items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-[#8e878733] rounded-lg">
            <a
              className="flex justify-between  items-center  w-full text-gray-300"
              href="/"
            >
              Medium
              <FaMedium size={50} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between  items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-[#fff] rounded-lg">
            <a
              className="flex justify-between  items-center  w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={50} />
            </a>
          </li>
          <li className="w-[160px] h-[60px]  flex  justify-between   items-center  ml-[-100px]  hover:ml-[-10px] duration-300 bg-[#4eefed] rounded-lg">
            <a
              className="flex justify-between  items-center  w-full text-gray-300"
              href="/"
            >
              Twitter <FaTwitter size={50} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
