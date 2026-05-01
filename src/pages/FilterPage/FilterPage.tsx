import {
  useFetchDiscoverMoviesQuery,
  useFetchMovieListByGenreQuery
} from "@/features/films/api/filmsApi.ts";
import {SortBy, type SortByType} from "@/common/enums";
import { useState} from "react";
import {RangeSlider} from "@/common/components";
import s from "./FilterPage.module.css";
import {MovieCard} from "@/features/films/ui/MovieCard/MovieCard.tsx";

export const FilterPage = () => {

  const [sortBy, setSortBy] = useState<SortByType>(SortBy.POPULARITY_DESC);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [ratingRange, setRatingRange] = useState<[number, number]>([0, 10]);
  const [min, max] = ratingRange;

  const {data: discoverMoviesData} = useFetchDiscoverMoviesQuery({
    sort_by: sortBy,
    vote_average_gte: min  > 0 ? min  : undefined,
    vote_average_lte: max < 10 ? max : undefined,
    with_genres: selectedGenres.length ? selectedGenres.join(',') : undefined,
  })

  const {data: genresData} = useFetchMovieListByGenreQuery()



  const resetFilters = () => {
    setSortBy(SortBy.POPULARITY_DESC);
    setRatingRange([0, 10]);
    setSelectedGenres([]);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortByType
    setSortBy(value)
  }

  const toggleGenre = (id: number) => {
    setSelectedGenres((prev) => prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id])
  }

  const SORT_OPTIONS = [
    { value: "popularity.desc", label: "Popularity ↓" },
    { value: "popularity.asc", label: "Popularity ↑" },
    { value: "vote_average.desc", label: "Rating ↓" },
    { value: "vote_average.asc", label: "Rating ↑" },
    { value: "primary_release_date.desc", label: "Release Date ↓" },
    { value: "primary_release_date.asc", label: "Release Date ↑" },
    { value: "original_title.asc", label: "Title A-Z" },
    { value: "original_title.desc", label: "Title Z-A" },
  ] as const

  return (
    <section className={s.container}>
        <aside className={s.sidebar}>
          <h2>Filters / Sort</h2>
          <div>
            <label>
              Sort by
              <select
                value={sortBy}
                onChange={onChangeHandler}
                className={s.select}
              >
                {SORT_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <span>Rating</span>
            <RangeSlider  values={ratingRange}
                          onChange={setRatingRange} />
          </div>
          <div className={s.genres}>
            {genresData?.genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => toggleGenre(genre.id)}
                className={`${s.genreButton} ${
                    selectedGenres.includes(genre.id) ? s.active : ""
                  }`}
              >{genre.name}</button>
            ))}
          </div>
          <div>
            <button type={'button'} onClick={resetFilters} className={s.resetBtn}>
              Reset filters
            </button>
          </div>
        </aside>
      <div className={s.content}>
        {discoverMoviesData?.results.length === 0 && (
          <p>No movies found</p>
        )}
        <div className={s.grid}>
          {discoverMoviesData?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

