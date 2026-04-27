import {ImagesUrl, Path} from "@/common/constants";
import type {Movie} from "@/features/films/api/filmsApi.types.ts";
import s from './MovieCard.module.css';
import {Link} from "react-router";
import {useEffect, useState} from "react";


type MovieCardProps = {
  movie: Movie;
};


export const MovieCard = ({movie}: MovieCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const isFav = favorites.some((fav: Movie) => fav.id === movie.id);
    setIsFavorite(isFav)
  }, [movie.id]);

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    let newFavorites: Movie[]

    if (!isFavorite) {
      newFavorites = [...favorites, movie];
      // localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(true);
    } else {

      newFavorites = favorites.filter((favorite: Movie) => favorite.id !== movie.id)
      // localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
    }

    localStorage.setItem("favorites", JSON.stringify(newFavorites))
    window.dispatchEvent(new Event("favoritesChanged"))
  }


  const rating = Math.round(movie.vote_average * 10) / 10;

  return (
    <article
      className={s.movieCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`${Path.Movie}${movie.id}`}
        className={s.posterLink}
      >
        <img
          src={`${ImagesUrl}${movie.poster_path}`}
          alt={movie.title}
          className={s.poster}
        />
        <span className={s.rating}>{rating}</span>
        {isHovered && (
          <button
            type='button'
            onClick={onClickHandler}
            className={`${s.favButton} ${isFavorite ? s.active : ''}`}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isFavorite ? "red" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        )}
        <h3>{movie.title}</h3>
      </Link>
    </article>
  );
};

