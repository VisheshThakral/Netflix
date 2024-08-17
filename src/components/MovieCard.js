import React, { useState } from "react";
import { IMG_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/browse?preview=" + movie.id)
  }
  return (
    <div className="cursor-pointer shadow-xl">
      <img
        alt="Movie Card"
        className="min-w-[230px] object-cover rounded max-h-[135px]"
        src={IMG_URL + movie.poster_path}
        onClick={handleCardClick}
      />
    </div>
  );
};

export default MovieCard;
