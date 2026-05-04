import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError
} from "@reduxjs/toolkit/query";
import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {handleErrors} from "@/common/utilites/handleErrors.ts";

export const baseQueryWithErrorHandling: BaseQueryFn<string | FetchArgs,
  unknown,
  FetchBaseQueryError> = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
      )
      return headers
    },
  });

  const result = await baseQuery(args, api, extraOptions)

  if (result.error) {
    handleErrors(result.error);
  }

  return result;
}