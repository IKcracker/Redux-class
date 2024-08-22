import { useSelector, useDispatch } from "react-redux";
import {deleteTodoItem, updateItem } from  '../redux/todoListReducer'
import UpdateList from "./updatelist";
import { useState } from "react";

function TodoList() {
    const todoList = useSelector(state => state.todoList);
    const [update , setUpdate] = useState(null)
    const dispatch = useDispatch() ;
    const updatingItem = (item)=>{
      const{payload} =  dispatch(updateItem(item))
       setUpdate(old => ({...old, payload}))
    }

    return (
        <>
        <ul>
            {todoList.map((item) => (
                <div>
            
                <li key={item.id}>{item.todoItem}</li>
                <button onClick={()=> dispatch(deleteTodoItem(item.id))}>delete</button>
                <button onClick={()=>updatingItem(item)}>update</button>
                
                
                </div>
            ))}
        </ul>
        {update && <UpdateList data = {update.payload}/>}
        </>
    );
}

export default TodoList;
