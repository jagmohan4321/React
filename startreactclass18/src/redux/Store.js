import { configureStore } from "@reduxjs/toolkit";
import markReducer from "../slices/markSlice.js";
export const store= configureStore({
reducer:{
marks:markReducer,

},
})