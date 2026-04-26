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
  popularFilms: Movie[];
}




export const MoviesSection = ({popularFilms}: Props) => {
  const {data: upcomingFilms} = useFetchUpcomingFilmsQuery({})
  const {data: nowPlayingFilms} = useFetchNowPlayingFilmsQuery({})
  const {data: topRatedFilms} = useFetchTopRatedFilmsQuery({})

  const sections = [
    {
      title: 'Popular Movies',
      movies: popularFilms,
      viewAllLink: Path.PopularMovies
    },
    {
      title: 'Top Rated Movies',
      movies: topRatedFilms?.results,
      viewAllLink: Path.TopRatedMovies
    },
    {
      title: 'Upcoming Movies',
      movies: upcomingFilms?.results,
      viewAllLink: Path.UpcomingMovies
    },
    {
      title: 'Now Playing Movies',
      movies: nowPlayingFilms?.results,
      viewAllLink: Path.NowPlayingMovies
    }
  ];




  return (
    <div>
      <div className={s.container}>
        {sections.map((section) => (
          <section key={section.title} className={s.section}>
            <div className={s.header}>
              <h2>{section.title}</h2>
              <Link to={section.viewAllLink}>
                <button type="button" className={s.viewMoreBtn}>
                  View more
                </button>
              </Link>
            </div>

            <div className={s.moviesGrid}>
              {section.movies?.slice(0, 6).map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        ))}
      </div>



    </div>
  );
};

