import React from "react";
import VideoBackground from "./VideoBackground";
import Link from "next/link";
import Navbar from "../common/nav";




const LandingPart = () => {
  return (
    <div className="h-screen relative w-full flex flex-col items-center text-white bg-white">
      <Navbar/>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="h-screen relative w-full flex flex-col items-center text-white bg-white">
          <div className="absolute w-screen h-screen bg-black/40 z-10 top-0 left-0"></div>
          <VideoBackground videoSrc="/assets/videos/Top Video.mp4" />
        </div>
      </div>

      <div className="absolute flex flex-col items-center justify-center gap-3 lg:gap-1 top-1/2">
        <h1 className="lg:text-[4.5rem] text-[3rem] leading-[50px] lg:leading-[80px] font-bold z-10 text-center text-white opacity-60 capitalize">
          R&R INFRA & AQUASWIMS
        </h1>
        <p className="lg:text-lg mt-4 text-base font-[400] text-center w-2/3 lg:w-full z-10">
          Engineering Dreams into Reality
        </p>

        <Link href={`/`} className="">
          <button className="p-2 mt-2 lg:p-2.5 px-6 lg:px-8 w-fit rounded-full lg:font-semibold z-10 bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-[3px] border-white">
           <span className="text-white">EXPLORE NOW</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPart;
