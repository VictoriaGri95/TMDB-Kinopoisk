import {ImagesUrl} from "@/common/constants";
import type {Movie} from "@/features/films/api/filmsApi.types";
import s from './MovieCard.module.css';
import {Link} from "react-router";
import {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import {
  selectIsFavorite,
  toggleFavorite
} from "@/features/favorites/model/favorites-slice.ts";
import {getRating} from "@/common/utilites";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type MovieCardProps = {
  movie?: Movie;
};

export const MovieCard = ({movie}: MovieCardProps) => {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector((state) =>
    selectIsFavorite(state, movie?.id ?? -1)
  );

  const handleFavoriteToggle = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (movie) dispatch(toggleFavorite(movie));
  }, [dispatch, movie]);

  if (!movie) {
    return (
      <article className={s.movieCard}>
        <div className={s.skeletonPoster}>
          <Skeleton
            height="100%"
            style={{display: 'block'}}
          />
        </div>
        <div className={s.skeletonTitle}>
          <Skeleton
            width="80%"
            height={16}
          />
        </div>
      </article>
    );
  }

  const rating = getRating(movie.vote_average);

  return (
    <article className={s.movieCard}>
      <Link
        to={`/movie/${movie.id}`}
        className={s.posterLink}
      >
        <div className={s.posterWrapper}>
          <img
            src={
              movie.poster_path
                ? `${ImagesUrl}${movie.poster_path}`
                : "https://placehold.co/400x600/1a1a1c/ffffff?text=No+Poster"
            }
            alt={movie.title}
            className={s.poster}
          />

          <span className={s.rating}>{rating}</span>

          <button
            type="button"
            onClick={handleFavoriteToggle}
            className={`${s.favButton} ${isFavorite ? s.active : ''}`}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

        </div>

        <h3 className={s.title}>
          <span className={s.titleLink}>
            {movie.title}
          </span>
        </h3>
      </Link>
    </article>
  );
};