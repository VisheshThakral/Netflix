import React from "react";
import { IMG_URL } from "../utils/constants";

const MoviePreview = ({ movie }) => {
  return (
    <div className="cursor-pointer relative shadow-xl z-50 transition-all duration-300 transform scale-110">
      <img
        alt="Movie Preview"
        className="min-w-80 object-cover rounded max-h-52"
        src={IMG_URL + movie.poster_path}
      />
      <div className="absolute bottom-0 left-0 w-full bg-opacity-75 bg-black text-white p-2">
        <h3>{movie.title}</h3>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default MoviePreview;