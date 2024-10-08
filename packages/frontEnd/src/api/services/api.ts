import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type LoginProps = {
  email: string;
  password: string;
};

type RegisterProps = {
  email: string;
  password: string;
  name: string;
  repeatPassword: string;
};

type FilterAndPaginationProductsProps = {
  page: number;
  price?: number;
  adCategory?: string;
  rate?: string;
  city?: string;
  priceCondition?: string;
  productCondition?: string;
};

// Define a service using a base URL and expected endpoints
export const user = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1/" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }: LoginProps) => ({
        url: "login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          password,
        },
        credentials: "include",
      }),
    }),
    register: builder.mutation({
      query: ({ name, email, password, repeatPassword }: RegisterProps) => ({
        url: "registration",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          name,
          email,
          password,
          repeatPassword,
        },
      }),
    }),
    activate: builder.query({
      query: ({ token }) => ({
        url: `activate/${token}`,
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
    }),
    confirmUser: builder.query({
      query: ({ token }) => ({
        url: `profile/user`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      }),
    }),
    filterAndPaginationProducts: builder.query({
      query: (params: FilterAndPaginationProductsProps) => ({
        url: `categories/filter`,
        method: "GET",
        params,
      }),
    }),
    subscriptionConf: builder.query({
      query: () => ({
        url: "subscription/conf",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
    }),
    retriveSession: builder.mutation({
      query: ({ sessionId }: { sessionId: string }) => ({
        url: "registration",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          sessionId,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useActivateQuery,
  useConfirmUserQuery,
  useFilterAndPaginationProductsQuery,
  useSubscriptionConfQuery,
  useRetriveSessionMutation,
} = user;
