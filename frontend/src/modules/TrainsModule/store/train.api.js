import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DEVELOPMENT_URL = "http://localhost:3000/train";

export const trainApi = createApi({
  reducerPath: 'trainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: DEVELOPMENT_URL,
  }),
  tagTypes: ["Train"],
  endpoints: (builder) => ({
    getTrains: builder.query({
      query: ({ skip, limit, order = 'ASC', orderBy }) => ({
        url: `?skip=${skip}&limit=${limit}&order=${order}&orderBy=${orderBy}`,
        method: 'GET'
      }),
      providesTags: ["Train"]
    }),
    getTrainDetails: builder.query({
      query: (code) => ({
        url: `/details?code=${code}`,
        method: 'GET'
      })
    }),
    createTrain: builder.mutation({
      query: (trainData) => ({
        url: '/',
        method: 'POST',
        body: trainData
      }),
      invalidatesTags: ["Train"]
    }),
    updateTrain: builder.mutation({
      query: (trainData) => ({
        url: '/',
        method: 'PUT',
        body: trainData
      }),
      invalidatesTags: ["Train"]
    }),
    deleteTrain: builder.mutation({
      query: (code) => ({
        url: `/${code}`,
        method: 'DELETE'
      }),
      invalidatesTags: ["Train"]
    })
  })
})

export const { useGetTrainsQuery, useGetTrainDetailsQuery, useCreateTrainMutation, useUpdateTrainMutation, useDeleteTrainMutation } = trainApi;
