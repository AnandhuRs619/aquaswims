import Image from 'next/image';
import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const ImageCard = ({ imageUrl, title }) => {
  return (
    <div className="relative w-full h-auto overflow-hidden my-10 ">
      <div className="relative">
        {/* Image Section */}
        <Image src={imageUrl} alt={title} className="w-full h-96 object-cover rounded-lg" />
        
        {/* Top Right Curve with Arrow Icon */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-tr-lg clip-top-right flex items-center justify-center">
          <FiArrowUpRight className="text-gray-800 text-2xl font-extrabold" />
        </div>
      </div>
      
      {/* Bottom Left Curve for Title */}
      <div className="relative">
        <div className="w-1/2 p-4 bg-white border text-sm text-gray-800 rounded-r-full">
          {title}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
