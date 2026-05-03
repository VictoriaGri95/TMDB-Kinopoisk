import type {RootState} from '@/app/model/store.ts'
import {useSelector} from 'react-redux'
import {FilmsApi} from "@/features/films/api/filmsApi.ts";


const excludedEndpoints = [
  FilmsApi.endpoints.fetchPopularFilms.name,
  FilmsApi.endpoints.fetchTopRatedFilms.name,
  FilmsApi.endpoints.fetchUpcomingFilms.name,
  FilmsApi.endpoints.fetchNowPlayingFilms.name,
  FilmsApi.endpoints.fetchMovieDetails.name,
  FilmsApi.endpoints.fetchMovieCredits.name,
  FilmsApi.endpoints.fetchSimilarMovies.name,
  FilmsApi.endpoints.fetchSearchMovies.name,
  FilmsApi.endpoints.fetchDiscoverMovies.name,
  FilmsApi.endpoints.fetchMovieListByGenre.name,
]


export const useGlobalLoading = () => {
  return useSelector((state: RootState) => {
    // Получаем все активные запросы из RTK Query API
    const queries = Object.values(state.baseApi.queries || {})
    const mutations = Object.values(state.baseApi.mutations || {})

    // Проверяем, есть ли активные запросы (статус 'pending')
    const hasActiveQueries = queries.some(query => {
      if (query?.status !== 'pending') return
      if (excludedEndpoints.includes(query.endpointName)) {
        const completedQueries = queries.filter(q => q?.status === 'fulfilled')
        return completedQueries.length > 0
      }
    })
    const hasActiveMutations = mutations.some(mutation => mutation?.status === 'pending')

    return hasActiveQueries || hasActiveMutations
  })
}