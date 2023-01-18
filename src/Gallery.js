import React, { useState, useEffect } from 'react';
import PICTURES from './data/pictures'
import { useDynamicTransition } from './hooks';

const SECONDS = 1000
const MINIMUM_DELAY = 1 * 1000
const MINIMUM_INCREMENT = 1

function Gallery() {
    const [delay, setDelay] = useState(3 * SECONDS)
    const [increment, setIncrement] = useState(1)
  
     const index = useDynamicTransition({
        delay, increment, length: PICTURES.length
    })

    const updateDelay = event => {
        const delay = Number(event.target.value) * 1000
        setDelay(delay < MINIMUM_DELAY ? MINIMUM_DELAY : delay)
    }

    const updateIncrement = e => {
        const increment = Number(e.target.value)
        setIncrement( increment < MINIMUM_INCREMENT ? MINIMUM_INCREMENT : increment)
    }

    return (
        <div className='Gallery'>
            <img src={PICTURES[index].image} alt="Gallery" />
            <div className='multiform'>
                <div>
                    Gallery transition delay (seconds) :
                    <input type="number" onChange={updateDelay} />
                </div>
                <div>
                    Gallery Increment:
                    <input type="number" onChange={updateIncrement} />
                </div>
            </div>
        </div>
    )
}

export default Gallery