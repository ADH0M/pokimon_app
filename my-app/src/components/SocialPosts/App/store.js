import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../Posts/Page.slice";

const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});

export default store;
