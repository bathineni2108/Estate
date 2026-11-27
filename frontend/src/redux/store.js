import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import {persistStore, persistReducer} from 'redux-persist';
import storageModule from 'redux-persist/lib/storage';

const storage = storageModule.default ?? storageModule;

const persistConfig = {
  key: 'root',
  storage,
  version: 1, 
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export const persistor = persistStore(store);