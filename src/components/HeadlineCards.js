import React from "react";

const HeadlineCards = () => {
  return (
    <div className="container mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute text-white rounded-xl bg-black/50 w-full h-full">
          <p className="font-bold text-2xl px-2 pt-4">
            Ever Morning, Get BFast
          </p>
          <p className="px-2">Through 8/26</p>
          <button className="bg-white text-black border-white mx-2 bottom-4 absolute">
            Order now
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          src="https://images.pexels.com/photos/1717767/pexels-photo-1717767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute text-white rounded-xl bg-black/50 w-full h-full">
          <p className="font-bold text-2xl px-2 pt-4">
            Sun's out, Briyani's Out
          </p>
          <p className="px-2">Through 8/26</p>
          <button className="bg-white text-black border-white mx-2 bottom-4 absolute">
            Order now
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          src="https://images.pexels.com/photos/12842265/pexels-photo-12842265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute text-white rounded-xl bg-black/50 w-full h-full">
          <p className="font-bold text-2xl px-2 pt-4">
            Tea brakes ,Ready Bakes
          </p>
          <p className="px-2">Through 8/26</p>
          <button className="bg-white text-black border-white mx-2 bottom-4 absolute">
            Order now
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          src="https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
