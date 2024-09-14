import Image from 'next/image';
import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const ImageCard = ({ imageUrl, title }) => {
  return (
    <div className="relative w-full h-auto overflow-hidden my-10 transition-transform transform hover:scale-105">
      <div className="relative">
        {/* Image Section */}
        <Image src={imageUrl} alt={title} className="w-full h-96 object-cover rounded-xl" />
        
        {/* Top Right Curve with Arrow Icon */}
        <div className="absolute -top-4 right-0 w-20 h-20 bg-white rounded-tr-lg clip-top-right flex items-center justify-center">
          <FiArrowUpRight className="text-gray-800 text-4xl font-extrabold" />
        </div>
        
        {/* Title Section positioned at the bottom left of the image */}
        <div className="absolute bottom-0 left-0 w-72 rounded-r-full p-4 bg-white">
          <div className="text-black text-sm font-bold">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
