import { FC, ReactElement } from 'react';
import { MovieDetailsBanner } from '../banner';

interface Props {
  children: ReactElement | ReactElement[];
  bannerId?: number;
}

export const MoviesDetailsLayout: FC<Props> = ({ children, bannerId }) => {
  return (
    <>
      <MovieDetailsBanner bannerId={bannerId} />
      {children}
    </>
  );
};
