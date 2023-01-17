import React, { useState, useEffect } from 'react';
import MATRIX_FRAME from './data/matrix'

const MINIMUM_DELAY = 10
const MINIMUM_INCREMENT = 1

function Matrix() {
    const [index, setIndex] = useState(0)
    const [delay, setDelay] = useState(500)
    const [increment, setIncrement] = useState(5)

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(storedIndex => (storedIndex+increment)%MATRIX_FRAME.length)
      }, delay)
    
      return () => clearInterval(interval)
    }, [delay, increment])
    
    const updateDelay = event => {
        const delay = Number(event.target.value)
        setDelay(delay < MINIMUM_DELAY ? MINIMUM_DELAY : delay)
    }

    const updateIncrement = e => {
        const increment = Number(e.target.value)
        setIncrement( increment < MINIMUM_INCREMENT ? MINIMUM_INCREMENT : increment)
    }
    return (
        <div className='Matrix'>
            <img src={MATRIX_FRAME[index]} alt="matrix-animation" />
            <div className='multiform'>
                <div>
                    Frame transition delay (miliseconds) :
                    <input type="number" onChange={updateDelay} />
                </div>
                <div>
                    Frame Increment:
                    <input type="number" onChange={updateIncrement} />
                </div>
            </div>
        </div>
    )
}

export default Matrix