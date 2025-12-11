import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full h-20 bg-gray-900 text-white fixed top-0 z-50 shadow-lg">
      <div className="flex justify-between items-center h-full w-full px-4 max-w-[1240px] mx-auto">
        
        {/* Logo Section */}
        <a href="/" className="text-3xl font-bold text-blue-500 cursor-pointer">
          BrandName
        </a>

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-8 items-center">
          {['Home', 'Services', 'Products', 'Contact'].map((item) => (
            <li key={item} className="cursor-pointer font-medium hover:text-blue-500 transition-colors duration-200">
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Desktop Sign Up Button (Hidden on Mobile) */}
        <div className="hidden md:block">
          <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition-colors">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden cursor-pointer z-20" onClick={toggleMenu}>
          {/* Note: Ensure you have FontAwesome loaded, or replace these <i> with SVGs */}
          <i className={isOpen ? 'fas fa-times text-2xl' : 'fas fa-bars text-2xl'} />
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={
            isOpen
              ? 'fixed left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col z-10 ease-in-out duration-500 md:hidden'
              : 'fixed left-[-100%] top-0 w-full h-screen bg-black/90 ease-in-out duration-500 z-10'
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-blue-500 m-4">BrandName</h1>
          
          {/* Mobile Links */}
          <ul className="flex flex-col p-4 uppercase text-center">
            {['Home', 'Services', 'Products', 'Contact'].map((item) => (
              <li key={item} className="p-4 border-b border-gray-600">
                <a href={`/${item.toLowerCase()}`} onClick={toggleMenu} className="block w-full">
                  {item}
                </a>
              </li>
            ))}
            {/* Mobile Sign Up Button */}
            <li className="p-4">
              <a href="/signup" onClick={toggleMenu}>
                <button className="w-full py-3 my-4 bg-blue-500 rounded font-bold text-white">
                  Sign Up
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;