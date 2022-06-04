import { ReactElement } from 'react';
import { MovieWithGenres } from '../../interfaces/movie';
import { Provider as MovieProvider } from '../../context/MovieContext';

export interface Props {
  movie: MovieWithGenres;
  children: ReactElement | ReactElement[];
  isMovieDetailsPage?: boolean;
}

export const Movie = ({ movie, isMovieDetailsPage, children }: Props) => {
  return (
    <MovieProvider value={{ movie, isMovieDetailsPage }}>
      <div className="bg-[#131313] p-5 rounded-xl flex justify-center  flex-col text-center relative transition-all duration-700 ease-in-out hover:scale-105 hover:translate-y-4 hover:bg-[#2D2D2D]">
        {children}
      </div>
    </MovieProvider>
  );
};
