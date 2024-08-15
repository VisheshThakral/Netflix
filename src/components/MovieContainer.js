import React, { useState } from "react";
import MoviePreview from "./MoviePreview";
import MovieCard from "./MovieCard";
import { debounce } from "lodash";

const MovieContainer = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="movie-container relative"
      onMouseEnter={debounce(() => setIsHovered(true), 1000)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MovieCard movie={movie} />
      {isHovered && (
        <div className="absolute top-[0px] left-0 w-full h-full z-50">
          <MoviePreview movie={movie} />
        </div>
      )}
    </div>
  );
};

export default MovieContainer;
