import { AddCategory } from "../../components/AddCategory";
import { fireEvent, render, screen } from '@testing-library/react'

describe('Pruebas en <AddCategory />', () => {
  
  test('debe de cambiar el valor de la caja de texto', () => {
    
    render( <AddCategory onAddCategories={() => {}}/>)
    const input = screen.getByRole('textbox');

    fireEvent.input( input,{ target: {value:'Jasubi'} } )
    expect( input.value ).toBe('Jasubi')
  });

  test('Debe de llamar onAddCategory si el input tiene un valor', () => {
    
    const inputValue = 'Jasubi'
    const onAddCategories = jest.fn()

    render( <AddCategory onAddCategories={ onAddCategories }/>)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input( input,{ target: {value: inputValue} } )
    fireEvent.submit( form )

    expect( input.value ).toBe( '')

    expect( onAddCategories ).toHaveBeenCalled()
    expect( onAddCategories ).toHaveBeenCalledTimes( 1 )
    expect( onAddCategories ).toHaveBeenCalledWith( inputValue )
  });

  test('No debe de llamar onAddCategory si el input no tiene un valor', () => {
    
    const onAddCategories = jest.fn()

    render( <AddCategory onAddCategories={ onAddCategories }/>)

    const form = screen.getByRole('form')
    fireEvent.submit( form )

    expect( onAddCategories ).toHaveBeenCalledTimes( 0 )
    expect( onAddCategories ).not.toHaveBeenCalled()
  });

});