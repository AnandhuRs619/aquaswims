"use client";
import React from "react";
import Image from "next/image";

const ProjectCard = ({ image, index, rowSpan, colSpan }) => {
  return (
    <div
      className={`relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 cursor-pointer 
      col-span-${colSpan} row-span-${rowSpan}`}
      style={{
        gridRowEnd: `span ${rowSpan || 1}`,
        gridColumnEnd: `span ${colSpan || 1}`,
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={`Project Image ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-125 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div className="text-white">
          <h2 className="text-lg font-bold">Project {index + 1}</h2>
          <p className="text-sm">
            Showcasing pool construction, modern design, and practical solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
