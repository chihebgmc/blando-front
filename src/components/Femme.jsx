import React from 'react'

const Femme = () => {
  return (
    <div className="bg-black-400 min-h-screen">
      {/* Container for grid and sidebar */}
      <div className="flex flex-wrap md:flex-nowrap justify-around ">
        {/* Grid of product cards */}
        <div className="w-full md:w-3/4 p-4 justify-center ">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-20 mx-5">
            {/* Repeat this block for each product card */}
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
        <div className="w-full md:w-1/4 p-0 flex flex-col items-center md:items-end bg-black ">
          {/* Repeat this block for each icon */}
          <div className="w-16 h-full bg-yellow-400 flex flex-col items-center mx-5">
            <a
              href="https://www.facebook.com/blandoshoestn/"
              className="text-yellow-300 hover:text-yellow-400 mb-5 rounded-full bg-black p-2 my-64"
            >
              <i className="fab fa-facebook-f fa-lg" />
            </a>
            <a
              href="#"
              className="text-yellow-300 hover:text-yellow-400 mb-5 rounded-full bg-black p-2"
            >
              <i className="fa-brands fa-whatsapp fa-lg" />
            </a>
            <a
              href="#"
              className="text-yellow-300 hover:text-yellow-400 mb-2 rounded-full bg-black p-2"
            >
              <i className="fab fa-instagram fa-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Femme
