import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profile from "../assests/1.jpg";

const Hero = () => {
  return (
    <div
      name="home"
      className=" w-full  h-[900px] container-div"
    >
      {/* Container  */}
      <div className="flex  flex-col  justify-center  items-center  w-full  h-full">
        <div className="max-w-[1350px] w-full  grid  sm:grid-cols-2   gap-12 px-4">
          <div>
          <p className="   text-blue-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl  font-bond text-black">
          Zacharia  Ndung'u
        </h1>

        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Full Stack Developer{" "}
        </h2>
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
            <img className="w-96 h-96 rounded-full shadow-lg   shadow-[#040c16]  hover:transition-all" src={`${profile}`} alt ="Zacharia Kamau"/>
         </div>
      </div>
      </div>

    </div>
  );
};

export default Hero;
