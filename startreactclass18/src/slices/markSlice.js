import { createSlice } from "@reduxjs/toolkit";

const markSlice = createSlice({
    name: "marks",
    initialState: {
        value: 580
    },

    reducers: {
        percentageConverter: (state, actions) => {
            console.log("state", state);
            console.log("action", actions);

            state.value = state.value / 6;
            const data = actions.payload.id;
            console.log(data)
        }
    }
})

export const { percentageConverter } = markSlice.actions;
export default markSlice.reducer;