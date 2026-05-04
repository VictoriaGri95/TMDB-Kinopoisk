import {createApi} from "@reduxjs/toolkit/query/react";
import {
  baseQueryWithErrorHandling
} from "@/app/api/baseQueryWithErrorHandling.ts";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ['films'],
  baseQuery: baseQueryWithErrorHandling,
  endpoints: () => ({}),
})