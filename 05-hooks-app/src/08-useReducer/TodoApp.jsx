import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const initialState =[
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del alma',
  //   done: false
  // },
  // {
  //   id: new Date().getTime()+1,
  //   description: 'Recolectar la piedra del poder',
  //   done: false
  // }
]

const init = () =>{
  return JSON.parse( localStorage.getItem('todos'))|| []
}

export const TodoApp = () =>{
  const [ todos, dispatch ] = useReducer(todoReducer, initialState, init)

  useEffect(() =>{
    localStorage.setItem('todos', JSON.stringify( todos ))
  },[todos])

  const handlerNewTodo = ( todo ) =>{
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch( action )
  }

  const handlerDeleteTodo = ( id ) =>{
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
    
  }



  

  return(
    <>
      <h1>Todo App: 10 <small>Pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} handlerDeleteTodo={ handlerDeleteTodo }/>
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