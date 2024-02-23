import React from 'react';
import logo1 from '../assets/logo1.png';
import { BiDownArrow } from 'react-icons/bi';
const Header = () => {
  return (
    <div>
      <div className="py-4 bg-black mb-0">
        {/* Product image and details */}
      </div>
      <div className="bg-yellow-300 py-0">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo here */}
          <a href="/" className="py-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvrCfoAsEKNXgf-61LdfmtxsC1duXzgGxjw&usqp=CAU"
              alt="Logo"
              className="h-16 "
            />
          </a>
          {/* Navigation */}
          <nav className="flex items-center space-x-4 mx-5">
            <div className="dropdown">
              <a
                className="text-gray-700 text-sm md:text-base lg:text-lg dropdown-toggle"
                style={{ textDecoration: 'none', border: '8px solid black' }}
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Connexion
              </a>

              <div
                className="dropdown-menu"
                style={{ background: 'black', border: '8px solid yellow' }}
                aria-labelledby="dropdownMenuLink"
              >
                <a className="dropdown-item text-[#F5E51C]" href="/Login">
                  Déjà inscrit
                </a>
                <a className="dropdown-item  text-[#F5E51C]" href="/Register">
                  inscription
                </a>
              </div>
            </div>

            <div className="dropdown">
              <a
                className="text-gray-700 text-sm md:text-base lg:text-lg dropdown-toggle"
                style={{ textDecoration: 'none', border: '8px solid black' }}
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Collection
              </a>

              <div
                className="dropdown-menu"
                style={{ background: 'black', border: '8px solid yellow' }}
                aria-labelledby="dropdownMenuLink"
              >
                <a className="dropdown-item  text-yellow-300" href="/Homme">
                  Homme
                </a>
                <a className="dropdown-item  text-yellow-300" href="/Femme">
                  Femme
                </a>
              </div>
            </div>

            <a
              href="/Panier"
              className="flex items-center text-gray-900 hover:text-gray-700"
              style={{ textDecoration: 'none' }}
            >
              <BiDownArrow className="text-5xl" />
              Panier
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
