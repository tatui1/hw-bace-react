import { TodoItem } from "../TodoItem/TodoItem"
<<<<<<< HEAD
import { ToggleTodo } from "../ToggleTodo/ToggleTodo"

export const TodoList = ({todos, onTodoClick}) => {

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <TodoItem 
                    title={todo.title}
                    isCompleted={todo.isComplited}
                />
                <ToggleTodo
                    isCompleted={todo.isComplited}
                    onTodoClick={()=> onTodoClick(todo.id)}
                />
                </div>
=======

export const TodoList = (props) => {

    return (
        <div className="list-container">
            {props.todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} onDeleteTodo={props.onDeleteTodo}/>
>>>>>>> 1ab075bc09a3b8e9d684b9fd12a97951dcf8d558
            ))}
        </div>
    )
}