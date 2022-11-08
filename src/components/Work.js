import React from "react";
import buildImg from "../assests/build.jpg";

const Work = () => {
  return (
    <div
      name="work"
      className=" w-full md:h-[800px] text-gray-300  bg-[#0a192f]"
    >
      <div>
        <div>
          <p className="text-4xl  fonr-bold inline border-b-4 text-gray-300 border-blue-300">
            Work
          </p>
          <p className="py-6">Check out some of my recent projects </p>
        </div>
        <div
          style={{ backgroundImage: `url(${buildImg})` }}
          className="grid sm:grid-cols-2  md:grid-cols-3  gap-4"
        >
          <div className="shadow-lg  shadow-[#040c16] group  container  rounded-md  flex justfiy-center  items-center mx-auto  content-div">
            <div className="opacity-0  group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white  tracking-wider">
                React js App
              </span>
              <div className="pt-8  text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-600 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
