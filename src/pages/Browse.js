import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "../components/Header";
import Billboard from "./Billboard";
import DetailModal from "./DetailModal";
import BrowseMovieLists from "./BrowseMovieLists";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Browse = () => {
  const search = useSelector((store) => store.search);
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get("preview")) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [location]);

  useEffect(() => {
    navigate("/browse?q=" + search.searchItem);
    if (!search.searchItem) {
      navigate("/browse");
    }
  }, [search.searchItem]);

  const closeModal = () => setShowModal(false);

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
      {showModal && <DetailModal onClose={closeModal} />}
    </>
  );
};

export default Browse;
