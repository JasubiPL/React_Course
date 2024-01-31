import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext)

  return(
    <>
      <h1>Login Page</h1>
      <hr />
      
      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>

      <button
      onClick={() => setUser({
        id: 1,
        name: 'Jasubi',
        email: 'jasubi@etc.com'
      })} 
        className="btn btn-primary">
        Establecer Usuario
      </button>
    </>
  )
}