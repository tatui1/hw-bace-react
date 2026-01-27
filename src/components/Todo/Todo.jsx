import { useState } from "react";
import { AddTodo } from "../AddTodo/AddTodo";
import { TodoList } from "../TodoList/TodoList";


export const Todo = () => {

    const [todos, setTodos] = useState([])

    const onAddTodo = (newTodoString) => {
        const newTodo = {
            id: Date.now(),
            title: newTodoString
        }
        setTodos([...todos, newTodo])
    }

    return(
        <div>
            <AddTodo onAddTodo={onAddTodo}/>
            <TodoList todos={todos}/>  
        </div>
    )
}