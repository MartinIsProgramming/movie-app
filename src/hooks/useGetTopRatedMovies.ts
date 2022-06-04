import { useEffect, useState } from 'react';
import { movies } from '../api';
import { MovieWithGenres } from '../interfaces/movie';

export const useGetTopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<MovieWithGenres[]>([]);

  const getSimilarTitles = async () => {
    const results = await movies.getTopRatedMoviesWithGenres();
    const firstFiveMovies = results.slice(0, 5);
    setTopRatedMovies(firstFiveMovies);
  };

  useEffect(() => {
    getSimilarTitles();
  }, []);

  return {
    topRatedMovies,
  };
};
