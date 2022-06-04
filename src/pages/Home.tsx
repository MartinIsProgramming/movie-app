import { useEffect, useRef } from 'react';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid';

import { MoviesLayout } from '../components/layout';
import { MovieList } from '../components/MovieList';
import { FilterBy } from '../components/FilterBy';
import { FilterInput } from '../components/FilterInput';

import { useAppDispatch, useAppSelector, useGetDiscoverMovies } from '../hooks';

import { decreaseBy, increaseBy } from '../features/counter/pageCounterSlice';
import { seMyListFromCookies } from '../features/movies/moviesSlice';
import { StandardBtn } from '../components';
import { myMovieList } from '../helpers';

export const Home = () => {
  const { count } = useAppSelector(state => state.pageCounter);
  const { discoverMovies } = useGetDiscoverMovies(count);
  const { myMovies } = useAppSelector(state => state.movies);

  const dispatch = useAppDispatch();

  // This mounted functionality is necessary since React 18. the [] dependency does not assure
  // the useEffect will run once but twice. There is a lot of debate about this new "feature"
  // of React since the last release. But since my friend Dan Abramov
  // is suggesting that we should embrace this behavior...well... this is my work around.
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (mounted.current) return;
    try {
      mounted.current = true;
      const cookieProducts = myMovieList.checkForMoviesInCookies();
      dispatch(seMyListFromCookies(cookieProducts));
    } catch (error) {
      mounted.current = true;
      dispatch(seMyListFromCookies({ movies: [], total: 0, moviesId: [] }));
    }
  }, [dispatch]);

  useEffect(() => {
    myMovieList.addMovieToCookies(myMovies);
  }, [myMovies]);

  return (
    <MoviesLayout>
      <div className="bg-[#080808] px-6 lg:px-[5rem] xl:px-[3rem] grid-cols-1 py-16 text-white grid md:grid-cols-12 md:gap-x-5">
        <div className="col-span-6 md:col-span-3">
          <FilterBy />
        </div>
        <div className="col-span-6 space-y-10 md:col-span-9">
          <FilterInput className="relative text-gray-600 focus-within:text-gray-400" />
          <div className="space-y-14">
            {myMovies.movies.length > 0 && (
              <MovieList
                sectionTitle="My List"
                movies={myMovies.movies}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12"
              />
            )}
          </div>

          <div className="space-y-10">
            <MovieList
              sectionTitle="Discover"
              movies={discoverMovies}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12"
            />
            <div className="flex justify-end space-x-3">
              <StandardBtn
                type="button"
                text="Previous"
                textClassNames="text-sm"
                withIcon
                iconElement={<ChevronDoubleLeftIcon className="order-first w-5 h-5 mr-3" />}
                onClick={() => dispatch(decreaseBy(1))}
                disable={count === 1}
                className="bg-[#131313] py-2 rounded-lg px-3 flex items-center disabled:text-gray-600 border-none"
              />

              <StandardBtn
                type="button"
                text="Next"
                textClassNames="text-sm"
                withIcon
                iconElement={<ChevronDoubleRightIcon className="w-5 h-5" />}
                onClick={() => dispatch(increaseBy(1))}
                className="bg-[#131313] py-2 rounded-lg px-3 flex items-center space-x-3 disabled:text-gray-600 border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </MoviesLayout>
  );
};
