import Image from 'next/image';
import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const ImageCard = ({ imageUrl, title }) => {
  return (
    <div className="relative w-full h-auto overflow-hidden my-10 transition-transform transform hover:scale-105">
      <div className="relative">
        <Image src={imageUrl} alt={title} className="w-full h-96 object-cover rounded-xl" />
        <div className="absolute -top-4 -right-4 w-20 h-20">
          <Image 
            src='/assets/icons/card top.png' 
            width={80} 
            height={80} 
            alt="Curve" 
            className='w-20 h-20'
          />
          <div className="absolute inset-0 -top-2 -right-4 flex items-center justify-center">
            <FiArrowUpRight className="text-gray-800 text-3xl font-extrabold" />
          </div>
        </div>
        <div className="absolute bottom-0 -left-4 w-72">
          <Image 
            src='/assets/icons/card bottm.png' 
            width={180} 
            height={180} 
            alt="Bottom Curve" 
            className="w-72 h-24 object-cover"
          />
          <div className="absolute -bottom-6 left-0 w-full h-full flex items-center justify-center">
            <div className="text-black text-sm font-bold">
              {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
