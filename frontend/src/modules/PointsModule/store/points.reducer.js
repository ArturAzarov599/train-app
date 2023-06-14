import { createSlice } from "@reduxjs/toolkit";

import { pointsApi } from "./points.api";

const initialState = {
  errorMessage: null,
  successMessage: null
};

export const pointReducer = createSlice({
  name: 'point',
  initialState,
  reducers: {
    resetState: (state) => {
      state.errorMessage = null
      state.successMessage = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(pointsApi.endpoints.deletePoint.matchRejected, (state, action) => {
        state.errorMessage = action.payload.data.message
      })
      .addMatcher(pointsApi.endpoints.createPoint.matchRejected, (state, action) => {
        state.errorMessage = action.payload.data.message
      })
      .addMatcher(pointsApi.endpoints.updatePoint.matchRejected, (state, action) => {
        state.errorMessage = action.payload.data.message
      })
      .addMatcher(pointsApi.endpoints.deletePoint.matchFulfilled, (state, action) => {
        state.successMessage = "Deleted point!"
      })
      .addMatcher(pointsApi.endpoints.createPoint.matchFulfilled, (state, action) => {
        state.successMessage = "Created point!"
      })
      .addMatcher(pointsApi.endpoints.updatePoint.matchFulfilled, (state, action) => {
        state.successMessage = "Updated point!"
      })
  }
})

export const { actions } = pointReducer