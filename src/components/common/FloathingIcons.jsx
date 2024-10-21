// FloatingIcons.js
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <div className="fixed bottom-10 right-5 z-50 flex flex-col space-y-3">
      {/* WhatsApp Icon */}
      <div className="relative flex items-center justify-end group">
        <span className="mr-4 bg-gray-800 text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          WhatsApp
        </span>
        <a
          href="https://wa.me/+918156881818"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-4 rounded-full shadow-lg text-white hover:bg-green-600 transition-colors"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>

      {/* Phone Icon */}
      <div className="relative flex items-center justify-end group">
        <span className="mr-4 bg-gray-800 text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Phone
        </span>
        <a
          href="tel:+918156881818" // replace with your actual phone number
          className="bg-blue-500 p-4 rounded-full shadow-lg text-white hover:bg-blue-600 transition-colors"
          aria-label="Call us"
        >
          <FaPhoneAlt size={24} />
        </a>
      </div>
    </div>
  );
};

export default FloatingIcons;
