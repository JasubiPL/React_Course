import { FirstApp } from "../src/FirstApp";
import { render } from "@testing-library/react"

describe('Pruebas en FirstApp', () => {
  
  // test('Debe de hacer match con el snapshot', () => {
    
  //   const title = 'Titulo de mi App'
  //   const { container } = render(<FirstApp title={ title }/>)

  //   expect( container ).toMatchSnapshot()
  // });
  
  test('Debe de mostrar el titulo en un h1', () => {
    
    const title = 'Titulo de mi App'
    const { container, getByText, getByTestId } = render(<FirstApp title={ title }/>)
    expect(getByTestId('test-title').innerHTML).toContain(title)

    // const h1 = container.querySelector('h1')
    // expect( h1.innerHTML ).toContain(title)

  });

  test('Debe de subtitulo por las props', () => {
    
    const title = 'Titulo de mi App'
    const subTitle = 'Subtitulo'
    const {  getByText } = render(<FirstApp title={ title } subtitle={subTitle}/>)

    expect(getByText(subTitle)).toBeTruthy()

    // const h1 = container.querySelector('h1')
    // expect( h1.innerHTML ).toContain(title)

  });
});