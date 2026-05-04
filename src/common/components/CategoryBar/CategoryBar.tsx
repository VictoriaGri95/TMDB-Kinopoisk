import {NavLink} from "react-router";
import s from './CategoryBar.module.css';

type CategoryBarProps = {
  onCategoryClick?: () => void;
};
export const CategoryBar = ({onCategoryClick}: CategoryBarProps) => {
  const tabs = [
    {title: 'Popular Movies', category: 'popular'},
    {title: 'Top Rated Movies', category: 'top_rated'},
    {title: 'Upcoming Movies', category: 'upcoming'},
    {title: 'Now Playing Movies', category: 'now_playing'}
  ];
  const handleClick = () => {
    if (onCategoryClick) {
      onCategoryClick();
    }
  };
  return (
    <div className={s.tabsContainer}>
      {tabs.map((tab) => (
        <NavLink
          key={tab.category}
          to={`/movies/${tab.category}`}
          onClick={handleClick}
          className={({isActive}) =>
            `${s.tab} ${isActive ? s.active : ''}`
          }
        >
          {tab.title}
        </NavLink>
      ))}
    </div>
  );
};
