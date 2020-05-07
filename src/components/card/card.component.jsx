import React from 'react'
import './card.style.css'

export const Card = (props) => {
    return (
        <div className='card'>
            <img alt='monster' src={`https://robohash.org/set=set${props.monstr.id}?size=200x200`}/>
            <h2>{props.monstr.name}</h2>
            <p>{props.monstr.email}</p>
        </div>
    )
}
