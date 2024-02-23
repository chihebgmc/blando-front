import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
const Homme = () => {
  return (
    <div className="bg-black-400 h-full">
      {/* Container for grid and sidebar */}
      <div className="flex flex-wrap md:flex-wrap justify-around">
        {/* Grid of product cards */}
        <div className="w-full md:w-3/4 p-4 justify-center ">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-20 mx-5">
            {/* Repeat this block for each product card */}
            <div className="flex gap-2">
              <div className="bg-yellow-400 sm:w-full max-w-lg mt-0 py-4">
                {/* Product image */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwl3CPwUL07GOD2OiuQ4izJ0aV_55KLhdUy3Fl7PQsnm_JQc7WT6S6rC4mL18Os5FsCyQ&usqp=CAU"
                  alt="Product Name"
                  className="rounded-lg -ml-5"
                />
              </div>
              <div className="animate-bounceY">
      <BiSolidDownArrow className="text-4xl text-yellow-400" />
      </div>
            </div>

            <div className="flex gap-2">
              <div className="bg-yellow-400 sm:w-full mx-auto max-w-lg mt-0 py-4">
                {/* Product image */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwl3CPwUL07GOD2OiuQ4izJ0aV_55KLhdUy3Fl7PQsnm_JQc7WT6S6rC4mL18Os5FsCyQ&usqp=CAU"
                  alt="Product Name"
                  className="rounded-lg -ml-5"
                />
              </div>
              <div className="animate-bounceY">
      <BiSolidDownArrow className="text-4xl text-yellow-400" />
      </div>
            </div>

            <div className="flex gap-2">
              <div className="bg-yellow-400 w-full max-w-lg mt-0 py-4">
                {/* Product image */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwl3CPwUL07GOD2OiuQ4izJ0aV_55KLhdUy3Fl7PQsnm_JQc7WT6S6rC4mL18Os5FsCyQ&usqp=CAU"
                  alt="Product Name"
                  className="rounded-lg -ml-5"
                />
              </div>
              <i className="fa-solid fa-caret-down text-6xl mx-0 text-yellow-400"></i>
            </div>

            <div className="flex gap-2">
              <div className="bg-yellow-400 w-full max-w-lg mt-0 py-4">
                {/* Product image */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwl3CPwUL07GOD2OiuQ4izJ0aV_55KLhdUy3Fl7PQsnm_JQc7WT6S6rC4mL18Os5FsCyQ&usqp=CAU"
                  alt="Product Name"
                  className="rounded-lg -ml-5"
                />
              </div>
              <div className="animate-bounceY">
      <BiSolidDownArrow className="text-4xl text-yellow-400" />
      </div>
            </div>

            <div className="flex gap-2">
              <div className="bg-yellow-400 w-full max-w-lg mt-0 py-4">
                {/* Product image */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwl3CPwUL07GOD2OiuQ4izJ0aV_55KLhdUy3Fl7PQsnm_JQc7WT6S6rC4mL18Os5FsCyQ&usqp=CAU"
                  alt="Product Name"
                  className="rounded-lg -ml-5"
                />
              </div>
              <i className="fa-solid fa-caret-down text-6xl mx-0 text-yellow-400"></i>
            </div>

            <div className="flex gap-2">
              <div className="bg-yellow-400 w-full max-w-lg mt-0 py-4">
                {/* Product image */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwl3CPwUL07GOD2OiuQ4izJ0aV_55KLhdUy3Fl7PQsnm_JQc7WT6S6rC4mL18Os5FsCyQ&usqp=CAU"
                  alt="Product Name"
                  className="rounded-lg -ml-5"
                />
              </div>
              <i className="fa-solid fa-caret-down text-6xl mx-0 text-yellow-400"></i>
            </div>
          </div>
        </div>
        {/* Sidebar for social media icons */}
        <div className="w-full md:w-1/4 p-0 md:flex md:flex-col md:items-end bg-black flex-row items-center justify-center md:justify-end flex md:h-auto h-16">
          <div className="md:w-16 md:h-full h-16 md:h-auto w-full bg-yellow-400 flex md:flex max-md:flex-row flex-col md:items-center items-center justify-around">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/blandoshoestn/"
              className="text-yellow-300 hover:text-yellow-400 rounded-full bg-black p-2 md:my-5 my-0 mx-2"
            >
              <i className="fab fa-facebook-f fa-lg" />
            </a>
            {/* WhatsApp Icon */}
            <a
              href="#"
              className="text-yellow-300 hover:text-yellow-400 rounded-full bg-black p-2 md:my-5 my-0 mx-2"
            >
              <i className="fa-brands fa-whatsapp fa-lg" />
            </a>
            {/* Instagram Icon */}
            <a
              href="#"
              className="text-yellow-300 hover:text-yellow-400 rounded-full bg-black p-2 md:mb-5 md:mt-2 my-0 mx-2"
            >
              <i className="fab fa-instagram fa-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homme;
