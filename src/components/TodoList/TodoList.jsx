import { TodoItem } from "../TodoItem/TodoItem"
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
            ))}
        </div>
    )
}