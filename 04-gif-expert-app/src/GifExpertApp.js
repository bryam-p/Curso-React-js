import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    /*const handleAdd = () => {
        //setCategories([...categories, 'Naruto Shippuden']);
        setCategories( cats => [...cats, 'Naruto Shippuden']);
    }*/

    return (
        <>
            <h2 className="titulo">GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }
        </>
    )
}
