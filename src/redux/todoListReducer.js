import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodoItem: (state, action) => {
            state.push(action.payload);
        } ,
        deleteTodoItem : (state, action) =>{
       return state.filter(list=> list.id !==action.payload)

        },
        updateItem:(state , action )=> state.filter(item => item.id !== action.payload.id)


    }
});


export const { addTodoItem , deleteTodoItem , updateItem} = todoSlice.actions;
export default todoSlice.reducer;
