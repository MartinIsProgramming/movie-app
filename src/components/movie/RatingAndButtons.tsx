import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MinusIcon, PlayIcon, PlusIcon } from '@heroicons/react/solid';
import { Rating, StandardBtn } from '..';
import { MovieContext } from '../../context/MovieContext';

import { useAddAndRemoveFromList, useAppSelector } from '../../hooks';
import { myMovieList } from '../../helpers';

const RatingAndButtons = () => {
  const { movie } = useContext(MovieContext);
  const { moviesId } = useAppSelector(state => state.movies.myMovies);

  const { handleAddToList, handleRemoveFromList } = useAddAndRemoveFromList({
    movie,
    movieId: movie.id,
  });

  return (
    <div className="items-center mt-auto space-y-3">
      <Rating
        voteAverage={movie.vote_average}
        className="flex items-center justify-center"
        fullStarStyle="w-5 h-5"
        emptyStarStyle="w-4 h-4"
      />
      <div className="space-x-4">
        <Link to={`/movie/${movie.title}?movieId=${movie.id}`}>
          <StandardBtn
            type="button"
            withIcon
            iconElement={<PlayIcon className="w-5 h-5 text-sm" />}
            primary
            className="px-3 py-3"
          />
        </Link>
        {myMovieList.inMyList(movie.id, moviesId) ? (
          <StandardBtn
            onClick={handleRemoveFromList}
            type="button"
            withIcon
            iconElement={<MinusIcon className="h-5 w-5 text-sm text-[#192AC3]" />}
            className="px-3 py-3 bg-white"
          />
        ) : (
          <StandardBtn
            onClick={handleAddToList}
            type="button"
            withIcon
            iconElement={<PlusIcon className="h-5 w-5 text-sm text-[#192AC3]" />}
            className="px-3 py-3 bg-white"
          />
        )}
      </div>
    </div>
  );
};

export default RatingAndButtons;
