import s from './Footer.module.css';

export const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <small className={s.copyright}>
          © {currentYear} Kinopoisk Demo · Data courtesy of TMDB.
        </small>
      </div>
    </footer>
  );
};
