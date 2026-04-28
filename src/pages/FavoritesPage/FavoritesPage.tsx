import {MovieCard} from "@/features/films/ui/MovieCard/MovieCard.tsx";
import s from './FavoritesPage.module.css'
import {useAppSelector} from "@/common/hooks";
import {selectFavorites} from "@/features/favorites/model/favorites-slice.ts";

export const FavoritesPage = () => {


  const favorites = useAppSelector(selectFavorites)

  return (
    <section className={s.container}>
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

    </section>
  );
};

