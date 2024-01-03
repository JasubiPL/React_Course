import { useState } from "react"

export const CounterApp = ({ value }) =>{

  const [counter, setCounter] = useState( value )


  return(
    <>
      <h1>Counter App</h1>
      <button onClick={() => setCounter( counter + 1 )}> +1 </button>
      <button onClick={() => setCounter( counter - 1 )}> -1 </button>
      <button onClick={() => setCounter( value )}> Reset </button>
      <p>{ counter }</p>
    </>
  )
}