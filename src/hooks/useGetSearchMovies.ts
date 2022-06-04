import { useEffect, useState } from 'react';
import { movies } from '../api';
import { MovieWithGenres } from '../interfaces/movie';

export const useGetSearchMovies = (count: number, searchTerm: string) => {
  const [searchMovies, setSearchMovies] = useState<MovieWithGenres[]>([]);
  const [totalPages, setTotalPages] = useState<number>();

  const getSearchMovies = async (searchTerm: string, pageNumber: number) => {
    const { results, total_pages } = await movies.fetchSearchMoviesWithGenres({
      searchTerm,
      pageNumber,
    });
    setSearchMovies(results);
    setTotalPages(total_pages);
  };

  useEffect(() => {
    getSearchMovies(searchTerm, count);
  }, [count, searchTerm]);

  return {
    searchMovies,
    totalPages,
  };
};
