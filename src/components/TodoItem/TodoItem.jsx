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

