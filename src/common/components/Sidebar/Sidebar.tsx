import s from "./Sidebar.module.css";
import {RangeSlider} from "@/common/components";
import {type SortByType} from "@/common/enums";
import {SORT_OPTIONS} from "@/common/constants";
import type {Genre} from "@/features/films/api/filmsApi.types.ts";


type Props = {
  sortBy: SortByType;
  onSortChange: (value: SortByType) => void;
  selectedGenres: number[];
  onGenreToggle: (id: number) => void;
  ratingRange: [number, number];
  onRatingChange: (range: [number, number]) => void;
  onReset: () => void;
  genres?: Genre[];
};


export const Sidebar = ({
                          sortBy,
                          onSortChange,
                          selectedGenres,
                          onGenreToggle,
                          ratingRange,
                          onRatingChange,
                          onReset,
                          genres,
                        }: Props) => {


  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortByType;
    onSortChange(value);
  };


  return (
    <aside className={s.sidebar}>
      <h2>Filters / Sort</h2>
      <div>
        <label>
          Sort by
          <select
            value={sortBy}
            onChange={onChangeHandler}
            className={s.select}
          >
            {SORT_OPTIONS.map(({value, label}) => (
              <option
                key={value}
                value={value}
              >{label}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <span>Rating</span>
        <RangeSlider
          values={ratingRange}
          onChange={onRatingChange}
        />
      </div>
      <div className={s.genres}>
        {genres?.map((genre) => (
          <button
            key={genre.id}
            onClick={() => onGenreToggle(genre.id)}
            className={`${s.genreButton} ${
              selectedGenres.includes(genre.id) ? s.active : ""
            }`}
          >{genre.name}</button>
        ))}
      </div>
      <div>
        <button
          type={'button'}
          onClick={onReset}
          className={s.resetBtn}
        >
          Reset filters
        </button>
      </div>
    </aside>
  );
};

