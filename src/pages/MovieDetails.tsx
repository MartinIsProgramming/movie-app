import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MoviesDetailsLayout } from '../components/layout';
import { MovieList } from '../components/MovieList';

import { useAppSelector, useGetSimilarMovies, useGetTopRatedMovies } from '../hooks';
import { myMovieList } from '../helpers';

export const MovieDetails = () => {
  const { myMovies } = useAppSelector(state => state.movies);
  const [params] = useSearchParams();
  const movieId = params.get('movieId')!;

  const { similarMovies } = useGetSimilarMovies(movieId);
  const { topRatedMovies } = useGetTopRatedMovies();

  useEffect(() => {
    myMovieList.addMovieToCookies(myMovies);
  }, [myMovies]);

  return (
    <MoviesDetailsLayout bannerId={Number(params.get('movieId'))}>
      <div className="bg-[#080808] px-12 lg:px-[5rem] xl:px-40 grid-cols-1 py-16 text-white grid md:grid-cols-12 md:gap-x-5">
        <div className="col-span-6 space-y-10 md:col-span-12">
          <div className="space-y-16">
            {similarMovies.length > 0 && (
              <MovieList
                sectionTitle="Browse Similar Titles"
                movies={similarMovies}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-12"
                isMovieDetailsPage
              />
            )}

            <MovieList
              sectionTitle="Best Rated"
              movies={topRatedMovies}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-12"
              isMovieDetailsPage
            />
          </div>
        </div>
      </div>
    </MoviesDetailsLayout>
  );
};
