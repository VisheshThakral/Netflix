import React, { useState } from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="cursor-pointer shadow-xl">
      <img
        alt="Movie Card"
        className="min-w-[230px] object-cover rounded max-h-[135px]"
        src={IMG_URL + movie.poster_path}
      />
    </div>
  );
};

export default MovieCard;
