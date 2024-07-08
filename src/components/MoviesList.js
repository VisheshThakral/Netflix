import React from "react";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviesList = ({ title, movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
  };

  return (
    <div className="px-12 mt-[36px]">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <Slider {...settings}>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </Slider>
    </div>
  );
};

export default MoviesList;
