import {configureStore } from "@reduxjs/toolkit";
import { onLoadPost, postReducer } from "../features/post";
import { combineEpics, createEpicMiddleware } from "redux-observable";

const rootEpic = combineEpics(onLoadPost);

const epicMiddleware = createEpicMiddleware()
export const store = configureStore({
  reducer: {
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(epicMiddleware),
});
epicMiddleware.run(rootEpic);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
