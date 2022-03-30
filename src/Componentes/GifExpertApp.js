import React from 'react';
import { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  // const handleAdd = ()=>{
  //   setCategories([...categories, 'Hunter Ball'])
  // }

  return (
    <>
        <div id='header'>
            <h2 id='cabecera'>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories = {setCategories}/>
            <ol>
              {
                categories.map(category =>(
                 <GifGrid 
                  key={category} 
                  category={category}

                  />
                ))
              }
            </ol>
            
        </div>
    </>
  )
}

export default GifExpertApp