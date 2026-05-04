import type {Movie} from "@/features/films/api/filmsApi.types.ts";
import s from "./WelcomeSection.module.css";
import {ImagesUrl} from "@/common/constants";
import {SearchBar} from "@/common/components";
import {useEffect, useMemo, useRef} from "react";


type Props = {
  popularFilms: Movie[];
}

export const WelcomeSection = ({popularFilms}: Props) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const randomIndexRef = useRef<number | null>(null);

  const moviesWithBackdrop = useMemo(
    () => popularFilms.filter((movie) => movie.backdrop_path),
    [popularFilms]
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    if (!moviesWithBackdrop.length) {
      randomIndexRef.current = null;
      sectionRef.current.style.backgroundImage = "none";
      return;
    }
    randomIndexRef.current = Math.floor(Math.random() * moviesWithBackdrop.length);
    const movie = moviesWithBackdrop[randomIndexRef.current];
    sectionRef.current.style.backgroundImage = `url(${ImagesUrl}${movie.backdrop_path})`;
  }, [moviesWithBackdrop]);


  return (
    <section
      ref={sectionRef}
      className={s.welcomeSection}
      style={{
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
    </section>
  );
};