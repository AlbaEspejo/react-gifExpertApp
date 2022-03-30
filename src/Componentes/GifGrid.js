import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
// import { getGifs } from '../Helpers/getGifs';
import GifGridItems from './GifGridItems';

const GifGrid = ({category}) => {

    const {data:imagenes,loading} = useFetchGifs(category)

    // const [imagenes, setImagenes] = useState([]);

    // 

  return (
    <>
    <h3>{category}</h3>
    {loading && <p>Cargando...</p>}
        <div className='card-grid animate__animated animate__fadeIn'>
        
            {
                imagenes.map( img => (
                    <GifGridItems
                        key={img.id}
                        {...img}
                    />
                ))                       
            }  
        </div>
    </>
  )
}

export default GifGrid;