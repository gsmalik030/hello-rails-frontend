import { configureStore } from '@reduxjs/toolkit';
import  greetingSReducer from './greetings/greetingsSlice';
export const store = configureStore({
    reducer: {
        // ...reducers
        greeting: greetingSReducer,
    },
})
