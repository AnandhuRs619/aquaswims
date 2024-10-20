"use client";
import React, { useState, useEffect } from "react";
import TitlePart from "../common/TitlePart";
import Image from "next/image";
import { images } from "@/data/projectData";
import ProjectCard from "./ProjectCard";



const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className=" mx-auto p-6 mb-10">
  <TitlePart
            Title="PROJECTS"
            subTitle1="Meet the "
            highlight="Visionaries:"
            subTitle2="Our Quirky Journey to Hardware Greatness!"
            left={true}
          />

       {/* Masonry Grid */}
      <div
       className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-6"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", // Ensures responsive columns
        gridAutoRows: "minmax(100px, auto)", // Adjust base row height
      }}
    >
      {images.map((image, index) => (
        <ProjectCard
          key={index}
          image={image.src}
          index={index}
          rowSpan={image.rowSpan || 1} // Dynamically setting rowSpan
          colSpan={image.colSpan || 1} // Dynamically setting colSpan
        />
      ))}
    </div>
    



      {/* <div className="flex flex-col lg:flex-row mt-10 lg:gap-16 gap-8"> */}
        
        {/* <div className="relative flex lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
          <div className="relative w-full h-[400px] lg:h-[550px] rounded-l-xl overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt={`Project Image ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover rounded-lg lg:rounded-l-xl"
            />
          </div>

        
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-1 rounded-sm ${
                  currentIndex === index ? "bg-white" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div> */}
{/* 
        <div className="lg:w-1/2">
          <TitlePart
            Title="PROJECTS"
            subTitle1="Meet the "
            highlight="Visionaries:"
            subTitle2="Our Quirky Journey to Hardware Greatness!"
            left={false}
          />
          <p className="text-base text-gray-700 my-5" data-aos="fade-up-left">
            We specialize in delivering cutting-edge solutions in FRP (Fiber
            Reinforced Plastic) and GRP (Glass Reinforced Plastic) work,
            offering durable, high-quality structures tailored to client
            specifications. Our expertise extends to the construction of
            swimming pools, ranging from custom-designed pools to readymade
            options, ensuring aesthetic appeal and structural integrity.
          </p>
          <p className="text-base text-gray-700 my-5" data-aos="fade-up-left">
            In addition to pool construction, we are pioneering the development
            of capsule huts—compact, modern living spaces designed for comfort
            and convenience. Our capsule huts are customizable, transportable,
            and ideal for various settings, providing a perfect blend of
            innovation and practicality.
          </p>
          <p className="text-base text-gray-700 my-5" data-aos="fade-up-left">
            With a commitment to quality and customer satisfaction, we aim to
            lead the industry in creating functional, sustainable, and
            innovative construction solutions.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Project;
