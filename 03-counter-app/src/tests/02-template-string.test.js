import '@testing-library/jest-dom';
import { getSaludo } from '../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar hola Bryam ', () => {

        const nombre = 'Bryam';

        const saludo = getSaludo(nombre);
        console.log(saludo);

    })

})
