//Se crea estado inicial
const initialState =[{
  id: 1,
  todo: 'Recolectar la piedra del alma',
  done: false
}]

//Se crea el reducer y se le asigna un estado inicial 'OBLIGATORIO'
const todoReducer = (state = initialState, action = {} ) =>{
  if(action.type === '[TODO] add todo'){
    return [...state, action.payload]
    console.log(state)
  }

  return state
}

//Se asigna el valor del reducer a una variable
let todos = todoReducer()

//Se crea un segundo elemento
const newTodo = {
  id:2,
  todo:'Recolectar la piedra del poder',
  done:false
}

//Se crea la accion
const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
}

// Se añade el nuevo elemnto al estado
todos = todoReducer( todos, addTodoAction)

console.log({state: todos})