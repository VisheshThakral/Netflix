import React, { useState } from "react";
import MoviePreview from "./MoviePreview";
import MovieCard from "./MovieCard";

const MovieContainer = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  return (
    <div
      className="movie-container"
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          top: rect.top,
          left: rect.left,
        });
        setIsHovered(true);
      }}
    >
      <MovieCard movie={movie} />
      {isHovered && <MoviePreview movie={movie} position={position} />}
    </div>
  );
};

export default MovieContainer;
