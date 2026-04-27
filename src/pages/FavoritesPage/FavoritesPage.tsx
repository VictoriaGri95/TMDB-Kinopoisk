import {useEffect, useState} from "react";
import type {Movie} from "@/features/films/api/filmsApi.types.ts";
import {MovieCard} from "@/features/films/ui/MovieCard/MovieCard.tsx";
import s from './FavoritesPage.module.css'

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    loadFavorites();


    window.addEventListener("favoritesChanged", loadFavorites)


    return () =>  window.removeEventListener("favoritesChanged", loadFavorites)
  }, []);


  const loadFavorites = () => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  };

  //
  // if (favorites.length === 0) {
  //   return (
  //     <div className={s.empty}>
  //       <p>Add movies to favorites to see them on this page.</p>
  //     </div>
  //   );
  // }
  return (
    <div className={s.container}>
      <h2>Favorites</h2>
      {favorites.length !== 0 ? (
        <div className={s.grid}>
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      ) : (
        <div className={s.empty}>
          <p>Add movies to favorites to see them on this page.</p>
        </div>
      )}

    </div>
  );
};

