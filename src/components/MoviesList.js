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
      <div className="bottom-0 right-0 absolute cursor-pointer flex items-center max-h-32 h-full z-50 icon px-2">
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => {
            onClick();
            setNextClicked(true);
          }}
          className="text-white h-16 slick-arrow right"
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="bottom-0 left-0 absolute cursor-pointer flex items-center max-h-32 h-full z-50 icon px-2">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={onClick}
          className="text-white h-16 z-50 slick-arrow left"
        />
      </div>
    );
  }

  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
  };

  if (window.innerWidth < 1600) {
    settings['slidesToShow'] = 6;
    settings['slidesToScroll'] = 5;
  }

  if (nextClicked) {
    settings["prevArrow"] = <SamplePrevArrow />;
  }

  return (
    <div className={"my-[3vw] overflow-hidden max-w-[100vw]"}>
      <h1 className="text-2xl pl-14 py-4 text-white">{title}</h1>
      <div className={`transition-all duration-500 ${nextClicked ? 'pl-0 clicked' : 'pl-14'}`}>
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
