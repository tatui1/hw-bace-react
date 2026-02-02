<<<<<<< HEAD
import { TodoList } from "../TodoList/TodoList"
import { AddTodo } from "../AddTodo/AddTodo"
import { useState } from "react"

export const Todo = () => {
    const [todos, setTodos] = useState([])

    const onAddTodo = (newTodoString) => {

    
        const newTodo =  {
            id: todos.length + 1,
            title: newTodoString, 
            isComplited: false
=======
import { useState } from "react"
import { AddTodo } from "../AddTodo/AddTodo"
import { TodoList } from "../TodoList/TodoList"

export const Todo = () => {
    const [todos, setTodos] = useState([])
    const onAddTodo = (newTodoString) => {
        const newTodo = {
            id: Date.now(),
            title: newTodoString
>>>>>>> 1ab075bc09a3b8e9d684b9fd12a97951dcf8d558
        }
        setTodos([...todos, newTodo])
    }

<<<<<<< HEAD
    //  const onToggleTodo = (id) => {
    //         const copyTodos = [...todos]
    //         for (let i = 0 ; i < copyTodos.length; i++) {
    //             const todoItem = copyTodos[i]
    //             if (todoItem.id === id){
    //                 todoItem.isComplited = !todoItem.isComplited
    //             }
    //         }

            const updatedTodos = (todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    
                    }
                }
                return todo
            }))
            setTodos(updatedTodos)
        }

        return (
        <div>
            <AddTodo onAddTodo={onAddTodo}/>
            <TodoList 
                todos={todos}
                onTodoClick={onToggleTodo} />
        </div>
    )
=======
    const onDeleteTodo = (id) => {
        setTodos(todos.filter(item => item.id !==id))
    }
    return (
        <div className="todo-container">
            <h1>Your watch list:</h1>
            <AddTodo onAddTodo={onAddTodo}/>
            <TodoList todos={todos} onDeleteTodo={onDeleteTodo}/>  
        </div>
    )
}
>>>>>>> 1ab075bc09a3b8e9d684b9fd12a97951dcf8d558
