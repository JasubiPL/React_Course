import { useState } from 'react'

export  const AddCategory = ({onAddCategories, cleanCategories}) => {
  
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (e) =>{
    setInputValue(e.target.value);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    if(inputValue.trim().length <= 0) return;
    onAddCategories(inputValue);
    setInputValue('');
  }
  
  return(
    <div className='form-container'>
      <form onSubmit={( onSubmit )}>
        <input 
          type='text'
          placeholder='Buscar Gifs'
          value={ inputValue }
          onChange={ onInputChange }
        />
      </form>
      <button onClick={ cleanCategories }>Limpiar</button>
    </div>

  )
}