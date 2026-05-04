import {MovieCard} from "@/features/films/ui/MovieCard/MovieCard.tsx";
import type {Movie} from "@/features/films/api/filmsApi.types";
import s from "./SimilarMovies.module.css";

type Props = {
  movies: (Movie | undefined)[];
};


export const SimilarMovies = ({movies}: Props) => {
  return (
    <section className={s.similarSection}>
      <h2 className={s.sectionTitle}>Similar Movies</h2>
      <div className={s.moviesGrid}>
        {movies?.map((movie, i) => (
          <MovieCard
            movie={movie}
            key={movie?.id ?? i}
          />
        ))}
      </div>
    </section>
  );
};

