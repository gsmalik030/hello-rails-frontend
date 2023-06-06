import { configureStore } from '@reduxjs/toolkit';
import greetingSReducer from './greetings/greetingsSlice';

const store = configureStore({
  reducer: {
    // ...reducers
    greeting: greetingSReducer,
  },
});

export default store;
