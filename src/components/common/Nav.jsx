"use client"
import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('Home');

  const menuItems = [
    'Home',
    'Products',
    'Services',
    'Project',
    'About us',
    'Contact Us',
  ];

  return (
    <nav className="mt-8 absolute top-0 mx-auto bg-cover bg-center py-4 px-6">
    <div className="flex justify-center">
      <ul className="flex space-x-6 bg-gray-800 bg-opacity-50 text-white broder-[5px] border-white rounded-full px-6 py-2">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`cursor-pointer transition-all ease-in-out duration-300 px-4 py-4 rounded-full ${
              active === item
                ? 'bg-white text-gray-800'
                : 'hover:bg-white hover:text-yellow-800'
            }`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  </nav>
  
  );
};

export default Navbar;

