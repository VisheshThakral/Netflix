import React from "react";
import { useSelector } from "react-redux";
import useBillboardVideo from "../hooks/useBillboardVideo";

const VideoBackground = ({ movieId }) => {
  const movieTrailer = useSelector((store) => store.movies?.billboardTrailer);

  useBillboardVideo(movieId);

  return (
    <div className="max-w-full">
      <iframe
        className="max-w-full w-screen aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
