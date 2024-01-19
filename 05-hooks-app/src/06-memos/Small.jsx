import { memo } from "react"

export const Small = memo(({ value }) =>{
  console.log('Se dispara el render')

  return(
    <>
      { value }
    </>
  )
})