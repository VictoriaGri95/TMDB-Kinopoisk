import tmdbLogo from '../../../../assets/img/tmdbLogo.svg'

export const Logo = () => {
  return (
    <a href="/">
      <img
        src={tmdbLogo}
        alt="tmdbLogo"
        width="185px"
      />
    </a>
  );
};

