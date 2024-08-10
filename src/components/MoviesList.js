import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slick.css";

const MoviesList = ({ title, movies }) => {
  const [nextClicked, setNextClicked] = useState(false);
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="bottom-0 right-[1%] absolute flex items-center max-h-32 h-full z-50 bg-[hsla(0, 0%, 8%, .5)]">
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => {
            onClick();
            setNextClicked(true);
          }}
          className="text-white cursor-pointer h-12 slick-arrow right"
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="bottom-0 left-[1%] absolute flex items-center max-h-32 h-full z-50 bg-[hsla(0, 0%, 8%, .5)]">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={onClick}
          className="text-white cursor-pointer h-12 z-50 slick-arrow left"
        />
      </div>
    );
  }

  let settings = {
    infinite: true,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
  };

  if (nextClicked) {
    settings["prevArrow"] = <SamplePrevArrow />;
  }

  return (
    <div className={"my-[3vw] pl-[4%] overflow-hidden max-w-[100vw]"}>
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div>
        <Slider {...settings}>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} className="mr-3" />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MoviesList;
