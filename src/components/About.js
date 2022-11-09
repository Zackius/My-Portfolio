import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-[1000px]l h-[600px]  bg-[#0a192f] text-gray-300"
    >
      <div className="flex  flex-col  justify-center  items-center  w-full  h-full">
        <div className="max-w-[1000px]  w-full  grid  grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-300">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px]  w-full  grid  sm:grid-cols-2   gap-8 px-2">
          <div className="sm:text-right  text-4xl  font-bold">
            <p>
              Hi, nice to see you here. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am a performance-driven person with vast experience in creating
              web applications. I am a forward-thinking individual with an
              innovative mindset and a strong conceptual thinker that embraces
              challenges with an analytical and creative approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
