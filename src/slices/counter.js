import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count++;
        },
        decrement: (state, action) => {
            state.count--;
        },
        setCount: (state, action) => {
            state.count = action.payload
        },
    },
});

export const { increment, decrement, setCount } = counterSlice.actions;

export default counterSlice.reducer;