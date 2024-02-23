import React, { useEffect } from 'react';
import { Dropdown, DropdownItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addToCart } from '../features/carts/cartSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      addToCart({
        product: '65b3c4ae548b8250356b607e',
        quantity: 5,
        size: 41,
        color: 'black',
      })
    );
  }, []);
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}

      {/* Main Banner */}

      <div className="container mx-auto p-4 bg-black rounded shadow-lg mb-0">
        {/* Product image and details */}
        <img
          className="rounded"
          alt="Blando shoes"
          src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/241706228_240392521245155_1476511900240131848_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_ohc=6nCKUwsuRSAAX8JEBBi&_nc_ht=scontent.ftun1-2.fna&oh=00_AfCTOsz0e6YGQG0LIeeCzjtRMd8wCUZQbbYtFEt74U1Ryw&oe=65D4CDC1"
        />
      </div>

      {/* Footer */}
      <div className="bg-black">
        <div className="container py-8 flex md:flex-row justify-around items-center">
          <p className="text-yellow-300 text-sm md:text-base lg:text-lg text-center md:text-left mx-5 ">
            Marchez avec style et confort grâce à Blando Shoes. Explorez notre
            collection de chaussures <br /> en ligne pour trouver la paire
            parfaite qui allie élégance et douceur à chaque pas. Bienvenue dans
            <br /> l'univers de la mode où le confort rencontre le chic,
            seulement chez Blando Shoes.
          </p>
          <div className="flex flex-col mt-0 md:mt-0 items-center">
            {/* Social media icons using Font Awesome */}
            <a
              href="https://www.facebook.com/blandoshoestn/"
              className="text-black hover:text-black-300 mb-2 rounded-full bg-yellow-300 p-2"
            >
              <i className="fab fa-facebook-f fa-lg" />
            </a>
            <a
              href="#"
              className="text-black hover:text-black-300 mb-2 rounded-full bg-yellow-300 p-2"
            >
              <i className="fa-brands fa-whatsapp fa-lg" />
            </a>
            <a
              href="#"
              className="text-black hover:text-black-300 mb-2 rounded-full bg-yellow-300 p-2"
            >
              <i className="fab fa-instagram fa-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
