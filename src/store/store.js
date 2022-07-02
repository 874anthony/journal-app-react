import { configureStore } from '@reduxjs/toolkit';

// Slices are a way to group reducers together.
import { authSlice } from './auth';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
