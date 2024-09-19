import React from 'react';
import Image from 'next/image';

const TestimonialCard = ({ image, text, name, designation }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-md border my-10 p-6 flex flex-col w-full md:h-52 h-72">
      <div className="absolute -top-6 left-4 w-14 h-14 rounded-full shadow-md flex items-center justify-center border">
        <Image
          src={image}
          alt={name}
          className="rounded-full object-cover w-14 h-14"
          width={56} 
          height={56} 
        />
      </div>
      <div className="pt-8">
        <p className="text-sm text-gray-700 italic pb-5">"{text}"</p>
        <div className="text-left">
          <h3 className="text-lg font-bold text-black">{name}</h3>
          <p className="text-sm text-gray-500">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
