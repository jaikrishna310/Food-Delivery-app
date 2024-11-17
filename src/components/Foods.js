import React, { useState } from "react";
import { data } from "../data/data.js";

const Foods = () => {
  const [foods, setFoods] = useState(data);

  // filter Type
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   filter price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-orange-600 text-4xl text-center font-bold">
        Top Rated Menu Items
      </h1>
      {/* filter Row */}
      <div className="flex flex-col lg:flex-row justify-between py-10">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700 py-2 ">Filter Type</p>
          <div className="flex flex-wrap justify-start">
            <button
              onClick={() => setFoods(data)}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 m-1 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 m-1 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 m-1 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 m-1 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 m-1 hover:text-white"
            >
              Chickens
            </button>
          </div>
        </div>
        {/* filter Price */}
        <div>
          <p className="font-bold text-gray-700 py-2">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 m-1 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 m-1 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 m-1 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="text-orange-600 border-orange-600 hover:bg-orange-600 m-1 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3 pt-4">
        {foods.map((item, index) => {
          return (
            <div
              key={index}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-t-lg w-full h-[100px]  md:h-[200px] object-cover"
              />
              <div className="flex justify-between px-2 py-4">
                <p className=" text-[12px] md:text-2xl font-bold">
                  {item.name}
                </p>
                <p>
                  <span className="bg-orange-500 text-white rounded-full p-1">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Foods;
