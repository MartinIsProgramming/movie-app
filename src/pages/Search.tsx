import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid';

import { FilterBy } from '../components/FilterBy';
import { FilterInput } from '../components/FilterInput';
import { MoviesLayout } from '../components/layout';
import { MovieList } from '../components/MovieList';

import { decreaseBy, increaseBy } from '../features/counter/pageCounterSlice';

import { useAppDispatch, useAppSelector, useGetSearchMovies } from '../hooks';
import { StandardBtn } from '../components';
import { myMovieList } from '../helpers';

export const Search = () => {
  const [params] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const searchTerm = params.get('movie')!;

  const { count } = useAppSelector(state => state.pageCounter);
  const { myMovies } = useAppSelector(state => state.movies);
  const { searchMovies, totalPages } = useGetSearchMovies(count, searchTerm);

  useEffect(() => {
    navigate(`/search?movie=${searchTerm}&page=${count}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, searchTerm]);

  useEffect(() => {
    if (searchTerm === '') navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    myMovieList.addMovieToCookies(myMovies);
  }, [myMovies]);

  return (
    <MoviesLayout>
      <div className="bg-[#080808] px-12 lg:px-[5rem] xl:px-[3rem] grid-cols-1 py-16 text-white grid md:grid-cols-12 md:gap-x-5">
        <div className="col-span-6 md:col-span-3">
          <FilterBy />
        </div>
        <div className="col-span-6 space-y-10 md:col-span-9">
          <FilterInput className="relative text-gray-600 focus-within:text-gray-400" />

          {searchMovies.length > 0 ? (
            <div className="space-y-10">
              <MovieList
                movies={searchMovies}
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
                  disable={count === totalPages || totalPages === 1}
                  iconElement={<ChevronDoubleRightIcon className="w-5 h-5" />}
                  onClick={() => dispatch(increaseBy(1))}
                  className="bg-[#131313] py-2 rounded-lg px-3 flex items-center space-x-3 disabled:text-gray-600 border-none"
                />
              </div>
            </div>
          ) : (
            <div className="h-56 text-2xl">No movies matching your search. Try something else.</div>
          )}
        </div>
      </div>
    </MoviesLayout>
  );
};
