import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: () => `user`,
      providesTags: [{ type: "User" }],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetUserDataQuery } = userApi;
