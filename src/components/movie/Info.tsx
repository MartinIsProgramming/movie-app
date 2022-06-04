import { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';

const Info = () => {
  const { movie } = useContext(MovieContext);
  return (
    <div className="flex flex-col items-center justify-center mt-auto">
      <h3 className="mt-4 mb-2 font-semibold line-clamp-1">{movie.title}</h3>
      <div className="flex items-center justify-center mb-2 space-x-4 text-sm text-gray-300">
        <span>{movie.release_date?.slice(0, 4)}</span>
        {/* AFTER READING THE DOCS, I COULD NOT FIND WHERE THIS INFORMATION IS COMING FROM */}
        <span>2hr 6min</span>
      </div>
    </div>
  );
};

export default Info;
