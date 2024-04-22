import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './users/reducer/user.reducer';
import jobReducer from './jobs/reducer/jobs.reducer';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const middlewares: any = [];
const rootReducer = combineReducers({
  user: userReducer.reducer,
  jobs: jobReducer.reducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}


const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middlewares)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;

