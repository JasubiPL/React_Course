import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], handlerDeleteTodo }) => {
  
  return(
    <ul className="list-group">
    {
      todos.map(todo =>(
        <TodoItem key={todo.id} todo={ todo } handlerDeleteTodo ={ handlerDeleteTodo } />
      ))
    }
  </ul>
  )
}