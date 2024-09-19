'use client'
import React, { useState, useEffect } from "react";
import VideoBackground from "./VideoBackground";
import Link from "next/link";

const videos = [
  { src: "/assets/videos/BannerVid.mp4", title: "R&R INFRA & AQUASWIMS" },
  { src: "/assets/videos/Top Video.mp4", title: "R&R INFRA & AQUASWIMS" },
  { src: "/assets/videos/Top Video.mp4", title: "R&R INFRA & AQUASWIMS" },
];

const LandingPart = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    console.log(`Video ${currentVideo + 1} is now playing`);
  }, [currentVideo]);

  return (
    <div className="h-screen relative w-full flex flex-col items-center text-white bg-white">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="h-screen relative w-full flex flex-col items-center text-white bg-white">
          <div className="absolute w-screen h-screen bg-black/40 z-10 top-0 left-0"></div>
          <VideoBackground 
            videoSrc={videos[currentVideo].src} 
            onVideoEnd={handleVideoEnd} 
          />
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="3000" className="absolute flex flex-col items-center justify-center gap-3 lg:gap-1 top-1/2">
        <h1  className="lg:text-[4.5rem] text-[3rem] leading-[50px] lg:leading-[80px] font-bold z-10 text-center text-white opacity-60 capitalize">
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
    </div>
  );
};

export default LandingPart;