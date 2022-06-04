import { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';

const Image = () => {
  const { movie, isMovieDetailsPage } = useContext(MovieContext);

  return (
    <div className="relative h-full">
      <img
        src={
          movie.poster_path
            ? `${process.env.REACT_APP_MOVIE_IMAGE_URL}/${movie.poster_path}`
            : '/images/no-image.jpg'
        }
        alt={movie.title}
        className="min-h-full rounded aspect-auto"
      />
      {!isMovieDetailsPage && movie.genres[0] && (
        <span className="absolute  bg-[#192AC3] rounded-b-lg left-1/2 -translate-x-1/2 top-0 font-poppins text-sm py-1.5 px-3.5 uppercase">
          {movie.genres[0].name}
        </span>
      )}
    </div>
  );
};

export default Image;
