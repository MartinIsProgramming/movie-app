import { useEffect, useState } from 'react';
import { movies } from '../api';
import { Genres } from '../interfaces/movie';

export const useGetGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);

  const getGenres = async () => {
    const genres = await movies.fetchGenres();
    setGenres(genres);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return {
    genres,
  };
};
