import React from 'react'
import './search.style.css'

export const SearchBox = ({ handleChange,placeholder}) => {
    return (
        <div className='search'>
            <h1 className='title'>ROBO-MONSTER</h1>
               <input className='input'
                  type='search'
                  placeholder={ placeholder } 
                  onChange={ handleChange }
                  />
              
        </div>
    )
}
