import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/posts/postSlice";
import userSlice from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
    users: userSlice,
  },
});
