import {MovieCard} from "@/features/films/ui/MovieCard/MovieCard.tsx";
import type {Movie} from "@/features/films/api/filmsApi.types";
import s from "./SimilarMovies.module.css";

type Props = {
  movies: Movie[];
};


export const SimilarMovies = ({movies}: Props) => {
  return (
    <section className={s.similarSection}>
      <h2 className={s.sectionTitle}>Similar Movies</h2>
      <div className={s.moviesGrid}>
        {movies?.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
          />
        ))}
      </div>
    </section>
  );
};

