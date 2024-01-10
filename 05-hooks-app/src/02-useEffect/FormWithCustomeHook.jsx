import { useEffect, useState } from "react"
import { Message } from "./Message"
import { useForm } from "../hooks/useForm"

export const FormWithCustomeHook = () => {

  const { formState, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  })

  const { username, email, password } = formState


  return(
    <>
      <h1>Formulariocon custome Hook</h1>
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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={ password }
        onChange={ (e) => onInputChange(e)}
      />

      <button className="btn btn-primary mt-2" onClick={() => onResetForm({username: '', email: '', password:''})}>
        Limpiar
      </button>

      {
        (username === 'Jasubi2') && <Message />
      }
    </>
  )
}