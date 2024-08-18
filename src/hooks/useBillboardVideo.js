import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addBillboardTrailer, addMovieTrailer } from "../store/moviesSlice";

const useBillboardVideo = (movieId, isBillboardTrailer) => {
  const dispatch = useDispatch();
  const getBillboardTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      TMDB_API_OPTIONS
    );
    const movieVideos = await data.json();
    const trailers = movieVideos?.results?.filter(
      (movie) => movie.type === "Trailer"
    );
    const movieTrailer = trailers?.length ? trailers[0] : movieVideos[0];
    if (isBillboardTrailer) {
      dispatch(addBillboardTrailer(movieTrailer));
    } else {
      dispatch(addMovieTrailer(movieTrailer));
    }
  };

  useEffect(() => {
    getBillboardTrailer();
  }, []);
};

export default useBillboardVideo;
