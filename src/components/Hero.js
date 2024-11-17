import React from "react";
import { FaLocationDot, FaTruckFast } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="container mx-auto p-4">
      <div className=" max-h-[500px] relative">
        {/* overley */}
        <div className=" absolute max-h-[500px] w-full h-full text-gray-200 bg-black/55 flex flex-col justify-center">
          <div className="">
            <h1 className="font-bold px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              The <span className="text-orange-500">Best</span>
            </h1>
            <h1 className="font-bold px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Foods <span className="text-orange-500">Delivery</span>
            </h1>
          </div>

          <div className="flex mx-5 mt-5 justify-start ">
            <a
              className=" flex rounded-xl  text-white border-orange-600 bg-orange-600 m-1  mr-5 px-3 py-2"
              href="#region"
            >
              <FaLocationDot size={15} className="mr-1 my-auto" /> Pick Up
            </a>
            <a
              className=" flex rounded-xl bg-black text-white mr-5 py-2 px-3 m-1"
              href="//#region "
            >
              <FaTruckFast size={15} className="mr-2 my-auto" /> Delivery
            </a>
          </div>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
