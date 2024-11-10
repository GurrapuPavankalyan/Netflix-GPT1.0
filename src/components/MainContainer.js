import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import { VideoTitle } from './VideoTitle';

export const MainContainer = () => {
    const movies = useSelector(store => store.movies?.popularMovies);
    if (!movies || movies.length === 0) return null;
    const mainMovie = movies[0];
    if (!mainMovie) return null;
    const { original_title, overview, id } = mainMovie;
    console.log(mainMovie);

  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>       
    </div>
  );
};

export default MainContainer;