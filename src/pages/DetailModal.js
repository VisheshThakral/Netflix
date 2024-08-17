import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import VideoBackground from "../components/VideoBackground";

const DetailModal = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieId = queryParams.get("preview");

  const getMovieDetails = () => {};

  useEffect(() => {
    getMovieDetails();
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white w-2/3 rounded-lg overflow-scroll shadow-lg transform transition-transform duration-300 ${
          show ? "scale-100" : "scale-90"
        }`}
      >
        <div className="max-h-[580px] overflow-hidden relative">
          <VideoBackground movieId={movieId} />
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute right-7 top-7 rounded-full cursor-pointer text-white"
            size="lg"
            onClick={handleClose}
          />
        </div>
        <div className="p-6">
          <h2>Modal Title</h2>
          <p>This is a modal triggered by a query parameter.</p>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
