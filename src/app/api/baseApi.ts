import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ['films'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {

      headers.set(
        "Authorization",
        `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
      )
      return headers

    },
  }),
  endpoints: () => ({}),
})