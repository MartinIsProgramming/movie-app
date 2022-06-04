import { useEffect, useState } from 'react';
import { movies } from '../api';
import { MovieWithGenres } from '../interfaces/movie';

export const useGetSimilarMovies = (movieId: string) => {
  const [similarMovies, setSimilarMovies] = useState<MovieWithGenres[]>([]);

  const getSimilarTitles = async (movieId: number) => {
    const results = await movies.fetchSimilarMoviesWithGenre(movieId);
    const firstFiveMovies = results.slice(0, 5);
    setSimilarMovies(firstFiveMovies);
  };

  useEffect(() => {
    getSimilarTitles(Number(movieId));
  }, [movieId]);

  return {
    similarMovies,
  };
};
