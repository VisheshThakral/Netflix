import React from "react";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviesList = ({ title, movies }) => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <FontAwesomeIcon
        icon={faChevronRight}
        onClick={onClick}
        className="text-white cursor-pointer absolute h-12 right-[-2%] bottom-[38%]"
      />
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <FontAwesomeIcon
        icon={faChevronLeft}
        onClick={onClick}
        className="text-white cursor-pointer absolute h-12 z-30 left-[-3%] bottom-[38%]"
      />
    );
  }

  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="px-[4%] my-[3vw]">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <Slider {...settings}>
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            className="mr-3"
          />
        ))}
      </Slider>
    </div>
  );
};

export default MoviesList;
