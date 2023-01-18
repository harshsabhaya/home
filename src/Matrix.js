import React, { useState } from 'react';
import MATRIX_FRAME from './data/matrix'
import { useDynamicTransition } from './hooks';

const MINIMUM_DELAY = 10
const MINIMUM_INCREMENT = 1

function Matrix() {
    const [delay, setDelay] = useState(500)
    const [increment, setIncrement] = useState(5)

    const index = useDynamicTransition({
        delay, increment, length: MATRIX_FRAME.length
    })
    
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