import {baseApi} from "@/app/api/baseApi.ts";
import type {
  CreditsResponse,
  FetchFilmsParams,
  FilmsResponse, GenresResponse,
  MovieDetails, SearchMoviesParams
} from "@/features/films/api/filmsApi.types.ts";


export const FilmsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchPopularFilms: build.query<FilmsResponse, FetchFilmsParams>({
      query: (params) => ({
        url: '/3/movie/popular',
        method: 'GET',
        params,
      }),
      providesTags: ['films']
    }),
    fetchTopRatedFilms: build.query<FilmsResponse, FetchFilmsParams>({
      query: (params) => ({
        url: '/3/movie/top_rated',
        method: 'GET',
        params,
      }),
      providesTags: ['films']
    }),
    fetchUpcomingFilms: build.query<FilmsResponse, FetchFilmsParams>({
      query: (params) => ({
        url: '/3/movie/upcoming',
        method: 'GET',
        params,
      }),
      providesTags: ['films']
    }),
    fetchNowPlayingFilms: build.query<FilmsResponse, FetchFilmsParams>({
      query: (params) => ({
        url: '/3/movie/now_playing',
        method: 'GET',
        params,
      }),
      providesTags: ['films']
    }),
    fetchMovieDetails: build.query<MovieDetails, string>({
      query: (movieId) => ({
        url: `/3/movie/${movieId}`,
        method: 'GET',
      }),
      providesTags: ['films'],
    }),
    fetchMovieCredits: build.query<CreditsResponse, string>({
      query: (movieId) => ({
        url: `/3/movie/${movieId}/credits`,
        method: 'GET',
      }),
      providesTags: ['films'],
    }),
    fetchSimilarMovies: build.query<FilmsResponse, string>({
      query: (movieId) => ({
        url: `/3/movie/${movieId}/similar`,
        method: 'GET',
      }),
      providesTags: ['films'],
    }),
    fetchSearchMovies: build.query<FilmsResponse, SearchMoviesParams>({
      query: (params) => ({
        url: `/3/search/movie`,
        method: "GET",
        params: {
          query: params.query,
        },
      }),
      providesTags: ['films'],
    }),
    fetchDiscoverMovies: build.query<FilmsResponse, FetchFilmsParams>({
      query: (params) => ({
        url: `/3/discover/movie`,
        method: 'GET',
        params,
      })
    }),
    fetchMovieListByGenre: build.query<GenresResponse, void>({
      query: () => ({
        url: `/3/genre/movie/list`,
        method: 'GET',
      }),
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