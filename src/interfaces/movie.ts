export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type SearchMovieResponse = Omit<MoviesResponse, 'results'> & {
  results: MovieWithGenres[];
};

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type MovieWithGenres = Omit<Movie, 'genre_ids'> & {
  genres: Genres[];
};

export interface GenresResponse {
  genres: Genres[];
}

export interface Genres {
  id: number;
  name: string;
}
