import React from "react";
import { categories } from "../data/data";

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-orange-600 text-4xl text-center font-bold">
        Top Rated Menu Categories
      </h1>
      {/* categories display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 ">
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-2 items-center flex justify-between"
            >
              <h2 className="font-bold text-[12px] md:text-xl">{item.name}</h2>
              <img className="w-20" src={item.image} alt={item.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
