import {NavLink} from "react-router";
import s from './CategoryBar.module.css';

export const CategoryBar = () => {
  const tabs = [
    {title: 'Popular Movies', category: 'popular'},
    {title: 'Top Rated Movies', category: 'top_rated'},
    {title: 'Upcoming Movies', category: 'upcoming'},
    {title: 'Now Playing Movies', category: 'now_playing'}
  ];

  return (
    <div className={s.tabsContainer}>
      {tabs.map((tab) => (
        <NavLink
          key={tab.category}
          to={`/movies/${tab.category}`}
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
