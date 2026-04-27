import type {Movie} from "@/features/films/api/filmsApi.types.ts";
import s from "./WelcomeSection.module.css";
import {ImagesUrl} from "@/common/constants";
import {SearchBar} from "@/common/components";


type Props = {
  popularFilms: Movie[];
}

export const WelcomeSection = ({popularFilms}: Props) => {

  const moviesWithBackdrop = popularFilms.filter(
    (movie) => movie.backdrop_path
  );


  const randomIndex = Math.floor(Math.random() * moviesWithBackdrop.length);
  const randomMovie = moviesWithBackdrop[randomIndex];

  const backgroundImage = randomMovie ? `${ImagesUrl}${randomMovie.backdrop_path}` : '';


  return (
    <div
      className={s.welcomeSection}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.3s",
      }}
    >
      <div className={s.overlay} />
      <div className={s.content}>
        <h1 className={s.title}>Welcome</h1>
        <h2 className={s.subtitle}>Browse highlighted titles from TMDB</h2>
        <SearchBar />
      </div>
    </div>
  );
};