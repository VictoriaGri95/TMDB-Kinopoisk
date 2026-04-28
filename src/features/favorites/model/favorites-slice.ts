import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

import {
  getFavorites,
  setFavorites
} from "@/features/favorites/lib/favoritesStorage.ts";
import type {Movie} from "@/features/films/api/filmsApi.types";


type FavoritesState = {
  items: Movie[]
}

const initialState: FavoritesState = {
  items: getFavorites(),
}

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  selectors: {
    selectFavorites: (state) => state.items,
    selectIsFavorite: (state, movieId: number) =>
      state.items.some((m) => m.id === movieId),
  },
  reducers: {
    toggleFavorite(state, action: PayloadAction<Movie>) {
      const index = state.items.findIndex(movie => movie.id === action.payload.id)
      if (index !== -1) {
        state.items.splice(index, 1)
      } else {
        state.items.push(action.payload)
      }

      setFavorites(state.items)
    },
  },
})


export const {selectFavorites, selectIsFavorite} = favoriteSlice.selectors
export const {toggleFavorite} = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer