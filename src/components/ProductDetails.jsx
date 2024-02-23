import React, { useState } from 'react';
import { BiSolidDownArrow, BiSolidRightArrow } from 'react-icons/bi';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex container items-center mx-auto h-full">
      {/*Div disponibilité*/}
      <div className="w-1/4 h-full flex flex-col justify-center items-center">
        <div className="bg-[#F5E51C] w-3/4  mt-2 py-4">
          {/* Product image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwl3CPwUL07GOD2OiuQ4izJ0aV_55KLhdUy3Fl7PQsnm_JQc7WT6S6rC4mL18Os5FsCyQ&usqp=CAU"
            alt="Product Name"
            className="rounded-lg -ml-5"
          />
        </div>
        <div className="text-center flex flex-col items-center my-5">
          <h1 className="text-[#F5E51C] text-bold font-inter text-3xl">
            Disponibilité
          </h1>
          <div className="w-10 h-10 bg-[#1ef422] border-[#F5E51C] border-2"></div>
        </div>
      </div>

      <div className="md:w-3/4 p-4 flex flex-col items-start">
        <div className="w-full text-center">
          <div className="text-4xl font-bold text-[#F5E51C]">58 DT</div>
          <div className="text-xl text-[#F5E51C]">Ref</div>
        </div>

        <div className="flex w-full my-2">
          <div className="flex items-center border-2 border-[#F5E51C] w-1/4  md:w-100">
            <span className="text-sm text-[#F5E51C] px-4 font-bold">
              Description
            </span>
          </div>
          <div className="w-3/4 border-2 border-[#F5E51C] text-[#F5E51C] text-center md:w-full">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            laboriosam deleniti quis sit, repellat reiciendis nulla dolores
            sequi rerum aliquid praesentium obcaecati architecto fugiat eveniet
            hic consequatur dolor, quos molestias!
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex items-center justify-start mb-2 w-full">
            <BiSolidRightArrow className="text-5xl text-[#F5E51C] my-4" />
            <div className="font-bold mr-2 text-[#F5E51C]">Couleur:</div>

            <div className="flex gap-5 ml-36">
              <div className="w-10 h-10 bg-[#1ef422] border-[#F5E51C] border-2"></div>
              <div className="w-10 h-10 bg-red-600 border-[#F5E51C] border-2"></div>
              <div className="w-10 h-10 bg-black border-[#F5E51C] border-2"></div>
              <div className="w-10 h-10 bg-red-600 border-[#F5E51C] border-2"></div>
            </div>
          </div>
          <div className="flex items-center mb-2 w-full">
            <BiSolidRightArrow className="text-5xl text-[#F5E51C] my-4" />
            <div className="font-bold mr-2 text-[#F5E51C]">Pointure:</div>

            <div className="flex gap-5 ml-36">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-[#F5E51C] text-[#F5E51C] px-2">
                38
              </div>
            </div>
          </div>
          <div className="flex items-center w-full">
            <BiSolidRightArrow className="text-5xl text-[#F5E51C] my-4" />
            <div className="font-bold text-[#F5E51C] mr-2">Quantité:</div>
            <div className="flex gap-2 ml-36">
              <button
                className="px-3 font-bold text-4xl text-[#F5E51C]"
                onClick={() =>
                  quantity > 1 ? setQuantity(quantity - 1) : quantity
                }
              >
                -
              </button>
              <div className="w-10 h-10 flex items-center justify-center border-2 border-[#F5E51C] text-[#F5E51C] px-2">
                {quantity}
              </div>
              <button
                className="px-3 font-bold text-4xl text-[#F5E51C]"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="bg-black h-8 w-full flex items-center justify-center">
            <BiSolidDownArrow className="text-4xl text-[#F5E51C] ml-80" />
            <button className="text-xl font-bold text-[#F5E51C] px-2">
              Panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
