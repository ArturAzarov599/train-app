import { createSlice } from "@reduxjs/toolkit";

import { trainApi } from "./train.api";

const initialState = {
  errorMessage: null,
  successMessage: null,
  limit: 5,
  skip: 0,
  totalPages: 0
};

export const trainReducer = createSlice({
  name: 'train',
  initialState,
  reducers: {
    resetState: (state) => {
      state.errorMessage = null
      state.successMessage = null
    },
    setPage: (state, action) => {
      state.skip = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(trainApi.endpoints.getTrains.matchFulfilled, (state, action) => {
        state.totalPages = Math.ceil(action.payload.count / state.limit)
      })
      .addMatcher(trainApi.endpoints.createTrain.matchRejected, (state, action) => {
        state.errorMessage = action.payload.data.message
      })
      .addMatcher(trainApi.endpoints.deleteTrain.matchRejected, (state, action) => {
        state.errorMessage = action.payload.data.message
      })
      .addMatcher(trainApi.endpoints.updateTrain.matchRejected, (state, action) => {
        state.errorMessage = action.payload.data.message
      })

      .addMatcher(trainApi.endpoints.deleteTrain.matchFulfilled, (state, action) => {
        state.successMessage = "Deleted train!"
      })
      .addMatcher(trainApi.endpoints.createTrain.matchFulfilled, (state, action) => {
        state.successMessage = "Created train!"
      })
      .addMatcher(trainApi.endpoints.updateTrain.matchFulfilled, (state, action) => {
        state.successMessage = "Updated train!"
      })
  }
})

export const { actions } = trainReducer;