import React from "react";

const AboutUs = () => {
  return (
    <div className="rounded-2xl p-5 mb-10">
      <div className="container mx-auto rounded-3xl text-white bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="py-16 lg:py-18">
          <h2 className="text-center text-3xl lg:text-5xl font-bold">
            Amazing Foods, Exciting Offers!
          </h2>
          <p className="lg:w-1/2 text-center mx-auto mt-5">
            Ready to order now
          </p>
          <div className="flex mt-5">
            <button className="mx-auto bg-white text-black p-2 px-3 rounded-2xl font-semibold text-lg border-none">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
