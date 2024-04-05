import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-1440 bg-primary text-white  p-10 grid grid-cols-4  font-muli  gap-5">
        <div className="hover:text-white transition-colors  duration-300">
          <h2 className="font-robotoSlap text-5xl font-black mb-3">ART</h2>
          <p className="text-base">
            ART is a Contemporary Creative Portfolio theme which can be used for
            any digital or creative agency.
          </p>
        </div>
        <div className="hover:text-white transition-colors duration-300">
          <h2 className="text-3xl mb-6">Our Service</h2>
          <div className="flex flex-col gap-4">
            <p>Selling Arts</p>
            <p>View Arts</p>
            <p>Show your Arts</p>
          </div>
        </div>
        <div className="hover:text-white transition-colors duration-300">
          <h2 className="text-3xl mb-6">Our Company</h2>
          <div className="flex flex-col gap-4">
            <p>Reporting</p>
            <p>Get in Touch</p>
            <p>Management</p>
          </div>
        </div>
        <div className="hover:text-white transition-colors duration-300">
          <h2 className="text-3xl mb-6">Contact Info</h2>
          <div className="flex flex-col gap-2">
            <p>121 Ling St. melbourne VIC 3000,Australia</p>
            <p>(BBB)-123-45678</p>
            <p>Info@xample.com</p>
          </div>
          <div class="my-4 sm:flex sm:flex-row sm:justify-evenly">
            <input
              class=" block w-full px-4 py-3 mt-3 text-gray-800 placeholder-gray-500 bg-white border border-gray-300 rounded-md appearance-none sm:max-w-xs focus:outline-none focus:ring focus:ring-blue-50 focus:border-blue-300"
              type="email"
              placeholder="Enter your email"
              
            />
            <button onClick={() => window.location.href="/subscribe"}class="bg-blue-300 hover:bg-blue-200 block w-full py-3 mt-3 font-bold tracking-wide rounded shadow sm:ml-3 md:w-52 text-gray-900 focus">
              <span class="block ">Subscribe</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
