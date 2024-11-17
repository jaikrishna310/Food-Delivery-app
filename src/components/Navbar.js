import React, { useState } from "react";
import { HiMiniMagnifyingGlass, HiTag, HiMiniBars3 } from "react-icons/hi2";
import { BsCart2, BsFillSave2Fill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import {
  FaTruckFast,
  FaHeartCircleCheck,
  FaWallet,
  FaHandHoldingDroplet,
  FaUserGroup,
} from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" container mx-auto flex justify-between items-center p-4">
      {/*left side  */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <HiMiniBars3 size={25} />
        </div>
        <h1 className="text-sm  sm:text-2xl lg:text-4xl px-2">
          Best <span className="font-bold text-orange-600">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center p-1  bg-gray-200 rounded-full ">
          <p className="bg-black rounded-full text-white p-2 text-[14px]">
            Delivery
          </p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* search inputs */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <HiMiniMagnifyingGlass size={25} />
        <input
          className="bg-transparent w-full focus:outline-none p-2"
          type="text"
          placeholder="search foods"
        />
      </div>
      {/* cart button */}
      <button className="bg-black text-white hidden py-2 md:flex rounded-full">
        <BsCart2 size={20} className="mr-2" /> Cart
      </button>

      {/* mobile menu */}
      {/* overley */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10  top-0 left-0 "></div>
      ) : (
        ""
      )}

      {/* side drawer menu */}
      <div
        className={
          nav
            ? "bg-white top-0 left-0 fixed w-[300px] duration-300 h-screen z-10"
            : "bg-white top-0 left-[-100%] fixed w-[300px] duration-300 h-screen z-10"
        }
      >
        <IoClose
          onClick={() => setNav(!nav)}
          className=" absolute right-4 top-4 cursor-pointer"
          size={30}
        />
        <h1 className="text-2xl  p-4">
          Best <span className="font-bold text-orange-600">Eats</span>
        </h1>

        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-2xl py-4  flex mx-5">
              <FaTruckFast size={30} className="mr-4 text-orange-600" /> Orders
            </li>
            <li className="text-2xl py-4  flex mx-5">
              <FaHeartCircleCheck size={30} className="mr-4 text-orange-600 " />{" "}
              Favorites
            </li>
            <li className="text-2xl py-4  flex mx-5">
              <FaWallet size={30} className="mr-4 text-orange-600" /> Wallet
            </li>
            <li className="text-2xl py-4  flex mx-5">
              <FaHandHoldingDroplet
                size={30}
                className="mr-4 text-orange-600"
              />{" "}
              Help
            </li>
            <li className="text-2xl py-4  flex mx-5">
              <HiTag size={30} className="mr-4 text-orange-600" /> Promotions
            </li>
            <li className="text-2xl py-4  flex mx-5">
              <BsFillSave2Fill size={30} className="mr-4 text-orange-600" />{" "}
              Best one
            </li>
            <li className="text-2xl py-4  flex mx-5">
              <FaUserGroup size={30} className="mr-4 text-orange-600" /> Invite
              Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
