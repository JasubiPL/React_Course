import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState =[
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false
  },
  {
    id: new Date().getTime()+1,
    description: 'Recolectar la piedra del poder',
    done: false
  }
]

export const TodoApp = () =>{

  const [ todos, dispatch ] = useReducer(todoReducer, initialState)

  return(
    <>
      <h1>Todo App: 10 <small>Pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            {
              todos.map(todo =>(
                <li key={todo.id } className="list-group-item d-flex justify-content-between">
                  <span>Item 1</span>
                  <button className="btn btn-danger"> Borrar</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <form action="">
            <input 
              type="text" 
              placeholder="Que hay que hacer?"
              className="form-control"
            />
            <button
              type="Submit"
              className="btn btn-primary mt-3"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>

    </>
  )
}