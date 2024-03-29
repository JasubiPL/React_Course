export const TodoItem = ({ todo, handlerDeleteTodo, onToggleTodo }) => {

  return(
    <li className="list-group-item d-flex justify-content-between">
      <span className={`${todo.done ? 'text-decoration-line-through': ''}`} onClick={() => onToggleTodo( todo.id )}>
        { todo.description}
      </span>
      <button 
        className="btn btn-danger"
        onClick={() => handlerDeleteTodo( todo.id ) }
      > Borrar</button>
    </li>
  )
}