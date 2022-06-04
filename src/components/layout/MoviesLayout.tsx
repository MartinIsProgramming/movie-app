import { FC, ReactElement } from 'react';
import { StandardBanner } from '../banner';

interface Props {
  children: ReactElement | ReactElement[];
  bannerId?: number;
}

export const MoviesLayout: FC<Props> = ({ children, bannerId }) => {
  return (
    <>
      <StandardBanner bannerId={bannerId} />
      {children}
    </>
  );
};
