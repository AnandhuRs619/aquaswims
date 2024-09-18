import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pb-10  ">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Information Section */}
        <div className="bg-white p-6">
          <h3 className="text-gray-800 font-semibold mb-4">Information</h3>
          <ul className="text-gray-600 space-y-4">
            <li>About Aqua Swim</li>
            <li>Media Room</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="bg-gray-100 p-6">
          <h3 className="text-gray-800 font-semibold mb-4">Support</h3>
          <ul className="text-gray-600 space-y-4">
            <li>Customer Support</li>
            <li>Call Purchase Assistance</li>
            <li>Call Back Request</li>
            <li>Green Initiatives</li>
            <li>Light Planning</li>
            <li>Download catalogue</li>
            <li>Dealer Locator</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="bg-white p-6">
          <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-600 space-y-4">
            <li>Virtual Tour TVM</li>
            <li>Virtual Tour EKM</li>
            <li>Blog</li>
            <li>Knowledge Series</li>
            <li>FAQ's</li>
            <li>Newsletter</li>
          </ul>
        </div>

        {/* Brand Section */}
        <div className="bg-gray-100 p-6">
          <h3 className="text-gray-800 font-semibold mb-4">Brand</h3>
          <ul className="text-gray-600 space-y-4">
            <li>Aqua Swim</li>
            <li>R&R Traders</li>
          </ul>
          <h4 className="mt-6 text-gray-800 font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4 text-gray-600">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaYoutube size={20} />
            <FaLinkedin size={20} />
            <FaWhatsapp size={20} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 text-center text-gray-600 mt-8 pt-6">
        <p className="text-sm">
          Privacy Policy & Disclaimer | Use of Cookies | Sitemap |
        </p>
        <p className="text-sm mt-2">
          Copyright © 2024 AquaSwim. All rights reserved.
        </p>
        <p className="text-sm">Developed by M.Dev</p>
      </div>
    </footer>
  );
};

export default Footer;
