import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {

    const [count, setCount] = useState(0);

    useEffect( () => { //SE USA PARA DISPARAR LAS FUNCIONES UNA SOLA VEZ
        getGifs();
    }, []) //SE LE ENVIA UN ARREGLO 

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=33lVnzdyUbwLwTDQtDcioAk415ry58Iu&q=Rick+and+Morty&limit=10';
        const resp = await fetch(url);
        const { data } = await resp.json(); //Se uso desestructuracion 

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    }

    return (
        <div>
            <h3>{category}</h3>
            <h3>{ count }</h3>
            <button onClick={() => setCount(count + 1)}>Agre</button>
        </div>
    )
}
