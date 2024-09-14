"use client";
import React, { useState, useEffect } from "react";
import TitlePart from "../common/TitlePart";
import Image from "next/image";
import { images } from "@/data/projectData";

// Sample images array
// const images = [
//   "/assets/images/AboutImg.png",
//   "/assets/images/Project1.png",
//   "/assets/images/Pool Img2.jpg",
// ];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds interval for the carousel

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className=" mx-auto p-6 mb-10">
      <div className="flex flex-col lg:flex-row mt-10 lg:gap-16 gap-8">
        <div className="relative flex lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
          <div className="relative w-full h-[400px] lg:h-[550px] rounded-l-xl overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt={`Project Image ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover rounded-lg lg:rounded-l-xl"
            />
          </div>

          {/* Carousel indicators in rectangle shape */}
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
        </div>

        <div className="lg:w-1/2">
          <TitlePart
            Title="PROJECTS"
            subTitle1="Meet the "
            highlight="Visionaries:"
            subTitle2="Our Quirky Journey to Hardware Greatness!"
            left={false}
          />
          <p className="text-base text-gray-600 my-5" data-aos="fade-up-left">
            It's now easier than ever to give your space a makeover you deserve
            for. Visit your nearest Jaquar World or Orientation Center or
            Authorized Dealer to know more to choose from the wide range of
            complete bathroom and lighting solutions. It's now easier than ever
            to give your space a makeover you deserve for. Visit your nearest
            Jaquar World or Orientation Center or Authorized Dealer to know more
            to choose from the wide range of complete bathroom and lighting
            solutions.
          </p>
          <p className="text-base text-gray-700" data-aos="fade-up-left">
            It's now easier than ever to give your space a makeover you deserve
            for. Visit your nearest Jaquar World or Orientation Center or
            Authorized Dealer to know more to choose from the wide range of
            complete bathroom and lighting solutions. It's now easier than ever
            to give your space a makeover you deserve for. Visit your nearest
            Jaquar World or Orientation Center or Authorized Dealer to know more
            to choose from the wide range of complete bathroom and lighting
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
