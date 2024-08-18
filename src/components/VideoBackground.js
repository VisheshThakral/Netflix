import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";
import useBillboardVideo from "../hooks/useBillboardVideo";
import { IMG_URL_HD } from "../utils/constants";

const VideoBackground = ({ movieId, posterPath, isBillboardTrailer }) => {
  const movieTrailer = useSelector((store) =>
    isBillboardTrailer
      ? store.movies?.billboardTrailer
      : store.movies?.movieTrailer
  );
  const [isVideoOnMute, setIsVideoOnMute] = useState(true);
  const [showYouTubeVideo, setShowYouTubeVideo] = useState(false);
  const opts = {
    playerVars: {
      autoplay: 1,
      mute: isVideoOnMute,
      cc_load_policy: 1
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setShowYouTubeVideo(true);
    }, 1000);
  }, [])

  useBillboardVideo(movieId, isBillboardTrailer);

  const handleSoundButtonClick = () => {
    setIsVideoOnMute(!isVideoOnMute);
  };

  const handleYouTubeVideoEnd = () => {
    setShowYouTubeVideo(false);
  };

  return (
    <div className="w-full overflow-hidden">
      {!showYouTubeVideo ? (
        <img
          src={IMG_URL_HD + posterPath}
          alt="Movie Image"
          className="w-full h-screen object-cover"
        />
      ) : (
        <YouTube
          videoId={movieTrailer?.key}
          opts={opts}
          iframeClassName="w-full aspect-video scale-[1.35] h-full"
          onEnd={handleYouTubeVideoEnd}
        />
      )}

      <button
        aria-label="Turn audio on"
        className="text-white absolute top-[65%] z-30 right-14 focus:outline-double rounded-full"
        onClick={handleSoundButtonClick}
      >
        <div
          className="border-2 border-white p-2 rounded-full"
          role="presentation"
        >
          {!isVideoOnMute ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              data-icon="VolumeHighStandard"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 12C24 8.28693 22.525 4.72597 19.8995 2.10046L18.4853 3.51468C20.7357 5.76511 22 8.81736 22 12C22 15.1826 20.7357 18.2348 18.4853 20.4852L19.8995 21.8995C22.525 19.2739 24 15.713 24 12ZM11 3.99995C11 3.59549 10.7564 3.23085 10.3827 3.07607C10.009 2.92129 9.57889 3.00685 9.29289 3.29285L4.58579 7.99995H1C0.447715 7.99995 0 8.44767 0 8.99995V15C0 15.5522 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0786 10.3827 20.9238C10.7564 20.7691 11 20.4044 11 20V3.99995ZM5.70711 9.70706L9 6.41417V17.5857L5.70711 14.2928L5.41421 14H5H2V9.99995H5H5.41421L5.70711 9.70706ZM16.0001 12C16.0001 10.4087 15.368 8.88254 14.2428 7.75732L12.8285 9.17154C13.5787 9.92168 14.0001 10.9391 14.0001 12C14.0001 13.0608 13.5787 14.0782 12.8285 14.8284L14.2428 16.2426C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92889C18.9462 6.80426 19.9998 9.3478 19.9998 12C19.9998 14.6521 18.9462 17.1957 17.0709 19.071L15.6567 17.6568C17.157 16.1565 17.9998 14.1217 17.9998 12C17.9998 9.87823 17.157 7.8434 15.6567 6.34311L17.0709 4.92889Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              data-icon="VolumeOffStandard"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </div>
      </button>
    </div>
  );
};

export default VideoBackground;
