import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-4 flex justify-around items-center">
        <a
          href="tel:+21628169002"
          className="text-[#F5E51C] hover:text-yellow-500"
        >
          <i className="fas fa-phone-alt text-[#F5E51C] hover:text-yellow-500 mr-2"></i>
          +216 28169002
        </a>
        <span className="text-[#F5E51C]">Copyright 2024 by Push To Move®</span>
      </div>
    </footer>
  );
};

export default Footer;
