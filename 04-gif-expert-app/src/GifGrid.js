import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from './helpers/getGifs';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => { //SE USA PARA DISPARAR LAS FUNCIONES UNA SOLA VEZ
        getGifs(category)
            .then( imgs => setImages(imgs) )
    }, [ category ]) //SE LE ENVIA UN ARREGLO 

    return (
        <div className="contenedor">
            <h3>{category}</h3>
            {
                images.map(img => (
                    <GifGridItem
                        key={img}
                        {...img} />
                ))
            }
        </div>
    )
}
