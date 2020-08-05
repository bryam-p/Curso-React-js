import React from 'react'
import { useFetchGifs } from './hook/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from './helpers/getGifs';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    /*
        //const [images, setImages] = useState([]);
        useEffect(() => { //SE USA PARA DISPARAR LAS FUNCIONES UNA SOLA VEZ
            getGifs(category)
                .then( imgs => setImages(imgs) )
        }, [ category ]) //SE LE ENVIA UN ARREGLO 
        */
    return (
        <div className="contenedor">
            <h3>{category}</h3>
            { loading && <p>Loading</p> }
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
