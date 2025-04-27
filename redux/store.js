import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    // api: api.reducer,  // যদি থাকে
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(), // এখন শুধু default রাখো
});

setupListeners(store.dispatch);
