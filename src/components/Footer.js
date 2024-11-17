import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto px-4">
      <footer className="text-white  rounded-2xl bg-orange-600">
        <div className="flex flex-wrap py-8">
          <div className="p-5 lg:p-10 w-full md:w-1/3">
            <h2 className="font-extrabold text-white text-2xl">About Us</h2>
            <p className="text-white mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum vero qui quae dolore.
            </p>
          </div>
          <div className="p-5 lg:p-10 w-full md:w-1/3">
            <h2 className="font-extrabold text-2xl">Best Eats</h2>
            <p className="text-white mt-3">
              Order Online
              <br />
              Get Offers <br />
              Check Delivery <br />
              Pin-000000
            </p>
          </div>
          <div className="p-5 lg:p-10 w-full md:w-1/3">
            <h2 className="font-extrabold text-2xl">Inqurires</h2>
            <p className="text-white mt-3">
              <a href="tel:+91000000000">000-000-000</a>
              <br />
              <a href="mailto:contact@gmail.com">contact@gmail.com</a>
            </p>
            <button className="mx-auto mt-5 bg-white text-black p-2 px-3 rounded-2xl font-semibold text-md border-none">
              Order Now
            </button>
          </div>
        </div>
        <div className="flex mt-5"></div>

        <div className="text-center text-white border-t border-white pt-3">
          All Rights Reserved &copy; 2024
        </div>
      </footer>
    </div>
  );
};

export default Footer;
