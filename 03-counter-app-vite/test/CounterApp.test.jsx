import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Probando el componente CounterApp', () => {

  const value = 100
  test('Debe hacer match com el snapshot', () => {
  const { container } = render ( <CounterApp /> )

  expect( container ).toMatchSnapshot()
  });

  test('Debe mostrar un valor inicial de 100', () => {
    render ( <CounterApp value={value}/> )
    expect(parseInt(screen.getByText(value).innerHTML)).toBe(100)
  });

  test('Debe aumentar el valor con el boton +1', () => {
    render ( <CounterApp value={value}/> )
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText('101')).toBeTruthy()
    // screen.debug()
  });

  test('Debe reducir el valor con el boton -1', () => {
    render ( <CounterApp value={value}/> )
    fireEvent.click(screen.getByText('-1'))
    expect(screen.getByText('99')).toBeTruthy()
    screen.debug()
  });
});