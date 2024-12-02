import { createSlice } from "@reduxjs/toolkit";



export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        taskList: [],
    },
    reducers: {
        addTask: (state, action) => {
            state.taskList.push({
                id: action.payload.id,
                title: action.payload.title,
                time: action.payload.time,
            }) 
        },

    }
})

export const { addTask} = todoSlice.actions
export default todoSlice.reducer