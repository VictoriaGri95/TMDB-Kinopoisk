import {ImagesUrl, Path} from "@/common/constants";
import type {Movie} from "@/features/films/api/filmsApi.types.ts";
import s from './MovieCard.module.css';
import {Link} from "react-router";


type MovieCardProps = {
  movie: Movie;
};


export const MovieCard = ({movie}: MovieCardProps) => {


  const rating = Math.round(movie.vote_average * 10) / 10;

  return (
    <article className={s.movieCard}>
      <Link to={`${Path.Movie}${movie.id}`} className={s.posterLink}>
        <img
          src={`${ImagesUrl}${movie.poster_path}`}
          alt={movie.title}
          className={s.poster}
        />
        <span className={s.rating}>{rating}</span>

      <button
        type={"button"}
        aria-label={"Add to favorites"}
        // className={`${s.favButton} ${isFavorite ? s.active : ''}`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          // fill={isFavorite ? "red" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
        <h3>{movie.title}</h3>
      </Link>
    </article>
  );
};

