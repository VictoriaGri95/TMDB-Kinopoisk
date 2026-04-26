import type {Movie} from "@/features/films/api/filmsApi.types.ts";
import {SearchBar} from "@/common/components/SearchBar/SearchBar.tsx";
import s from "./WelcomeSection.module.css";
import {useEffect, useState} from "react";
import {ImagesUrl} from "@/common/constants";


type Props = {
  popularFilms: Movie[];
}

export const WelcomeSection = ({popularFilms}: Props) => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");


  useEffect(() => {

    const moviesWithBackdrop = popularFilms.filter(
      (movie) => movie.backdrop_path !== null
    );
    if (moviesWithBackdrop.length === 0) return;


    const randomIndex = Math.floor(Math.random() * moviesWithBackdrop.length);
    const randomMovie = moviesWithBackdrop[randomIndex];


    const imageUrl = `${ImagesUrl}${randomMovie.backdrop_path}`;

    setBackgroundImage(imageUrl)

  }, [popularFilms]);

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