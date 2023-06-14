import { configureStore } from "@reduxjs/toolkit";

import { pointsApi } from "./modules/PointsModule/store/points.api";
import { trainApi } from "./modules/TrainsModule/store/train.api";

import { pointReducer } from "./modules/PointsModule/store/points.reducer";
import { trainReducer } from "./modules/TrainsModule/store/train.reducer";

export const store = configureStore({
  reducer: {
    [pointsApi.reducerPath]: pointsApi.reducer,
    [pointReducer.name]: pointReducer.reducer,
    [trainApi.reducerPath]: trainApi.reducer,
    [trainReducer.name]: trainReducer.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pointsApi.middleware)
      .concat(trainApi.middleware),
});
