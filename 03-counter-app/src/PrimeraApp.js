import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ value = 10, subtitulo }) => {

    //Hooks
    const [counter, setCounter] = useState(0);

    //handleAdd
    const handleAdd = (e) => {
        setCounter(counter + 1);
        //setCounter((counter)=> counter + 1);
    }
    const handleSubstract = (e) => {
        setCounter(counter - 1);
        //setCounter((counter)=> counter + 1);
    }
    const handleReset = (e) => {
        setCounter(value);
        //setCounter((counter)=> counter + 1);
    }

    return (
        <>
            <h1>{counter}</h1>
            <span>{subtitulo}</span>
            <button onClick={handleAdd} >+1</button>
            <button onClick={handleReset} >Reset</button>
            <button onClick={handleSubstract} >-1</button>
        </>
    );
}

PrimeraApp.propTypes = {
    value: PropTypes.number.isRequired
} //RESTRINGIR LO QUE ME ENVIAN POR LOS PROPS, SE COLOCA EL ISREQUIRED PARA ARROJAR LA ALERTA

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;