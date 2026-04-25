import tmdbLogo from '../../../../assets/img/tmdbLogo.svg'
import {NavLink} from "react-router";
import {Path} from "@/common/constants";

export const Logo = () => {
  return (
    <NavLink to={Path.Main}>
      <img
        src={tmdbLogo}
        alt="tmdbLogo"
        width="185px"
      />
    </NavLink>

  );
};

