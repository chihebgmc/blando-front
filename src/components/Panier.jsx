import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
const Panier = () => {
  return (
    <div className="bg-black mt-4 min-h-screen flex flex-col items-center flex-wrap">
      {/* Triangle at the top */}
      <div className="animate-bounceY">
      <BiSolidDownArrow className="text-4xl text-yellow-400" />
      </div>
      {/* Product Card */}

      {/* Image and details here */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwl3CPwUL07GOD2OiuQ4izJ0aV_55KLhdUy3Fl7PQsnm_JQc7WT6S6rC4mL18Os5FsCyQ&usqp=CAU"
        alt="Product Name"
        className="rounded-lg h-48 my-4 "
      />

      {/* Summary Items */}
      <div className="flex flex-wrap w-50">
        <div className="flex items-center border-2 border-yellow-400 w-50 md:w-100">
          <BiSolidRightArrow className="text-5xl text-yellow-400 my-4" />
          <span className="text-xl text-yellow-400 px-4 font-bold">Prix</span>
          
        </div>
        <div className="px-8 py-2 w-50 border-2 border-yellow-400 flex items-center justify-center md:w-full">
          <span className="text-xl text-yellow-400 font-bold mx-4">7DT</span>
        </div>
      </div>

      <div className="flex flex-wrap w-50 md:w-full">
        <div className="flex items-center border-2 border-yellow-400 w-50">
          <BiSolidRightArrow className="text-5xl text-yellow-400 my-4" />
          <span className="text-xl text-yellow-400 px-4 font-bold">Livraison</span>
          
        </div>
        <div className="px-8 py-2 w-50 border-2 border-yellow-400 flex items-center justify-center">
          <span className="text-xl text-yellow-400 font-bold mx-4">7DT</span>
        </div>
      </div>

      <div className="flex flex-wrap w-50">
        <div className="flex items-center border-2 border-yellow-400 w-50">
          <BiSolidRightArrow className="text-5xl text-yellow-400 my-4" />
          <span className="text-xl text-yellow-400 px-4 font-bold">Totale Facture</span>
          
        </div>
        <div className="px-8 py-2 w-50 border-2 border-yellow-400 flex items-center justify-center">
          <span className="text-xl text-yellow-400 font-bold mx-4">7DT</span>
        </div>
      </div>

      {/* Validate Button */}
      <div className="my-5 bg-black h-8 w-full flex items-center justify-center">
        <BiSolidDownArrow className="text-4xl text-yellow-400 ml-80" />
        <button className="text-xl font-bold text-yellow-400 px-2">
          Valider
        </button>
      </div>
    </div>
  );
};

export default Panier;
