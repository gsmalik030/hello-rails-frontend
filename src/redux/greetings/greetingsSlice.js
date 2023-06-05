import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    greetings: [],
    isLoading: true,
};

export const getGreetings = createAsyncThunk(
    "greetings/getGreetings",
    async () =>{
        const url = "http://localhost:3000/api/v1/messages";
        try{
            const resp = await axios(url);
            const {data} = resp;
            const greetingsData = [];
            data.forEach((element)=>{
                greetingsData.push({
                    id: element.id,
                    greeting: element.content,
                })
            });
            return greetingsData;
        } catch (error){
            <h3>{error}</h3>;
        }
        return null;
    }
);

const greetingsSlice = createSlice({
    name: "greetings",
    initialState,
    extraReducers: {
        [getGreetings.pending]: (state) => {
            state.isLoading = true;
        },
        [getGreetings.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.greetings = action.payload;
        },
        [getGreetings.rejected]: (state) => {
            state.isLoading = false;
        },
    },
})

export default greetingsSlice.reducer;