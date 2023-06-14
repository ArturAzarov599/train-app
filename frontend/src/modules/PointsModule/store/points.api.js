import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pointsApi = createApi({
  reducerPath: 'pointsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/point',
  }),
  tagTypes: ["Point"],
  endpoints: (builder) => ({
    getPoints: builder.query({
      query: () => ({
        url: '/',
        method: 'GET'
      }),
      providesTags: ["Point"]
    }),
    deletePoint: builder.mutation({
      query: ({ name }) => ({
        url: '/',
        method: 'DELETE',
        body: {
          name
        }
      }),
      invalidatesTags: ["Point"]
    }),
    createPoint: builder.mutation({
      query: ({ name }) => ({
        url: '/',
        method: 'POST',
        body: {
          name
        }
      }),
      invalidatesTags: ["Point"]
    }),
    updatePoint: builder.mutation({
      query: ({ id, name }) => ({
        url: '/',
        method: 'PUT',
        body: {
          id,
          name
        }
      }),
      invalidatesTags: ["Point"]
    })
  }),
});

export const { useGetPointsQuery, useDeletePointMutation, useCreatePointMutation, useUpdatePointMutation } = pointsApi;