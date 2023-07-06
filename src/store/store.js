import {configureStore} from '@reduxjs/toolkit';

// Slices

import contactSlice from './contactSlice';

export const store = configureStore({
  reducer: {
    contact: contactSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
});
