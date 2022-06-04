import { FC } from 'react';
import { MovieWithGenres } from '../interfaces/movie';
import { Movie } from './movie';

interface Props {
  sectionTitle?: string;
  movies: MovieWithGenres[];
  className: string;
  isMovieDetailsPage?: boolean;
}

export const MovieList: FC<Props> = ({
  sectionTitle,
  movies,
  className,
  isMovieDetailsPage = false,
}) => {
  return (
    <section>
      {sectionTitle && (
        <h3 className="mb-6 text-2xl font-semibold capitalize font-poppins">{sectionTitle}</h3>
      )}
      <div className={className}>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} isMovieDetailsPage={isMovieDetailsPage}>
            <Movie.Image />
            <Movie.Info />
            <Movie.RatingAndButtons />
          </Movie>
        ))}
      </div>
    </section>
  );
};
