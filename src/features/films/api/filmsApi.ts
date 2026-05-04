import {baseApi} from "@/app/api/baseApi.ts";
import type {
  FetchFilmsParams,
  SearchMoviesParams
} from "@/features/films/api/filmsApi.types.ts";
import {withZodCatch} from "@/common/utilites";
import {
  CreditsResponseSchema,
  FilmsResponseSchema,
  GenresResponseSchema,
  MovieDetailsSchema
} from "@/features/films/model/films.schemas.ts";


export const FilmsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchPopularFilms: build.query({
      query: (params: FetchFilmsParams) => ({
        url: '/3/movie/popular',
        method: 'GET',
        params,
      }),
      ...withZodCatch(FilmsResponseSchema),
      providesTags: ['films']
    }),
    fetchTopRatedFilms: build.query({
      query: (params: FetchFilmsParams) => ({
        url: '/3/movie/top_rated',
        method: 'GET',
        params,
      }),
      ...withZodCatch(FilmsResponseSchema),
      providesTags: ['films']
    }),
    fetchUpcomingFilms: build.query({
      query: (params: FetchFilmsParams) => ({
        url: '/3/movie/upcoming',
        method: 'GET',
        params,
      }),
      ...withZodCatch(FilmsResponseSchema),
      providesTags: ['films']
    }),
    fetchNowPlayingFilms: build.query({
      query: (params: FetchFilmsParams) => ({
        url: '/3/movie/now_playing',
        method: 'GET',
        params,
      }),
      ...withZodCatch(FilmsResponseSchema),
      providesTags: ['films']
    }),
    fetchMovieDetails: build.query({
      query: (movieId: string) => ({
        url: `/3/movie/${movieId}`,
        method: 'GET',
      }),
      ...withZodCatch(MovieDetailsSchema),
      providesTags: ['films'],
    }),
    fetchMovieCredits: build.query({
      query: (movieId: string) => ({
        url: `/3/movie/${movieId}/credits`,
        method: 'GET',
      }),
      ...withZodCatch(CreditsResponseSchema),
      providesTags: ['films'],
    }),
    fetchSimilarMovies: build.query({
      query: (movieId: string) => ({
        url: `/3/movie/${movieId}/similar`,
        method: 'GET',
      }),
      ...withZodCatch(FilmsResponseSchema),
      providesTags: ['films'],
    }),
    fetchSearchMovies: build.query({
      query: (params: SearchMoviesParams) => ({
        url: `/3/search/movie`,
        method: "GET",
        params,
      }),
      ...withZodCatch(FilmsResponseSchema),
      providesTags: ['films'],
    }),
    fetchDiscoverMovies: build.query({
      query: (params: FetchFilmsParams) => ({
        url: `/3/discover/movie`,
        method: 'GET',
        params,
      }),
      ...withZodCatch(FilmsResponseSchema),
    }),
    fetchMovieListByGenre: build.query({
      query: () => ({
        url: `/3/genre/movie/list`,
        method: 'GET',
      }),
      ...withZodCatch(GenresResponseSchema),
      providesTags: ['films'],
    })
  })
})

export const {
  useFetchPopularFilmsQuery,
  useFetchUpcomingFilmsQuery,
  useFetchNowPlayingFilmsQuery,
  useFetchTopRatedFilmsQuery,
  useFetchMovieDetailsQuery,
  useFetchMovieCreditsQuery,
  useFetchSimilarMoviesQuery,
  useFetchSearchMoviesQuery,
  useFetchDiscoverMoviesQuery,
  useFetchMovieListByGenreQuery
} = FilmsApi