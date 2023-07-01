import { createSlice } from "@reduxjs/toolkit";

if(localStorage.getItem("formValue")=== null){
    localStorage.setItem("formValue",JSON.stringify([]))
}

const localStorageValue = JSON.parse(localStorage.getItem("formValue"));


const localStorageSlice = createSlice({
    name:"FormValue",
    initialState:localStorageValue,
    reducers:{
 // adding the form value to localstorage
        addFormValue:(state,action)=>{
           state.push(action.payload);
            localStorage.setItem("formValue",JSON.stringify(state));
        },
        deleteCard:(state,action)=>{
 // returning the items/cards excluding the carditem to be deleted and same is being saved to localstorage
           const newState =  state.filter((item,index)=>{
                return item.groupId !== action.payload;
            })
            localStorage.setItem("formValue",JSON.stringify(newState));
        }
    }
})


export default localStorageSlice;




