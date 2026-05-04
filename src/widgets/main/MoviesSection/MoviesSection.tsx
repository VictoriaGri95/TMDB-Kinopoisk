import type {Movie} from "@/features/films/api/filmsApi.types.ts";
import {Path} from "@/common/constants";
import {
  useFetchNowPlayingFilmsQuery,
  useFetchTopRatedFilmsQuery,
  useFetchUpcomingFilmsQuery
} from "@/features/films/api/filmsApi.ts";
import {Link} from "react-router";
import {MovieCard} from "@/features/films/ui/MovieCard/MovieCard.tsx";
import s from './MoviesSection.module.css';

type Props = {
  popularFilms: (Movie | undefined)[];
}


export const MoviesSection = ({popularFilms}: Props) => {
  const {
    data: upcomingFilms,
    isFetching: upcomingFetching
  } = useFetchUpcomingFilmsQuery({});
  const {
    data: nowPlayingFilms,
    isFetching: nowPlayingFetching
  } = useFetchNowPlayingFilmsQuery({});
  const {
    data: topRatedFilms,
    isFetching: topRatedFetching
  } = useFetchTopRatedFilmsQuery({});


  const sections = [
    {
      title: 'Popular Movies',
      movies: popularFilms.slice(0, 6),
      viewAllLink: Path.PopularMovies,
    },
    {
      title: 'Top Rated Movies',
      movies: topRatedFetching
        ? Array.from({length: 6}, () => undefined)
        : topRatedFilms?.results.slice(0, 6),
      viewAllLink: Path.TopRatedMovies,
    },
    {
      title: 'Upcoming Movies',
      movies: upcomingFetching
        ? Array.from({length: 6}, () => undefined)
        : upcomingFilms?.results.slice(0, 6),
      viewAllLink: Path.UpcomingMovies,
    },
    {
      title: 'Now Playing Movies',
      movies: nowPlayingFetching
        ? Array.from({length: 6}, () => undefined)
        : nowPlayingFilms?.results.slice(0, 6),
      viewAllLink: Path.NowPlayingMovies,
    },
  ];


  return (
    <div className={s.container}>
      {sections.map((section) => (
        <section
          key={section.title}
          className={s.section}
        >
          <div className={s.header}>
            <h2>{section.title}</h2>
            <Link to={section.viewAllLink}>
              <button
                type="button"
                className={s.viewMoreBtn}
              >
                View more
              </button>
            </Link>
          </div>

          <div className={s.moviesGrid}>
            {section.movies?.map((movie, i) => (
              <MovieCard
                key={movie?.id ?? i}
                movie={movie}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

