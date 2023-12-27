const getResult = () => 'Jasubi'

const newMessage = {
  message: 'Hola Mundo',
  title: 'Jasubi'
}

export const FirstApp = ( { title, subtitle } ) =>{

  return(
    <>
      <h1>{ title }</h1>
      {/* <h1>{ getResult() }</h1> */}
      {/* <code>{ JSON.stringify( newMessage )}<code/> */}
      <p>{ subtitle }</p>
    </>
  );
}