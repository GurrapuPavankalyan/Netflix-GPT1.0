import { BG_URL } from '../utils/constants';
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';


const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-20">
        <img 
          className='h-screen object-cover'
          src={BG_URL}
          alt='background-Image'
        />
      </div>
      <div className=''>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
      
    </>
  );
    
};

export default GptSearchPage;