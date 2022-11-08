import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profile from "../assests/Img.jpg";

const Hero = () => {
  return (
    <div
      name="home"
      className=" w-full  h-[1000px] bg-gradient-to-r from-white via-blue-300  to-gray-300"
    >
      {/* Container  */}
      <div className="flex  flex-col  justify-center  items-center  w-full  h-full">
        <div className="max-w-[1350px] w-full  grid  sm:grid-cols-2   gap-8 px-4">
          <div>
          <p className="   text-blue-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl  font-bond text-black">
          Zacharia Kamau Ndung'u
        </h1>

        <h2 className="teext-4xl sm:text-7xl font-bold text-[#8892b0]">
          I 'am a Full Stack Developer{" "}
        </h2>
        <p className="text-black py-4 max-w-[600px]">
          I am a full-stack developer specialising in building great web
          applications.
        </p>
        <div>
          <button to='about'   className="text-black group  border-2 px-6  py-3  my-2 flex items-center hover:bg-blue-500 hover:border-blue-500">
            View My Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
          </div>
          <div>
            <img className="w-96 h-96 rounded-full" src={`${profile}`} alt ="Zacharia Kamau"/>
         </div>
      </div>
      </div>

    </div>
  );
};

export default Hero;
