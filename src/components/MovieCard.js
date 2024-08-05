import React from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="cursor-pointer shadow-xl">
      <img alt="Movie Card" className="max-h-[128px] min-w-[255px] object-cover" src={IMG_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
