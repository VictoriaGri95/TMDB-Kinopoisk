import type {SortByType} from "@/common/enums";
import {
  CastSchema, CreditsResponseSchema, CrewSchema,
  FilmsResponseSchema, GenreSchema, GenresResponseSchema, MovieDetailsSchema,
  type MovieSchema
} from "@/features/films/model/films.schemas.ts";
import {z} from "zod";


export type Movie = z.infer<typeof MovieSchema>;
export type FilmsResponse = z.infer<typeof FilmsResponseSchema>;
export type Genre = z.infer<typeof GenreSchema>;
export type GenresResponse = z.infer<typeof GenresResponseSchema>;
export type MovieDetails = z.infer<typeof MovieDetailsSchema>;
export type Cast = z.infer<typeof CastSchema>;
export type Crew = z.infer<typeof CrewSchema>;
export type CreditsResponse = z.infer<typeof CreditsResponseSchema>;


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


