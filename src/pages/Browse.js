import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "../components/Header";
import Billboard from "./Billboard";
import BrowseMovieLists from "./BrowseMovieLists";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Browse = () => {
  const search = useSelector((store) => store.search);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/browse?q=" + search.searchItem);
    if (!search.searchItem) {
      navigate("/browse")
    }
  }, [search.searchItem]);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      {!search.searchItem ? (
        <>
          <Billboard />
          <BrowseMovieLists />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Browse;
