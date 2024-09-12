import React from 'react';
import Image from 'next/image';

const ProductCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
      {/* Image will take the full width and be rounded at the top */}
      <div className="w-full h-64 relative">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col items-start">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
          More Info
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
