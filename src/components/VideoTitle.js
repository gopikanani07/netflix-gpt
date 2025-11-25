import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block w-1/4 py-6 text-lg ">{overview}</p>
      <div className="my-2 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12  text-lg  rounded-lg hover:bg-opacity-50">
          {" "}
          ▶ Play
        </button>
        <button className="hidden md:inline-block  bg-gray-400 text-white p-4 px-12 mx-2 text-lg bg-opacity-50 rounded-lg ">
          ❕More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
