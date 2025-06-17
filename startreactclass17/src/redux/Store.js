import { configureStore } from '@reduxjs/toolkit'
import changeNameReducer from "../slices/changeNameSlice.js"
export const store = configureStore({
    reducer: {
        changeName: changeNameReducer
    },
})
