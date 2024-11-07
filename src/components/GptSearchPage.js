import { BG_URL } from '../utils/constants';
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';


const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <img 
          src={BG_URL}
          alt='background-Image'
        />
      </div>

      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
    
};

export default GptSearchPage;