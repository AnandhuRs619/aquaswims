'use client';
import React, { useState, useEffect } from "react";
import VideoBackground from "./VideoBackground";
import Link from "next/link";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"; // Import icons

const videos = [
  { src: "/assets/videos/lastvid.mp4", title: "R&R INFRA & AQUASWIMS" },
  { src: "/assets/videos/BannerVid.mp4", title: "R&R INFRA & AQUASWIMS" },
  { src: "/assets/videos/4k swimmg.mp4", title: "R&R INFRA & AQUASWIMS" },
  { src: "/assets/videos/Top Video.mp4", title: "R&R INFRA & AQUASWIMS" },
  { src: "/assets/videos/water blade.mp4", title: "R&R INFRA & AQUASWIMS" },
];

const LandingPart = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // State for transitions
  const [isLoading, setIsLoading] = useState(false); // State for loading

  const handleNext = () => {
    setIsTransitioning(true); // Start the transition
    setIsLoading(true); // Start loading animation
    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
      setIsTransitioning(false); // End the transition
      setIsLoading(false); // End loading animation
    }, 500); // Match the duration of your CSS transition
  };

  const handlePrev = () => {
    setIsTransitioning(true); // Start the transition
    setIsLoading(true); // Start loading animation
    setTimeout(() => {
      setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
      setIsTransitioning(false); // End the transition
      setIsLoading(false); // End loading animation
    }, 500); // Match the duration of your CSS transition
  };

  const handleVideoEnd = () => {
    handleNext();
  };

  useEffect(() => {
    console.log(`Video ${currentVideo + 1} is now playing`);
  }, [currentVideo]);

  return (
    <div className="h-screen relative w-full flex flex-col items-center text-white bg-white">
      <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <div className="h-screen relative w-full flex flex-col items-center text-white bg-white">
          <div className="absolute w-screen h-screen bg-black/20 z-10 top-0 left-0"></div>
          <VideoBackground 
            videoSrc={videos[currentVideo].src} 
            onVideoEnd={handleVideoEnd} 
          />
        </div>
      </div>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute flex justify-center items-center w-full h-full z-30">
          <div className="animate-spin h-20 w-20 border-4 border-t-transparent border-white rounded-full"></div>
        </div>
      )}

      {/* Buttons for navigation */}
      <div className="absolute flex justify-between w-full px-8 top-1/2 transform -translate-y-1/2 z-20">
        <button onClick={handlePrev} className="p-2 bg-white/30 rounded-full">
          <MdKeyboardArrowLeft size={30} className="text-white" />
        </button>
        <button onClick={handleNext} className="p-2 bg-white/30 rounded-full">
          <MdKeyboardArrowRight size={30} className="text-white" />
        </button>
      </div>

      <div data-aos="fade-up" data-aos-duration="3000" className="absolute flex flex-col items-center justify-center gap-3 lg:gap-1 top-1/2">
        <h1 className="lg:text-[4.5rem] text-[3rem] leading-[50px] lg:leading-[80px] font-bold z-10 text-center text-white opacity-60 capitalize">
          {videos[currentVideo].title}
        </h1>
        <p className="lg:text-lg mt-4 text-base font-[400] text-center w-2/3 lg:w-full z-10">
          Engineering Dreams into Reality
        </p>

        <Link href={`/`} className="z-10">
          <button className="p-2 mt-2 lg:p-2.5 px-6 lg:px-8 w-fit rounded-full lg:font-semibold z-10 bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-[3px] border-white">
            <span className="text-white">EXPLORE NOW</span>
          </button>
        </Link>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 flex gap-3 z-20">
        {videos.map((_, index) => (
          <span
            key={index}
            className={`transition-all duration-300 ${
              currentVideo === index
                ? "w-8 h-3 bg-white rounded-md"
                : "w-3 h-3 bg-white/60 rounded-full"
            }`}
            onClick={() => {
              setIsTransitioning(true);
              setIsLoading(true);
              setTimeout(() => {
                setCurrentVideo(index);
                setIsTransitioning(false);
                setIsLoading(false);
              }, 500);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default LandingPart;
