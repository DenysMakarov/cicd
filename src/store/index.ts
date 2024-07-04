import { configureStore } from '@reduxjs/toolkit';
import { appApi } from './api/app.api';

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer, // Add the generated reducer as a new top-level slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware), // Use the generated middleware
});
