import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {

  const dispatch = useDispatch();
  // fetch trailer video && updating the store with trailer video data

  // Memoization
  //const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
     const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS);
     const json = await data.json();

     const filterData = json.results.filter(video => video.type == 'Trailer');
     console.log(filterData);

     const trailer = filterData.length ? filterData[3] : json.results[0];

     dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    //if(!trailerVideo)
    getMovieVideos();
  }, []);

};

export default useMovieTrailer;