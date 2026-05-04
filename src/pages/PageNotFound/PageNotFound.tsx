import s from './PageNotFound.module.css'
import {useNavigate} from "react-router";
import {Path} from "@/common/constants";

export const PageNotFound = () => {

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(Path.Main);
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>404</h1>
      <h2 className={s.subtitle}>page not found</h2>
      <button
        onClick={handleGoHome}
        className={s.homeButton}
      >
        Go to main
      </button>
    </div>
  );
};

