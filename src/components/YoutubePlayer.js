'use client'
import React from "react";
import YouTube from "react-youtube";

const YouTubePlayer = ({ videoId }) => {
  const opts = {
    height: "420",
    width: "720",
    playerVars: {
      autoplay: 1, // Auto-play the video
    },
  };

  return (
    <div className="flex justify-center">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubePlayer;
