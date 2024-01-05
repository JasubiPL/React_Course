import { FirstApp } from "../src/FirstApp";
import { render, screen } from "@testing-library/react"

describe('Pruebas en FirstApp', () => {
  
  const title = "Este es el titulo"
  const subTitle = 'Subtitulo'

  test('Debe hacer match con el snapshot', () => {

    const { container } = render (<FirstApp title={title} />)
    expect( container ).toMatchSnapshot()
  });

  test('Debe mostrar el mensaje "soy goku"', () => {
    render (<FirstApp title={title} />)
    expect(screen.getByText(title)).toBeTruthy()
    // screen.debug()
  });

  test('Debe mostrar el titulo por H1"', () => {
    render (<FirstApp title={title} />)
    expect(screen.getByRole('heading',{level: 1}).innerHTML ).toContain(title)
    
  });

  test('Debe de subtitulo por las props', () => {
    
    const title = 'Titulo de mi App'
    render(<FirstApp title={ title } subtitle={subTitle}/>)

    expect(screen.getByText(subTitle)).toBeTruthy()


  });


});