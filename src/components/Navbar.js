import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-scroll";
import profile from "../assests/1.jpg";
// import {SiUpwork} from "react-icons/si"

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex  justify-between  items-center  px-4  bg-[#0a192f] text-gray-300">
      <div>
        <img className="w-12 h-12 rounded-full" src={`${profile}`} alt="logo" />
      </div>

      <ul className="hidden md:flex">
        <li className="hover:scale-110">
          <Link to="home" smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li className="hover:scale-110">
          <Link to="about" smooth={true} duration={300}>
            About
          </Link>
        </li>
        <li className="hover:scale-110">
          <Link to="skills" smooth={true} duration={300}>
            Skills
          </Link>
        </li>
        <li className="hover:scale-110">
          <Link to="work" smooth={true} duration={300}>
            Work
          </Link>
        </li>
        <li className="hover:scale-110">
          <Link to="/" smooth={true} duration={300}>
            Blog
          </Link>
        </li>
        <li className="hover:scale-110">
          <Link to="contact" smooth={true} duration={300}>
            Contact
          </Link>
        </li>
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
          <div>
        <img className="w-24 h-24 rounded-full" src={`${profile}`} alt="logo" />
      </div>
        <ul>
        <li className="py-6 text-4xl">
          <Link to="home" smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="about" smooth={true} duration={300}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="skills" smooth={true} duration={300}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="work" smooth={true} duration={300}>
            Work
          </Link>
          </li>
          <li className="py-6 text-4xl">
          <Link to="/" smooth={true} duration={300}>
            Blog
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="contact" smooth={true} duration={300}>
            Contact
          </Link>
          </li>
        </ul>
      </div>
      {/* Social Icons */}
      <div className=" hidden  lg:flex fixed  flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between  items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-blue-700 rounded-lg">
            <a
              className="flex justify-between  items-center  w-full text-gray-300"
              href="https://www.linkedin.com/in/zachary-ndung-u-85023a201/"
            >
              Linkedin <FaLinkedin size={20} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between  items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-[#000000] rounded-lg">
            <a
              className="flex justify-between  items-center  w-full text-gray-300"
              href="https://medium.com/@ndunguzachary"
            >
              Medium
              <FaMedium size={20} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between  items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-[#000000] rounded-lg">
            <a
              className="flex justify-between  items-center  w-full text-gray-300"
              href="https://github.com/Zackius"
            >
              Github <FaGithub size={20} />
            </a>
          </li>
          <li className="w-[160px] h-[60px]  flex  justify-between   items-center  ml-[-100px]  hover:ml-[-10px] duration-300 bg-[#38aedd] rounded-lg">
            <a
              className="flex justify-between  items-center  w-full text-gray-300"
              href="https://mobile.twitter.com/Zack_K_N"
            >
              Twitter <FaTwitter size={20} />
            </a>
          </li>
          {/* <li className="w-[160px] h-[60px]  flex  justify-between   items-center  ml-[-100px]  hover:ml-[-10px] duration-300 bg-[#41b915] rounded-lg">
            <a
              className="flex justify-between  items-center  w-full text-gray-300"
              href="https://www.upwork.com/freelancers/~011065ae8c811d4f58"
            >
              UpWork <SiUpwork size={20} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
