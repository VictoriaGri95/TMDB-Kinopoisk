import {
  useFetchNowPlayingFilmsQuery,
  useFetchPopularFilmsQuery,
  useFetchTopRatedFilmsQuery, useFetchUpcomingFilmsQuery
} from "@/features/films/api/filmsApi.ts";
import {useParams} from "react-router";
import {CategoryBar} from "@/common/components";
import {MovieCard} from "@/features/films/ui/MovieCard/MovieCard.tsx";
import s from './CategoryPage.module.css'


type CategoryType = 'popular' | 'top_rated' | 'upcoming' | 'now_playing';

export const CategoryPage = () => {
  const {category} = useParams<{ category: CategoryType }>();

  const validCategory: CategoryType =
    category && ['popular', 'top_rated', 'upcoming', 'now_playing'].includes(category)
      ? category as CategoryType
      : 'popular';

  const popularQuery = useFetchPopularFilmsQuery({});
  const topRatedQuery = useFetchTopRatedFilmsQuery({});
  const upcomingQuery = useFetchUpcomingFilmsQuery({});
  const nowPlayingQuery = useFetchNowPlayingFilmsQuery({});

  // Выбираем нужные данные в зависимости от категории
  const getDataByCategory = () => {
    switch (validCategory) {
      case 'popular':
        return popularQuery;
      case 'top_rated':
        return topRatedQuery;
      case 'upcoming':
        return upcomingQuery;
      case 'now_playing':
        return nowPlayingQuery;
      default:
        return popularQuery;
    }
  };

  const {data, isLoading} = getDataByCategory();

  const getTitle = () => {
    switch (validCategory) {
      case 'popular':
        return 'Popular Movies';
      case 'top_rated':
        return 'Top Rated Movies';
      case 'upcoming':
        return 'Upcoming Movies';
      case 'now_playing':
        return 'Now Playing Movies';
      default:
        return 'Movies';
    }
  };

  if (isLoading) {
    return <div className={s.loading}>Loading...</div>;
  }

  if (!data?.results) {
    return <div className={s.empty}>No movies found</div>;
  }

  return (
    <div className={s.container}>
      <h1 className={s.title}>Movies Catalog</h1>
      <CategoryBar />
      <h2 className={s.categoryTitle}>{getTitle()}</h2>
      <div className={s.grid}>
        {data.results.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};