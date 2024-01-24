import { useForm } from '../hooks'

export const TodoAdd = ({ handlerNewTodo }) => {

  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  })

  const onFormSubmit = ( e ) =>{
    e.preventDefault()
    if(description.length <= 1) return
    

    const newTodo = {
      id: new Date().getTime(),
      description:description,
      done:false,
    }

    handlerNewTodo( newTodo )
    onResetForm()
  }

  return(
    <form onSubmit={ onFormSubmit }>
      <input 
        type="text" 
        placeholder="Que hay que hacer?"
        className="form-control"
        name='description'
        value={ description }
        onChange={ onInputChange }
      />
      <button
        type="Submit"
        className="btn btn-primary mt-3"
      >
        Agregar
      </button>
    </form>
  )
}