import React from "react";
import MoviesList from "../components/MoviesList";
import { useSelector } from "react-redux";

const BrowseMovieLists = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-gradient-to-b from-[#141616] to-[#141414] pb-24">
      <div className="xl:-mt-52 2xl:-mt-72 z-20 relative">
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} className="z-20" />
        <MoviesList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MoviesList title={"Popular"} movies={movies.popularMovies} />
        <MoviesList title={"Top Rated"} movies={movies.topRatedMovies} />
      </div>
    </div>
  );
};

export default BrowseMovieLists;
