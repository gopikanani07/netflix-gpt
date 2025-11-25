
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const usePopularMovies=()=>{
     const dispatch = useDispatch();
     const populatMovies =useSelector(store=>store.movies.populatMovies)
  const getusePopularMovies = async () => {
  

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    if(!populatMovies){
    getusePopularMovies();
    }
  }, []);

}
export default usePopularMovies