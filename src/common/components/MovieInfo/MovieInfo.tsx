import {ImagesUrl} from "@/common/constants";
import {getRating, getReleaseYear, getTime} from "@/common/utilites";
import type {MovieDetails} from "@/features/films/api/filmsApi.types.ts";
import {useNavigate} from "react-router";
import s from "./MovieInfo.module.css";


type Props = {
  movie: MovieDetails | undefined;
};


export const MovieInfo = ({movie}: Props) => {
  const navigate = useNavigate();


  const releaseYear = getReleaseYear(movie?.release_date || '')
  const rating = getRating(movie?.vote_average || 0)
  const runtime = getTime(movie?.runtime || 0)

  const handleBack = () => {
    navigate(-1);
  };


  return (
    <section className={s.movieInfo}>
      <div className={s.posterContainer}>
        <img
          src={movie?.poster_path ? `${ImagesUrl}${movie.poster_path}` : "https://placehold.co/400x600/1a1a1c/ffffff?text=No+Poster"}
          alt={movie?.title}
          className={s.poster}
        />
      </div>
      <div className={s.details}>
        <div className={s.header}>
          <h1 className={s.title}>{movie?.title}</h1>
          <button
            type={"button"}
            onClick={handleBack}
            className={s.backButton}
          >Back
          </button>
        </div>
        <div className={s.meta}>
          <span className={s.metaItem}>Release year: {releaseYear}</span>
          <span className={`${s.metaItem} ${s.rating}`}>{rating}</span>
          <span className={s.metaItem}>Runtime: {runtime}</span>
        </div>
        <p className={s.overview}>{movie?.overview} </p>
        <div className={s.genres}>
          <h3 className={s.sectionTitle}>Genres</h3>
          <ul className={s.genresList}>
            {movie?.genres.map((gen) => (
              <li
                key={gen.id}
                className={s.genreItem}
              >{gen.name}</li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
};

