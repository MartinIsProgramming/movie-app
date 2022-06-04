import { FC } from 'react';
import { useGetBannerMovie } from '../../hooks';
import { BannerButtons } from './BannerButtons';

interface Props {
  bannerId?: number;
}

export const MovieDetailsBanner: FC<Props> = ({ bannerId }) => {
  const { bannerMovie } = useGetBannerMovie(bannerId || Number(process.env.REACT_APP_BANNER_MOVIE));

  if (!bannerMovie) {
    return <></>;
  }

  return (
    <div className="text-white bg-gradient-to-r from-black to-gray-500 relative md:h-[30rem] xl:h-[35rem] h-[55rem] sm:h-[50rem] overflow-hidden">
      <img
        src={
          bannerMovie.backdrop_path
            ? `${process.env.REACT_APP_MOVIE_IMAGE_URL}/${bannerMovie.backdrop_path}`
            : '/images/no-image-banner.jpg'
        }
        className="absolute object-cover w-full h-full mix-blend-overlay"
        alt={`${bannerMovie.title}`}
      />

      <div className="absolute z-20 grid p-10 md:grid-cols-12 md:gap-x-8 lg:pt-20 xl:px-40">
        <div className="col-span-12 pb-10 md:col-span-3 lg:col-span-2 md:pb-0">
          <img
            src={
              bannerMovie.poster_path
                ? `${process.env.REACT_APP_MOVIE_IMAGE_URL}/${bannerMovie.poster_path}`
                : '/images/no-image.jpg'
            }
            alt={bannerMovie.title}
            className="rounded-lg h-[240px]"
          />
        </div>

        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          <div className="flex flex-col">
            <div className="flex order-2 mb-2 space-x-5 text-gray-400 md:order-1">
              <span className="font-poppins">{bannerMovie.genres[0]?.name}</span>
              <span className="font-poppins">{bannerMovie.release_date?.slice(0, 4)}</span>
              {/* SAME AS IN THE MOVIES INFO. DON'T KNOW WHERE THIS DATA IS COMING FROM IN THE API */}
              <span className="font-poppins">2hr 6min</span>
            </div>
            <div className="order-1 md:order-2 font-arvo">
              <h1 className="xl:text-7xl mb-2.5 text-4xl md:text-4xl lg:text-5xl">
                {bannerMovie.original_title}
              </h1>
            </div>
            <div className="order-3">
              <p className="max-w-6xl text-sm leading-6 xl:text-base font-poppins line-clamp-3">
                {bannerMovie.overview}
              </p>
            </div>
            <div className="flex flex-col order-4 mt-10 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
              <BannerButtons bannerMovie={bannerMovie} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
