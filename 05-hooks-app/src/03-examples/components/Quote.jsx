export const Quote = ({ image, name,species }) =>{
  return(
    <blockquote className='blockquote text-end'>
      <img src={ image } alt="" srcset="" />
      <p className='mb-1'>{ name}</p>
      <footer className='blockquote-footer'>{ species }</footer>
  </blockquote>
  )
}