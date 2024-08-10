import React, { useState } from "react";
import { IMG_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHovering = () => setIsHovered(!isHovered);
  return (
    <div
      className={"cursor-pointer shadow-xl" + (isHovered ? " " : "")}
    >
      <img
        alt="Movie Card"
        className={
          "min-w-[255px] object-cover rounded " + (isHovered ? "max-h-32" : "max-h-32")
        }
        src={IMG_URL + movie.poster_path}
        onMouseEnter={toggleHovering}
        onMouseLeave={toggleHovering}
      />
    </div>
  );
};

export default MovieCard;
