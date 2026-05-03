import {Pagination, SearchBar} from "@/common/components";
import {useSearchParams} from "react-router";
import {
  useFetchSearchMoviesQuery,
} from "@/features/films/api/filmsApi.ts";
import s from './SearchPage.module.css';
import {MovieCard} from "@/features/films/ui/MovieCard/MovieCard.tsx";
import {useState} from "react";


export const SearchPage = () => {

  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1)
  const query = searchParams.get('query') || '';
  const {data, isLoading} = useFetchSearchMoviesQuery(
    {query, params: {page: currentPage}},
    {skip: !query}
  );

  if (!query) {
    return (
      <section className={s.container}>
        <h1 className={s.title}>Search Movies</h1>
        <SearchBar />
        <div className={s.empty}>
          <p>Enter a movie title to start searching</p>
        </div>
      </section>
    );
  }


  if (data && !data.results.length && !isLoading) {
    return (
      <section className={s.container}>
        <h1 className={s.title}>Search Movies</h1>
        <SearchBar />
        <div className={s.resultsInfo}>
          <p> Results for
            <span className={s.query}> "{query}"</span>
          </p>
        </div>
        <div className={s.noResults}>
          <p>No matches found for "{query}"</p>
        </div>
      </section>
    );
  }


  return (
    <section className={s.container}>
      <h1 className={s.title}>Search Movies</h1>
      <SearchBar />

      <div className={s.resultsInfo}>
        <p> Results for
          <span className={s.query}> "{query}"</span>
        </p>
      </div>

      <div className={s.grid}>
        {data?.results.map((movie) => (
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

