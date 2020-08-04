
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=33lVnzdyUbwLwTDQtDcioAk415ry58Iu&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json(); //Se uso desestructuracion 

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;

}