import {baseApi} from "@/app/api/baseApi.ts";
import type {
  FetchFilmsParams,
  FilmsResponse
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
    })
  })
})

export const {useFetchPopularFilmsQuery, useFetchUpcomingFilmsQuery, useFetchNowPlayingFilmsQuery, useFetchTopRatedFilmsQuery} = FilmsApi