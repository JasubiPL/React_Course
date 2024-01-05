import { render, screen } from "@testing-library/react";
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
});