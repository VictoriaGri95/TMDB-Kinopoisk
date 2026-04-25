import {baseApi} from "@/app/api/baseApi.ts";
import type {
  FetchPopularFilmsParams, PopularFilmsResponse
} from "@/features/films/api/filmsApi.types.ts";


export const FilmsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchPopularFilms: build.query<PopularFilmsResponse, FetchPopularFilmsParams>({
      query: (params) => ({
        url: '/3/movie/popular',
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

export const {useFetchPopularFilmsQuery} = FilmsApi