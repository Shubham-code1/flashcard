import { createSlice } from "@reduxjs/toolkit";

const idSendingSlice = createSlice({
    name:"sendId",
    initialState:0,
    reducers:{
        idSender:(state,action)=>{
            state = action.payload;
            return state;
        }
        
    }
})

export default idSendingSlice;