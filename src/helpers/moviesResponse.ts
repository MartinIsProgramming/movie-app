import { Genres, MoviesResponse } from '../interfaces/movie';

interface Promises {
  genres: Promise<Genres[]>;
  movies: Promise<MoviesResponse>;
}

export const generateMoviesWithGenres = async (promises: Promises) => {
  const res = await Promise.all([promises.genres, promises.movies]);
  const genresRes = res[0];
  const moviesRes = res[1];
  const movies = res[1].results;

  const moviesWithGenres = movies.map(movie => {
    let newGenreArr = [];

    for (let value of movie.genre_ids) {
      for (let genre of genresRes) {
        if (value === genre.id) {
          newGenreArr.push(genre);
        }
      }
    }

    return {
      ...movie,
      genres: newGenreArr,
    };
  });

  return {
    genresRes,
    moviesRes,
    moviesWithGenres,
  };
};
