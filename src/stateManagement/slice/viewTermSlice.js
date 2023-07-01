import { createSlice } from "@reduxjs/toolkit";

const localStorageValue = JSON.parse(localStorage.getItem("formValue"));


const termViewSlice = createSlice({
    name:"termView",
    initialState:localStorageValue,
    reducers:{
        termToView:(state,action)=>{
            //whichever id will be recieved here it will return the associated item to be displayed in term card page. 
            const termValueIs =  state.filter((item,index)=>{
                return action.payload === item.groupId;
            })
            return termValueIs;
        }
    }
});

export default termViewSlice;


