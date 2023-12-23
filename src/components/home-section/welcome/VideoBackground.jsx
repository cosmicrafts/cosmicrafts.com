// VideoBackground.jsx

import React, { useRef, useEffect } from 'react';
import bgVideo from '../../../assets/videos/bg-video2.mp4';

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => console.error('Error playing video: ', error));
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="overlay welcome__video-background"
      playsInline
      autoPlay
      loop
      muted
    >
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
