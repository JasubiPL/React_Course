import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Jasubi2',
    email: 'jasubi@gmail.com'
  })

  const { username, email } = formState

  const onInputChange = ({ target }) =>{
    const { name, value } = target
    setFormState({
      ...formState,
      [ name ]:value
    })
  }


  useEffect(() =>{
    // console.log('useEffect Called')
  }, [])

  useEffect(() =>{
    // console.log('Form Change')
  }, [formState])

  useEffect(() =>{
    // console.log('Email change')
  }, [email])


  return(
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ (e) => onInputChange(e) }
      />

      <input 
        type="email"
        className="form-control mt-2"
        placeholder="user@email.com"
        name="email"
        value={ email }
        onChange={ (e) => onInputChange(e)}
      />

      {
        (username === 'Jasubi2') && <Message />
      }
    </>
  )
}