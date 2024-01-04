import { FirstApp } from "../src/FirstApp";
import { render } from "@testing-library/react"

describe('Pruebas en FirstApp', () => {
  
  test('Debe de hacer match con el snapshot', () => {
    
    const title = 'Titulo de mi App'
    render(<FirstApp title={ title }/>)

  });

});