

export const TodoItem = (props) => {

    return (
    <p>
        {props.todo.title}
      <button onClick={() => props.onDeleteTodo(props.todo.id)}>delete</button>
    </p>
  )

}

