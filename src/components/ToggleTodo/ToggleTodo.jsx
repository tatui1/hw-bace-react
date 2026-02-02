export const ToggleTodo = ({isCompleted, onTodoClick}) => {
    return (
        <button onClick={onTodoClick}>
            {isCompleted ? '💯': 'лучшая'}
        </button>
    )
}
