import { memo } from "react"

export const ShowIncrement = memo(({ increment }) =>{

  console.log('Me volvi a renderizar 😢')

  return(
    <button className="btn btn-success" onClick={() => {increment()}}>
      Incrementar
    </button>
  )
})