import type {Movie} from "@/features/films/api/filmsApi.types.ts";


const KEY = "favorites"

export const getFavorites = (): Movie[] => {
  const data = localStorage.getItem(KEY)
  return data ? JSON.parse(data) : []
}

export const setFavorites = (favorites: Movie[]) => {
  localStorage.setItem(KEY, JSON.stringify(favorites))
}