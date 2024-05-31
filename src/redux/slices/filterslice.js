import { createSlice } from "@reduxjs/toolkit";

export const StatusFilter = {
    All:'all',
    Active:'active',
    Completed:'completed'
}


const initialState = {
    status: StatusFilter.All
}


const filterSlice = createSlice({
    name:'filters',
    initialState,
    reducers:{
        statusFilterChanged(state,action){
            state.status = action.payload
        }
    }
})


export const {statusFilterChanged} = filterSlice.actions

export default filterSlice.reducer