import { useDispatch } from "react-redux";
import { addTodoItem } from "../redux/todoListReducer";
import { useEffect, useState } from "react";

function UpdateList({data}) {
 
       const [item , setItem] = useState('')
       const dispatch = useDispatch();
      useEffect(()=>{
       setItem(data.todoItem)
      },[data])

       const handleAddItem = () => {
        const updated = item? {...data ,['todoItem']:item }:{...data}
        
      dispatch(addTodoItem(updated))
      setItem(null)
      };
   return ( item != null && <>
     <input  value={item} onChange={(event)=>setItem(event.target.value) }/>
     <button onClick={handleAddItem}>update</button>
    </> );
}

export default UpdateList;