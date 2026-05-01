import {useParams} from "react-router";
import {
  useFetchMovieCreditsQuery,
  useFetchMovieDetailsQuery,
  useFetchSimilarMoviesQuery
} from "@/features/films/api/filmsApi";
import {getTopCast} from "@/common/utilites";
import {getSimilarMovies} from "@/common/utilites/getSimilarMovies.ts";
import s from './MoviePage.module.css'
import {CastList, MovieInfo, SimilarMovies} from "@/common/components";

export const MoviePage = () => {
  const {id} = useParams<{ id: string }>();
  const movieId = id || '';


  const {
    data: movie
  } = useFetchMovieDetailsQuery(movieId, {skip: !id});

  const {data: credit} = useFetchMovieCreditsQuery(movieId, {skip: !id});

  const {data: similarMovies} = useFetchSimilarMoviesQuery(movieId, {skip: !id});

  if (!id) {
    return <div>Movie not found</div>;
  }


  const topCast = getTopCast(credit?.cast || []);
  const topSimilarMovies = getSimilarMovies(similarMovies?.results || [])
  return (
    <div className={s.container}>
      <MovieInfo movie={movie} />
      <CastList cast={topCast} />
      <SimilarMovies movies={topSimilarMovies} />
    </div>
  )
};