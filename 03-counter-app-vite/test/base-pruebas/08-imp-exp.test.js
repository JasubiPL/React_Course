import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
  
  test('getHeroeById debe de retornar un herie oir ID', () => {
    
    const id = 1;
    const hero = getHeroeById( id );
    console.log(hero)

    expect(hero).toEqual({id:1, name:'Batman', owner:'DC'})

  });

  test('getHeroeById debe de retornar undefined si no existe', () => {
    const id = 10;
    const hero = getHeroeById( id );
    expect(hero).toBeFalsy();
  });

  test('getHeroesByOwner debe regresar heroes de DC', () => {
    
    const owner = 'DC';
    const heroes = getHeroesByOwner( owner );

    expect( heroes.length).toBe(3)

  });

});