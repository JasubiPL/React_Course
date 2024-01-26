import { useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initialState =[]

const init = () =>{
  return JSON.parse( localStorage.getItem('todos'))|| []
}

export const useTodo = () =>{
  const [ todos, dispatch ] = useReducer(todoReducer, initialState, init)

  const pendingTodos = todos.filter(todo => !todo.done).length
  const todosCount = todos.length

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

  const onToggleTodo = ( id ) =>{
     dispatch({
       type: '[TODO] Toggle Todo',
       payload: id
     })
  }
  
  
  return{
    todos,
    handlerNewTodo,
    handlerDeleteTodo,
    onToggleTodo,
    pendingTodos,
    todosCount
  }
}