import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./slices/todoslice";
import filterslice from "./slices/filterslice";



const todostore = configureStore({
    reducer:{
        todoreducer:todoslice,
        filterreducer:filterslice
    }
})

export default todostore