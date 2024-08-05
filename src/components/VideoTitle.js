import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="max-w-full w-screen pt-[21%] px-6 md:px-24 absolute text-white aspect-video bg-gradient-to-tr from-black">
      <h1 className="xl:text-5xl 3xl:text-8xl font-bold w-4/5">{title}</h1>
      <p className="py-6 3xl:text-lg w-1/3 max-h-36">
        {overview.length > 180 ? overview.substr(0, 180) + " ..." : overview}
      </p>
      <div>
        <button className="bg-white text-black p-2 px-12 text-xl rounded-lg hover:bg-opacity-80 cursor-pointer">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-2 px-12 text-xl bg-opacity-50 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faCircleInfo} />
          <span className="pl-2">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
