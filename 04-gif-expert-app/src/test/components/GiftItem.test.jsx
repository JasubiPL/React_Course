import { render, screen } from '@testing-library/react'
import { GifItem } from '../../components/GifItem';

describe('Pruebas en <GiftItem.jsx />', () =>{
  
  const title = 'Jasubi'
  const url = 'https://www.google.com/saitama.jpgu'

  test('debe de hacer match con el snaptshot ', () => {
    
    
    const { container } = render(<GifItem title={ title } image={ url } />)
    expect(container).toMatchSnapshot()
  });

  test('debe de mostart la imagen con el URL y el ALT indicado', () => {
    render( <GifItem title={ title } image={ url } /> )
    // screen.debug()
    // expect( screen.getByRole('img').src ).toBe( url )
    // expect( screen.getByRole('img').alt ).toBe( title )
    const { src, alt } = screen.getByRole('img')
    expect( src ).toBe( url )
    expect( alt ).toBe( title )
  });

  test('Debe de mostrar el titulo en el componente ', () => {
    render( <GifItem title={ title } image={ url } /> )
    expect( screen.getByText( title ) ).toBeTruthy()
  });
}) 

