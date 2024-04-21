import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './users/reducer/user.reducer';
import jobReducer from './jobs/reducer/jobs.reducer';

const rootReducer = combineReducers({
  user: userReducer.reducer,
  jobs: jobReducer.reducer
})

export const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
