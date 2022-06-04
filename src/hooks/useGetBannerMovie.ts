import { useEffect, useState } from 'react';
import { movies } from '../api';
import { MovieWithGenres } from '../interfaces/movie';

export const useGetBannerMovie = (bannerId: number) => {
  const [bannerMovie, setBannerMovie] = useState<MovieWithGenres>();

  const getBannerInfo = async (bannerId: number) => {
    const bannerMovie = await movies.fetchBanner(bannerId);
    setBannerMovie(bannerMovie);
  };

  useEffect(() => {
    getBannerInfo(bannerId);
  }, [bannerId]);

  return {
    bannerMovie,
  };
};
