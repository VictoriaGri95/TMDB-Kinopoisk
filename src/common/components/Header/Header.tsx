import {Logo} from "@/common/components/Header/Logo/Logo.tsx";
import {NavMenu} from "@/common/components/Header/NavMenu/NavMenu.tsx";
import s from './Header.module.css'
import {ThemeToggle} from "@/common/components";
import {useState} from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={s.header}>
      <Logo />
      <button
        type="button"
        className={s.menuButton}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <span className={`${s.menuLine} ${isMenuOpen ? s.menuLineTopOpen : ""}`} />
        <span className={`${s.menuLine} ${isMenuOpen ? s.menuLineMiddleOpen : ""}`} />
        <span className={`${s.menuLine} ${isMenuOpen ? s.menuLineBottomOpen : ""}`} />
      </button>

      <NavMenu
        isOpen={isMenuOpen}
        onItemClick={closeMenu}
      />
      <ThemeToggle />
    </header>
  );
};