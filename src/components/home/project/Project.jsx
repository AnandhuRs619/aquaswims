import React from "react";
import TitlePart from "../common/TitlePart";
import image from '../../../../public/assets/images/Project1.png'
import Image from "next/image";

const Project = () => {
  return (
    <div className="mx-auto p-6 mb-10">
    <div className="flex flex-col lg:flex-row mt-10">
      <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10 mb-5 flex ">
        <div className="rounded-l-xl overflow-hidden">
          <Image 
            src= {image}
            alt="R&R Infra Project"
            height={400} 
            className="object-cover rounded-l-xl w-full"
          />
        </div>
      </div>

      <div className="lg:w-1/2">
        <TitlePart
          Title="PROJECTS"
          subTitle1="BULIDING DREMS WITH "
          highlight="R&R INFRA:"
          subTitle2="YOUR COMPLETE ENGINEERING SOLUTIONS"
          left={false}
        />
        <p className="text-sm text-gray-600 my-5">
          From Modern Concepts to Fiberglass Pools - We’ve Got You Covered!
        </p>
        <p className="text-base text-gray-700">
          At R&R Infra, we’re your go-to team for turning dreams into reality. With expertise in modern construction concepts, fiberglass installations, and swimming pool engineering, we offer comprehensive engineering solutions. Whether it’s designing your dream home, constructing sturdy buildings, or installing luxurious swimming pools, we bring creativity and precision to every project. Trust our experienced team to handle all aspects of construction and water engineering, ensuring top-notch results that exceed your expectations.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Project;
