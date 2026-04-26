import {NavLink} from 'react-router';
import s from './NavMenu.module.css';
import {Path} from "@/common/constants";

interface NavMenuProps {
  onItemClick?: () => void;
}

const navItems = [
  {to: Path.Main, label: 'Main'},
  {to: Path.PopularMovies, label: 'Category movies'},
  {to: Path.FilteredMovies, label: 'Filtered movies'},
  {to: Path.Search, label: 'Search'},
  {to: Path.Favorites, label: 'Favorites'},
];

export const NavMenu = ({onItemClick}: NavMenuProps) => {
  return (
    <ul className={s.list}>
      {navItems.map(item => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            className={({isActive}) => isActive ? s.activeLink : ''}
            onClick={onItemClick}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};