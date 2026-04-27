import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {appReducer, appSlice} from "@/app/model/app-slice.ts";
import {baseApi} from "@/app/api/baseApi.ts";
import {
  favoriteReducer,
  favoriteSlice
} from "@/features/favorites/model/favorites-slice.ts";


export const store = configureStore({
  reducer: {
    [appSlice.name]: appReducer,
    [favoriteSlice.name]: favoriteReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
