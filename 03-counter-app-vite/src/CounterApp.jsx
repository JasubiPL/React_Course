import { useState } from "react"

export const CounterApp = () =>{

  const [value, setValue] = useState(0)


  return(
    <>
      <h1>Counter App</h1>
      <button onClick={() => setValue( value + 1 )}> + </button>
      <p>{ value }</p>
    </>
  )
}