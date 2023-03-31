import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "../features/blogApi";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
});
