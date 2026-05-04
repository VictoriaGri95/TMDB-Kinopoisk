import {
  useFetchNowPlayingFilmsQuery,
  useFetchPopularFilmsQuery,
  useFetchTopRatedFilmsQuery,
  useFetchUpcomingFilmsQuery
} from "@/features/films/api/filmsApi.ts";
import {useParams} from "react-router";
import {CategoryBar, Pagination} from "@/common/components";
import {MovieCard} from "@/features/films/ui/MovieCard/MovieCard.tsx";
import s from './CategoryPage.module.css'
import {useState} from "react";


type CategoryType = 'popular' | 'top_rated' | 'upcoming' | 'now_playing';

const CATEGORY_META: Record<CategoryType, string> = {
  popular: 'Popular Movies',
  top_rated: 'Top Rated Movies',
  upcoming: 'Upcoming Movies',
  now_playing: 'Now Playing Movies',
};

const VALID_CATEGORIES = Object.keys(CATEGORY_META) as CategoryType[];


export const CategoryPage = () => {
  const {category} = useParams<{ category: string }>();
  const [currentPage, setCurrentPage] = useState(1);

  const validCategory: CategoryType =
    category && VALID_CATEGORIES.includes(category as CategoryType)
      ? (category as CategoryType)
      : 'popular';


  const handleCategoryClick = () => {
    setCurrentPage(1);
  };
  const popularQuery = useFetchPopularFilmsQuery(
    {page: currentPage},
    {skip: validCategory !== 'popular'}
  );
  const topRatedQuery = useFetchTopRatedFilmsQuery(
    {page: currentPage},
    {skip: validCategory !== 'top_rated'}
  );
  const upcomingQuery = useFetchUpcomingFilmsQuery(
    {page: currentPage},
    {skip: validCategory !== 'upcoming'}
  );
  const nowPlayingQuery = useFetchNowPlayingFilmsQuery(
    {page: currentPage},
    {skip: validCategory !== 'now_playing'}
  );

  const queryMap: Record<CategoryType, typeof popularQuery> = {
    popular: popularQuery,
    top_rated: topRatedQuery,
    upcoming: upcomingQuery,
    now_playing: nowPlayingQuery,
  };

  const {data, isFetching} = queryMap[validCategory];

  const items = isFetching
    ? Array.from({length: 20}, () => undefined)
    : data?.results;

  return (
    <section className={s.container}>
      <h1 className={s.title}>Movies Catalog</h1>
      <CategoryBar onCategoryClick={handleCategoryClick} />
      <h2 className={s.categoryTitle}>{CATEGORY_META[validCategory]}</h2>
      <div className={s.grid}>
        {items?.map((movie, i) => (
          <MovieCard
            key={movie ? movie.id : `skeleton-${i}`}
            movie={movie}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagesCount={data?.total_pages || 1}
      />
    </section>
  );
};