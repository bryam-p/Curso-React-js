import '@testing-library/jest-dom';
import { getSaludo } from '../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar hola Bryam ', () => {

        const nombre = 'Bryam';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');
        console.log(saludo);
    })

    test('getSaludo debe de retornar Hola Bryam! si no hay argumento ', () => {
        const saludo = getSaludo();
        expect( saludo ).toBe( 'Hola Carlos!');
    })
    

})
