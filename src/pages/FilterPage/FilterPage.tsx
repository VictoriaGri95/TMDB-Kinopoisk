import {
  useFetchDiscoverMoviesQuery,
  useFetchMovieListByGenreQuery
} from "@/features/films/api/filmsApi.ts";
import {SortBy, type SortByType} from "@/common/enums";
import {useState} from "react";
import {Pagination, Sidebar} from "@/common/components";
import s from "./FilterPage.module.css";
import {MovieCard} from "@/features/films/ui/MovieCard/MovieCard.tsx";
import {useDebounceValue} from "@/common/hooks";


export const FilterPage = () => {

  const [sortBy, setSortBy] = useState<SortByType>(SortBy.POPULARITY_DESC);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [ratingRange, setRatingRange] = useState<[number, number]>([0, 10]);

  const debounceRange = useDebounceValue(ratingRange)
  const [min, max] = debounceRange;


  const [currentPage, setCurrentPage] = useState(1)

  const {data: discoverMoviesData, isFetching} = useFetchDiscoverMoviesQuery({
    sort_by: sortBy,
    vote_average_gte: min > 0 ? min : undefined,
    vote_average_lte: max < 10 ? max : undefined,
    with_genres: selectedGenres.length ? selectedGenres.join(',') : undefined,
    page: currentPage,
  })

  const {data: genresData} = useFetchMovieListByGenreQuery(undefined)


  const resetFilters = () => {
    setSortBy(SortBy.POPULARITY_DESC);
    setRatingRange([0, 10]);
    setSelectedGenres([]);
    setCurrentPage(1)

  };


  const handleSortChange = (value: SortByType) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handleGenreToggle = (id: number) => {
    setSelectedGenres((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
    setCurrentPage(1);
  };

  const handleRatingChange = (range: [number, number]) => {
    setRatingRange(range);
  };

  const items = isFetching
    ? Array.from({length: 20}, () => undefined)
    : discoverMoviesData?.results;


  return (
    <section className={s.container}>
      <Sidebar
        sortBy={sortBy}
        onSortChange={handleSortChange}
        selectedGenres={selectedGenres}
        onGenreToggle={handleGenreToggle}
        ratingRange={ratingRange}
        onRatingChange={handleRatingChange}
        onReset={resetFilters}
        genres={genresData?.genres}
      />

      <div className={s.content}>
        {!isFetching && discoverMoviesData?.results.length === 0 && (
          <p>No movies found</p>
        )}

        <div className={s.grid}>
          {items?.map((movie, i) => (
            <MovieCard
              key={movie?.id ?? i}
              movie={movie}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pagesCount={discoverMoviesData?.total_pages || 1}
        />
      </div>
    </section>
  );
};

