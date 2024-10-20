import Link from "next/link";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const ContactCard = ({ icon, title, subtitle,link }) => {
  return (
      <div
      className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-xs flex flex-col items-center justify-center 
                  transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-3xl group cursor-pointer"
    >
      <div
        className="flex items-center justify-center text-6xl text-blue-950 mb-4 h-28 w-28 
                      transition-colors duration-300 ease-in-out group-hover:text-blue-500"
      >
        {icon}
      </div>
        <Link href={link || "#"} passHref> 
      {/* Title and Subtitle */}
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-500 text-center">{subtitle}</p>
      <div className="flex items-center justify-center text-3xl text-gray-500 my-4">
        <BsThreeDots />
      </div>
    </Link>
    </div>
  );
};

export default ContactCard;
