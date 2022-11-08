import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-[#0a192f] w-full h-[80px] ">
          <div className=" flex   py-8  justify-center  text-white font-bold">
          <BiCopyright size={20} />
        <p className="px-8">
          Zacharia Kamau Ndung'u
        </p>
      </div>
    </div>
  );
};

export default Footer;
