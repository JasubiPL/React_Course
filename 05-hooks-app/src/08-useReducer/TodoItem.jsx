export const TodoItem = ({ todo, handlerDeleteTodo }) => {

  return(
    <li className="list-group-item d-flex justify-content-between">
      <span>{ todo.description}</span>
      <button 
        className="btn btn-danger"
        onClick={() => handlerDeleteTodo( todo.id ) }
      > Borrar</button>
    </li>
  )
}