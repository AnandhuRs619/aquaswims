'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../../public/assets/Layer 2.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add scroll event listener to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setIsScrolled(true);  // Change to white background
      } else {
        setIsScrolled(false); // Transparent at the top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-md': 'bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'
      }`}
    >
      <div className="flex justify-between items-center py-4 px-10">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="RER Traders Logo" width={50} height={50} />
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-8 text-black font-semibold text-lg">
          <li>
            <Link href="/" className="hover:text-yellow-500">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-yellow-500">
              <span>About Us</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-yellow-500">
              <span>Product</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-yellow-500">
              <span>Project</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-yellow-500">
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-6 py-4 z-50 text-black font-semibold text-lg">
            <li>
              <Link href="/" onClick={toggleMenu} className="hover:text-yellow-500">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/" onClick={toggleMenu} className="hover:text-yellow-500">
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/" onClick={toggleMenu} className="hover:text-yellow-500">
                <span>Product</span>
              </Link>
            </li>
            <li>
              <Link href="/" onClick={toggleMenu} className="hover:text-yellow-500">
                <span>Project</span>
              </Link>
            </li>
            <li>
              <Link href="/" onClick={toggleMenu} className="hover:text-yellow-500">
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;