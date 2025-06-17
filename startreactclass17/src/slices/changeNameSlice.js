import { createSlice } from "@reduxjs/toolkit";
const changeNameSlice=createSlice(
{
    name:"changeName",
    initialState:{
        value:"Mohit"
    },
    reducers:{
        changeNameHandler:(state)=>{
            console.log(state)
            state.value="Jagmohan"
        }
        ,  setDefaultNameHandler:(state)=>{
            state.value="Mohit"
        }
    }
}
)
export const {changeNameHandler,setDefaultNameHandler}=changeNameSlice.actions;
export default changeNameSlice.reducer;


 