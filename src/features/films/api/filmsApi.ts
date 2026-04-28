import {baseApi} from "@/app/api/baseApi.ts";
import type {
  CreditsResponse,
  FetchFilmsParams,
  FetchMovieDetailsParams,
  FilmsResponse,
  MovieDetails
} from "@/features/films/api/filmsApi.types.ts";


export const FilmsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchPopularFilms: build.query<FilmsResponse, FetchFilmsParams>({
      query: (params) => ({
        url: '/3/movie/popular',
        method: 'GET',
        params: {
          language: params.language || 'en-US',
          page: params.page || 1,
          region: params.region || 'PL',
        },
      })
    }),
    fetchTopRatedFilms: build.query<FilmsResponse, FetchFilmsParams>({
      query: (params) => ({
        url: '/3/movie/top_rated',
        method: 'GET',
        params: {
          language: params.language || 'en-US',
          page: params.page || 1,
          region: params.region || 'PL',
        },
      })
    }),
    fetchUpcomingFilms: build.query<FilmsResponse, FetchFilmsParams>({
      query: (params) => ({
        url: '/3/movie/upcoming',
        method: 'GET',
        params: {
          language: params.language || 'en-US',
          page: params.page || 1,
          region: params.region || 'PL',
        },
      })
    }),
    fetchNowPlayingFilms: build.query<FilmsResponse, FetchFilmsParams>({
      query: (params) => ({
        url: '/3/movie/now_playing',
        method: 'GET',
        params: {
          language: params.language || 'en-US',
          page: params.page || 1,
          region: params.region || 'PL',
        },
      })
    }),
    fetchMovieDetails: build.query<MovieDetails, {
      movieId: string;
      params?: FetchMovieDetailsParams
    }>({
      query: ({movieId, params}) => ({
        url: `/3/movie/${movieId}`,
        method: 'GET',
        params: {
          language: params?.language || 'en-US',
          append_to_response: params?.append_to_response || undefined,
        },
      }),
    }),
    fetchMovieCredits: build.query<CreditsResponse, {
      movieId: string;
      params?: FetchMovieDetailsParams
    }>({
      query: ({movieId, params}) => ({
        url: `/3/movie/${movieId}/credits`,
        method: 'GET',
        params: {
          language: params?.language || 'en-US',
        }
      })
    }),
    fetchSimilarMovies: build.query<FilmsResponse, {
      movieId: string,
      params?: FetchFilmsParams
    }>({
      query: ({movieId, params}) => ({
        url: `/3/movie/${movieId}/similar`,
        method: 'GET',
        params: {
          language: params?.language || 'en-US',
          page: params?.page || 1,
        }
      })
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
} = FilmsApi