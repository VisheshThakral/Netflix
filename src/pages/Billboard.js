import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "../components/VideoTitle";
import VideoBackground from "../components/VideoBackground";

const Billboard = () => {
  const getRandomMovie = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  };

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const billboardMovie = movies[getRandomMovie(0, movies.length)];
  const { id, overview, title } = billboardMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <div className="max-w-full">
        <VideoBackground movieId={id} />
      </div>
    </div>
  );
};

export default Billboard;
