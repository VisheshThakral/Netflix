import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "../components/Header";
import Billboard from "./Billboard";
import BrowseMovieLists from "./BrowseMovieLists";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    
    <div>
      <Header />
      <Billboard />
      <BrowseMovieLists />
    </div>
  );
};

export default Browse;
