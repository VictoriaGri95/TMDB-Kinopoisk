export const Path = {
  Main: '/',
  PopularMovies: 'movies/popular',
  FilteredMovies: '/filtered-movies',
  Search: '/search',
  Favorites: '/favorites',
  // Movie: '/movie/',
  MovieDetails: '/movie/:id',
  NotFound: '*',
  TopRatedMovies: '/movies/top_rated',
  UpcomingMovies: '/movies/upcoming',
  NowPlayingMovies: '/movies/now_playing',
  CategoryMovies: '/movies',
} as const


export const ImagesUrl = "https://image.tmdb.org/t/p/original"
export const SORT_OPTIONS = [
  {value: "popularity.desc", label: "Popularity ↓"},
  {value: "popularity.asc", label: "Popularity ↑"},
  {value: "vote_average.desc", label: "Rating ↓"},
  {value: "vote_average.asc", label: "Rating ↑"},
  {value: "primary_release_date.desc", label: "Release Date ↓"},
  {value: "primary_release_date.asc", label: "Release Date ↑"},
  {value: "original_title.asc", label: "Title A-Z"},
  {value: "original_title.desc", label: "Title Z-A"},
] as const
