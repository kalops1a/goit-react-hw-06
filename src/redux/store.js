import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: ['payload.timestamp'],
        ignoredPaths: ['items'],
      },
    }),
});

export const persistor = persistStore(store);
export default store;