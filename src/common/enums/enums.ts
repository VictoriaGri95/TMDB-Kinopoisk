export const SortBy = {
  POPULARITY_ASC: 'popularity.asc',
  POPULARITY_DESC: 'popularity.desc',
  VOTE_AVERAGE_ASC: 'vote_average.asc',
  VOTE_AVERAGE_DESC: 'vote_average.desc',
  PRIMARY_RELEASE_DATE_ASC: 'primary_release_date.asc',
  PRIMARY_RELEASE_DATE_DESC: 'primary_release_date.desc',
  ORIGINAL_TITLE_ASC: 'original_title.asc',
  ORIGINAL_TITLE_DESC: 'original_title.desc',
} as const

export type SortByType = typeof SortBy [keyof typeof SortBy ];


export const GenreIds = {
  ACTION: 28,
  ADVENTURE: 12,
  ANIMATION: 16,
  COMEDY: 35,
  CRIME: 80,
  DOCUMENTARY: 99,
  DRAMA: 18,
  FAMILY: 10751,
  FANTASY: 14,
  HISTORY: 36,
  HORROR: 27,
  MUSIC: 10402,
  MYSTERY: 9648,
  ROMANCE: 10749,
  SCIENCE_FICTION: 878,
  TV_MOVIE: 10770,
  THRILLER: 53,
  WAR: 10752,
  WESTERN: 37,
} as const;

export type GenreIdType = typeof GenreIds[keyof typeof GenreIds];