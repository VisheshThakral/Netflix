import React from "react";
import { IMG_URL } from "../utils/constants";

const MoviePreview = ({ movie, position }) => {
  return (
    <div
      className="cursor-pointer shadow-xl transition-all duration-300"
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        width: position.width,
        height: position.height,
        zIndex: 10000,
        transform: "scale(1.5)",
        backgroundColor: "red"
      }}
    >
      <img
        alt="Movie Preview"
        className="min-w-80 object-cover rounded max-h-52"
        src={IMG_URL + movie.poster_path}
      />
      <div className="bg-black text-white p-2">
        <h3>{movie.title}</h3>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default MoviePreview;
