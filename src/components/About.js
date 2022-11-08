import React from "react";


const About = () => {
  return (
    <div name="about " className="w-[1000px]l h-[600px]  bg-[#0a192f] text-gray-300">
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
              Hi, I am Zack, nice to see you here. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default About;
