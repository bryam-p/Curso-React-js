import React, { useState } from 'react';
import { AddCategory } from './AddCategory';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    /*const handleAdd = () => {
        //setCategories([...categories, 'Naruto Shippuden']);
        setCategories( cats => [...cats, 'Naruto Shippuden']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>{
                categories.map( category => {
                    return <li key={ category }>{ category }</li>;
                })
            }
            </ol>
        </>
    )
}
