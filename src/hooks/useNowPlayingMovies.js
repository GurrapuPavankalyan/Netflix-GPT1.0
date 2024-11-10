import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    // Fetch Data from TMDB API /and update store
    const dispatch = useDispatch();

    //const nowPlayingMovies =  useSelector((store) => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1", 
          API_OPTIONS
        );
        const json = await data.json();

        console.log(json);
        
        dispatch(addNowPlayingMovies(json.results));
      };
    
      useEffect(() => {
       //if(!nowPlayingMovies) 
       getNowPlayingMovies();
      }, []);
};

export default useNowPlayingMovies;