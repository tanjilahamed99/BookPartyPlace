"use client";

import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
import photoSlice from "./features/PhotoSlice/photoSlice";

const store = configureStore({
  reducer: {
    [photoSlice.reducerPath]: photoSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(photoSlice.middleware),
});

// setupListeners(store.dispatch);

export default store;
