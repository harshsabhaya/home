import React, { useState, useEffect } from 'react';
import PICTURES from './data/pictures'

function Gallary() {
    const [index, setIndex] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(storedIndex => (storedIndex+1)%PICTURES.length)
        }, 3000);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className='Gallary'>
            <img src={PICTURES[index].image} alt="" />
        </div>
    )
}

export default Gallary