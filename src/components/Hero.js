import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="home" className=" w-full  h-screen bg-[url('../assests/1.jpg')]">
      {/* Container  */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="   text-blue-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl  font-bond text-white">
          Zacharia Kamau Ndung'u
        </h1>
        <h2 className="teext-4xl sm:text-7xl font-bold text-[#8892b0]">
          I 'am a Full Stack Developer{" "}
        </h2>
        <p className="text-gray-500 py-4 max-w-[600px]">
          I am a full-stack developer specialising in building great web
          applications.
        </p>

        <div>
          <button className="text-white group  border-2 px-6  py-3  my-2 flex items-center hover:bg-blue-500 hover:border-blue-500">
            View My Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
