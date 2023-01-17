import React, { useState, useEffect } from 'react';
import PICTURES from './data/pictures'

const SECONDS = 1000
const MINIMUM_DELAY = 1 * 1000
const MINIMUM_INCREMENT = 1

function Gallary() {
    const [index, setIndex] = useState(0)
    const [delay, setDelay] = useState(3 * SECONDS)
    const [increment, setIncrement] = useState(1)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(storedIndex => (storedIndex+increment)%PICTURES.length)
        }, delay);

        return () => {
            clearInterval(interval)
        }
    }, [delay, increment])

    const updateDelay = event => {
        const delay = Number(event.target.value) * 1000
        setDelay(delay < MINIMUM_DELAY ? MINIMUM_DELAY : delay)
    }

    const updateIncrement = e => {
        const increment = Number(e.target.value)
        setIncrement( increment < MINIMUM_INCREMENT ? MINIMUM_INCREMENT : increment)
    }

    return (
        <div className='Gallary'>
            <img src={PICTURES[index].image} alt="" />
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

export default Gallary