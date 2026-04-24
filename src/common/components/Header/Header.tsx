import {Logo} from "@/common/components/Header/Logo/Logo.tsx";
import {ThemeToggle} from "@/common/components/theme";
import {NavMenu} from "@/common/components/Header/NavMenu/NavMenu.tsx";
import s from './Header.module.css'

export const Header = () => {



  return (
    <header className={s.header}>
      <Logo />
      <NavMenu />
      <ThemeToggle />
    </header>
  );
};