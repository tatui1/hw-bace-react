<<<<<<< HEAD
import styles from './styles.module.css'

export const TodoItem = ({title, isCompleted}) => {
    return(
        <div>
            <p>
                {title}
            </p>
            {/* <p>
                {isCompleted ? 'Done' : 'Not yet'}
            </p> */}
        </div>
      
    )
}

=======


export const TodoItem = (props) => {

  return (
    <div className="todo-item">
      <input type="text" value={props.todo.title} readOnly />
      <button onClick={() => props.onDeleteTodo(props.todo.id)}>delete</button>
    </div>
  )

}
>>>>>>> 1ab075bc09a3b8e9d684b9fd12a97951dcf8d558
