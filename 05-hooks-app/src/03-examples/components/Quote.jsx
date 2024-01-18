import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ image, name,species }) =>{
  const pRef = useRef() 
  const [boxSize, setBoxSize] = useState({ width:0, height: 0})

  useLayoutEffect(() =>{
    const { width, height } = pRef.current.getBoundingClientRect()
    setBoxSize({width, height})
  },[name])

  return(
    <>
    <blockquote 
      className='blockquote text-end'
      style={{ display: 'flex'}}
    >
      <img src={ image } alt="" srcset="" />
      <p ref={pRef} className='mb-1'>{ name}</p>
      <footer className='blockquote-footer'>{ species }</footer>
  </blockquote>
  <code>{ JSON.stringify(boxSize)}</code>
    </>
  )
}