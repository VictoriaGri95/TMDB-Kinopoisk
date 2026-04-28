import {ImagesUrl} from "@/common/constants";
import type {Cast} from "@/features/films/api/filmsApi.types.ts";
import s from "./CastList.module.css";

type Props = {
  cast: Cast[];
};


export const CastList = ({cast}: Props) => {


  return (
    <section className={s.castSection}>
      <h2 className={s.sectionTitle}>Cast</h2>
      <ul className={s.castList}>
        {cast.map((actor) => (
          <li
            key={actor.id}
            className={s.castItem}
          >
            <div className={s.imageWrapper}>
              <img
                src={actor.profile_path ? `${ImagesUrl}${actor.profile_path}` : "https://placehold.co/400x600/1a1a1c/ffffff?text=No+Photo"}
                alt={actor.name}
                className={s.castImage}
              />
            </div>
            <div className={s.castInfo}>
              <h4 className={s.actorName}>{actor.name}</h4>
              <span className={s.characterName}>{actor.character}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

