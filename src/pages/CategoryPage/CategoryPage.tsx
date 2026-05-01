import {
  useFetchNowPlayingFilmsQuery,
  useFetchPopularFilmsQuery,
  useFetchTopRatedFilmsQuery, useFetchUpcomingFilmsQuery
} from "@/features/films/api/filmsApi.ts";
import {useParams, useSearchParams} from "react-router";
import {CategoryBar, Pagination} from "@/common/components";
import {MovieCard} from "@/features/films/ui/MovieCard/MovieCard.tsx";
import s from './CategoryPage.module.css'



type CategoryType = 'popular' | 'top_rated' | 'upcoming' | 'now_playing';

const CATEGORY_META: Record<CategoryType, string> = {
  popular:     'Popular Movies',
  top_rated:   'Top Rated Movies',
  upcoming:    'Upcoming Movies',
  now_playing: 'Now Playing Movies',
};

const VALID_CATEGORIES = Object.keys(CATEGORY_META) as CategoryType[];


export const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const validCategory: CategoryType =
    category && VALID_CATEGORIES.includes(category as CategoryType)
      ? (category as CategoryType)
      : 'popular';

  const currentPage = Number(searchParams.get('page') ?? '1');

  const setCurrentPage = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  const popularQuery    = useFetchPopularFilmsQuery(
    { page: currentPage },
    { skip: validCategory !== 'popular' }
  );
  const topRatedQuery   = useFetchTopRatedFilmsQuery(
    { page: currentPage },
    { skip: validCategory !== 'top_rated' }
  );
  const upcomingQuery   = useFetchUpcomingFilmsQuery(
    { page: currentPage },
    { skip: validCategory !== 'upcoming' }
  );
  const nowPlayingQuery = useFetchNowPlayingFilmsQuery(
    { page: currentPage },
    { skip: validCategory !== 'now_playing' }
  );

  const queryMap: Record<CategoryType, typeof popularQuery> = {
    popular:     popularQuery,
    top_rated:   topRatedQuery,
    upcoming:    upcomingQuery,
    now_playing: nowPlayingQuery,
  };

  const { data, isLoading } = queryMap[validCategory];



  if (isLoading) return <div className={s.loading}>Loading...</div>;
  if (!data?.results) return <div className={s.empty}>No movies found</div>;

  return (
    <section className={s.container}>
      <h1 className={s.title}>Movies Catalog</h1>
      <CategoryBar />
      <h2 className={s.categoryTitle}>{CATEGORY_META[validCategory]}</h2>
      <div className={s.grid}>
        {data.results.map((movie) => (
          <MovieCard
            key={movie.id}
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