import { createSlice,createSelector } from "@reduxjs/toolkit";



const initialState = {
    status:'incomplete',
    entities:{}
    }

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        todoAdded(state,action){
            const todo = action.payload
            console.log(todo);
            state.entities[todo.id] = todo
        },
        todoToggled(state,action){
            console.log("item to be toggled",action.payload);
            const todoId = action.payload
            const todo = state.entities[todoId]
            todo.completed = !todo.completed
        },
        todoDeleted(state,action){
            console.log("item to be deleted",action.payload);
            delete state.entities[action.payload]
        }
    }
})

export const {
    todoAdded,todoDeleted,todoToggled
} = todoSlice.actions

export default todoSlice.reducer