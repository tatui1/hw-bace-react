<<<<<<< HEAD
import { useState } from "react";

export const AddTodo = (props) => {
=======
import { useState } from "react"

export const AddTodo = (props) => {

>>>>>>> 1ab075bc09a3b8e9d684b9fd12a97951dcf8d558
    const [todoValue, setTodoValue] = useState('')

    const submitTodo = () => {
        props.onAddTodo(todoValue)
        setTodoValue('')
<<<<<<< HEAD

    }
    return(
        <div>
=======
        
    }
    return(
        <div className="add-form">
>>>>>>> 1ab075bc09a3b8e9d684b9fd12a97951dcf8d558
            <input 
                placeholder =" write your todo"
                value={todoValue}
                type="text" 
                onChange={e => setTodoValue(e.target.value)}
            />
            <button onClick={submitTodo} > Add Todo </button>
        </div> 
    )
}