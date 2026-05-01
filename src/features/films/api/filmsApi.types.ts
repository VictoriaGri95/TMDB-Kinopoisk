//списки фильмов
import type {SortByType} from "@/common/enums";

export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type FilmsResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type RatingFilter = {
  gte?: number;
  lte?: number;
}

export type FetchFilmsParams = {
  language?: string;
  page?: number;
  region?: string;
  sort_by?: SortByType;
  vote_average_gte?: number;
  vote_average_lte?: number;
  with_genres?: string;
  append_to_response?: string;
  include_adult?: boolean;
  primary_release_year?: string;
  year?: string;
}


export type SearchMoviesParams = {
  query: string;
  params?: FetchFilmsParams;
}


// детали

export type Genre = {
  id: number;
  name: string;
}

export type GenresResponse = {
  genres: Genre[];
}

export type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
}

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export type BelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: BelongsToCollection | null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


//видео
export type Video = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
}

export type VideosResponse = {
  id: number;
  results: Video[];
}

// изображения
export type Image = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export type ImagesResponse = {
  id: number;
  backdrops: Image[];
  logos: Image[];
  posters: Image[];
}

// рецензии
export type ReviewAuthor = {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number | null;
}

export type Review = {
  author: string;
  author_details: ReviewAuthor;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export type ReviewsResponse = {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
}

// актеры

export type Cast = {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export type Crew = {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}

export type CreditsResponse = {
  id: number;
  cast: Cast[];
  crew: Crew[];
}



