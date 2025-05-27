import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav className="bg-[#0c0f22] text-white px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
      <div className="text-2xl font-bold text-green-400">DEV-MAK</div>
      <ul className="hidden md:flex space-x-8 text-sm text-gray-300">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Portfolio</li>
        <li className="hover:text-white cursor-pointer">My Work</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>
      <div className="md:hidden">
        <button onClick={toggleNav} className="text-green-400 text-2xl">
          {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      {navOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#0c0f22] text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <li className="hover:text-green-400 cursor-pointer">Home</li>
          <li className="hover:text-green-400 cursor-pointer">About</li>
          <li className="hover:text-green-400 cursor-pointer">Portfolio</li>
          <li className="hover:text-green-400 cursor-pointer">My Work</li>
          <li className="hover:text-green-400 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
