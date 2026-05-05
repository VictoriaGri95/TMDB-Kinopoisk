import tmdbLogo from '../../../../assets/img/tmdbLogo.svg'
import {NavLink} from "react-router";
import {Path} from "@/common/constants";
import s from "./Logo.module.css";

export const Logo = () => {
  return (
    <NavLink to={Path.Main}>
      <img
        className={s.logo}
        src={tmdbLogo}
        alt="tmdbLogo"
      />
    </NavLink>

  );
};

