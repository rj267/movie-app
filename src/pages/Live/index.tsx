import React from "react";
import ReactPlayer from "react-player/youtube";

const Live = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-primary">Live TV: Asianet News</h1>
      
      <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=coYwVqasIic"
          controls={true}
          width="100%"
          height="100%"
          playing={true}
          config={{
            playerVars: { 
              autoplay: 1,
              modestbranding: 1 
            },
          }}
        />
      </div>

      <div className="mt-8 p-6 bg-section rounded-lg max-w-2xl text-center">
        <p className="text-gray-400">
          Streaming live news and entertainment 24/7. 
          If the video doesn't load, please check your internet connection.
        </p>
      </div>
    </div>
  );
};

export default Live;