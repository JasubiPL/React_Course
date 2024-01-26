import { useEffect } from "react"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"

export const TodoApp = () =>{

  const { handlerNewTodo, handlerDeleteTodo, onToggleTodo, todos, todosCount, pendingTodos } = useTodo()

  useEffect(() =>{
    localStorage.setItem('todos', JSON.stringify( todos ))
  },[todos])
  

  return(
    <>
      <h1>Todo App: { todosCount } <small>Pendientes: { pendingTodos }</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={todos} 
            handlerDeleteTodo={ handlerDeleteTodo } 
            onToggleTodo={ onToggleTodo }
          />
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />

          <TodoAdd handlerNewTodo={ handlerNewTodo } />
        </div>
      </div>

    </>
  )
}