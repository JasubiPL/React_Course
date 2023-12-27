const getResult = () => 'hola mundo'

const newMessage = {
  message: 'Hola Mundo',
  title: 'Jasubi'
}

export const FirstApp = () =>{

  return(
    <>
      <h1>{ getResult() }</h1>
      {/* <code>{ JSON.stringify( newMessage )}<code/> */}
      <p>Soy un parrafo</p>
    </>
  );
}