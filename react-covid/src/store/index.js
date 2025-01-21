import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../features/covidSlice";

// /**
//  * membuat store menggunakan configure store 
//  * menerima param Object: reducer
//  * menambahkan slice reducer movies  ke store
//  */

const store = configureStore({
    reducer:{
        covids: covidReducer
    }
})

//export store
export default store;