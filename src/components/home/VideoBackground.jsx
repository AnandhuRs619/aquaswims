import React, { useRef, useEffect } from "react";

const VideoBackground = ({ videoSrc, onVideoEnd }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch((error) => console.error("Video play error:", error));
    }
  }, [videoSrc]);

  const handleVideoError = (e) => {
    console.error("Video Error:", e);
  };

  const handleVideoEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch((error) => console.error("Video play error:", error));
    }
    onVideoEnd();
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        autoPlay
        muted
        onEnded={handleVideoEnded}
        className="object-cover w-full h-full"
        onError={handleVideoError}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
