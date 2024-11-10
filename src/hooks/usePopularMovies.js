import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const usePopularMovies = () => {
    // Fetch Data from TMDB API /and update store
    const dispatch = useDispatch();

    //const popularMovies = useSelector((store) => store.movies.popularMovies);

    const getPopularMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1", 
          API_OPTIONS
        );
        const json = await data.json();

        console.log(json);
        
        dispatch(addPopularMovies(json.results));
      };
    
      useEffect(() => {
        //if(!popularMovies)
        getPopularMovies();
      }, []);
};

export default usePopularMovies;