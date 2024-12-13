import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-[#d47a3d] to-[#a55306]  shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/"  >
          <img src={logo} alt="Logo" className=" w-12 " />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-soft-gold transition duration-200 self-center">Home</Link>
          <Link to="/products" className="text-white hover:text-soft-gold transition duration-200 self-center">Products</Link>
          <Link to="/about" className="text-white hover:text-soft-gold transition duration-200 self-center">About</Link>
          <Link to="/admin/login" className="text-white hover:text-soft-gold transition duration-200 self-center">Admin</Link>
          <Link to="/contact" className='block  text-white  hover:text-soft-gold'>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-deep-navy hover:text-soft-gold focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <Link to="/" className="block px-4 py-2 text-deep-navy hover:bg-light-gray hover:text-soft-gold">Home</Link>
          <Link to="/products" className="block px-4 py-2 text-deep-navy hover:bg-light-gray hover:text-soft-gold">Products</Link>
          <Link to="/about" className="block px-4 py-2 text-deep-navy hover:bg-light-gray hover:text-soft-gold">About</Link>
          <Link to="/admin/login" className="block px-4 py-2 text-deep-navy hover:bg-light-gray hover:text-soft-gold">Admin</Link>
          <Link to="/contact" className='block px-4 py-2 text-deep-navy hover:bg-light-gray hover:text-soft-gold'>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
