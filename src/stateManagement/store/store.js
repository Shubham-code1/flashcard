import { configureStore } from "@reduxjs/toolkit";
import localStorageSlice from "../slice/LocalStorageSlice";
import termViewSlice from "../slice/viewTermSlice";
import idSendingSlice from "../slice/idSendingSlice";

const localStorageReducer =  localStorageSlice.reducer;
const termViewReducer = termViewSlice.reducer;
const idSendingReducer = idSendingSlice.reducer;

// combining all reducers
const reducer = {                   
    formValue:localStorageReducer,
    termToBeViewed:termViewReducer,
    id:idSendingReducer,
}

const store = configureStore({
    reducer
})

export default store;