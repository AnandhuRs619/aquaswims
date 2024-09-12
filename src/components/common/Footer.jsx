import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/assets/Layer 2.png'
import icon1 from '../../../public/assets/icons/facebook.png'
import icon2 from '../../../public/assets/icons/twitter.png'
import icon3 from '../../../public/assets/icons/linkedin.png'
import icon4 from '../../../public/assets/icons/instagram.png'
import icon5 from '../../../public/assets/icons/whatsapp.png'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      {/* Logo and Social Icons */}
      <div className="flex flex-col items-center space-y-4">
        {/* Logo */}
        <Image 
          src={Logo} // Replace with your actual logo path
          alt="Footer Logo"
          width={120} // Adjust size as needed
          height={120} // Adjust size as needed
        />

        {/* Social Media Icons */}
            <p>Socials</p>
        <div className="flex space-x-6">
          <a href="#" aria-label="Facebook">
            <Image src={icon1} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Twitter">
            <Image src={icon2} alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Image src={icon3} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Whatapp">
            <Image src={icon4} alt="Whatapp" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram">
            <Image src={icon5} alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Divider */}
      {/* <div className="border-t border-gray-300 my-6 w-4/5 mx-auto"></div> */}

      {/* Footer Navigation Links */}
      {/* <nav className="text-center">
        <ul className="flex justify-center space-x-8 text-sm text-gray-700">
          <li><a href="#" className="hover:text-gray-900">Home</a></li>
          <li><a href="#" className="hover:text-gray-900">About Us</a></li>
          <li><a href="#" className="hover:text-gray-900">Products</a></li>
          <li><a href="#" className="hover:text-gray-900">Projects</a></li>
          <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
        </ul>
      </nav> */}

      {/* Contact Information */}
      <div className="text-center mt-8 text-sm text-gray-600">
        <p>1234 Street Name, City, State, 12345</p>
        <p>Email: info@example.com | Phone: (123) 456-7890</p>
      </div>
      {/* Copyright with Lines */}
      <div className="flex items-center justify-center mt-4">
        <div className="flex-grow border-t border-gray-400"></div>
        <p className="px-4 text-gray-600 text-sm">
          &copy; 2024 RER Traders. All rights reserved.
        </p>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
    </footer>
  );
};

export default Footer;
