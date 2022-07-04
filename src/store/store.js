import { configureStore } from '@reduxjs/toolkit';

// Slices are a way to group reducers together.
import { authSlice } from './auth';
import { journalSlice } from './journal';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
  },
});
