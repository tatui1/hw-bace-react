

export const TodoItem = (props) => {

    return (
    <p>
        {props.todo.title}
      <input type="text" value={props.todo.title} readOnly/>
      <button onClick={() => props.onDeleteTodo(props.todo.id)}>delete</button>
    </p>
  )

}