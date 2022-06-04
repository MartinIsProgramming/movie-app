import { useEffect, useState } from 'react';
import { movies } from '../api';
import { MovieWithGenres } from '../interfaces/movie';

export const useGetDiscoverMovies = (count: number) => {
  const [discoverMovies, setDiscoverMovies] = useState<MovieWithGenres[]>([]);

  const getDiscoverMovies = async (pageCount: number) => {
    const results = await movies.fetchDiscoverMoviesWithGenre(pageCount);
    setDiscoverMovies(results);
  };

  useEffect(() => {
    getDiscoverMovies(count);
  }, [count]);

  return {
    discoverMovies,
  };
};
