import { MinusIcon, PlayIcon, PlusIcon } from '@heroicons/react/solid';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { StandardBtn } from '..';
import { myMovieList } from '../../helpers';

import { useAddAndRemoveFromList, useAppSelector } from '../../hooks';
import { MovieWithGenres } from '../../interfaces/movie';

interface Props {
  bannerMovie: MovieWithGenres;
}

export const BannerButtons: FC<Props> = ({ bannerMovie }) => {
  const { moviesId } = useAppSelector(state => state.movies.myMovies);

  const { handleAddToList, handleRemoveFromList } = useAddAndRemoveFromList({
    movie: bannerMovie,
    movieId: bannerMovie.id,
  });

  return (
    <>
      <Link to={`/movie/${bannerMovie.title}?movieId=${bannerMovie.id}`}>
        <StandardBtn
          type="button"
          primary
          text="Watch now"
          textClassNames="text-xl"
          withIcon
          iconElement={<PlayIcon className="w-6 h-6 text-xl" />}
          className="w-[15rem] h-16 flex items-center justify-between py-3 px-4"
        />
      </Link>

      <StandardBtn
        type="button"
        text={myMovieList.inMyList(bannerMovie.id, moviesId) ? 'Remove from list' : 'Add to list'}
        onClick={() =>
          myMovieList.inMyList(bannerMovie.id, moviesId)
            ? handleRemoveFromList()
            : handleAddToList()
        }
        textClassNames="text-xl"
        withIcon
        iconElement={
          myMovieList.inMyList(bannerMovie.id, moviesId) ? (
            <MinusIcon className="w-6 h-6 text-xl" />
          ) : (
            <PlusIcon className="w-6 h-6 text-xl" />
          )
        }
        className="w-[15rem] h-16 flex items-center justify-between py-3 px-4"
      />
    </>
  );
};
