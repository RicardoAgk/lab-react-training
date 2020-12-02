import React from 'react';

function Random() {
    let valueOne = Math.random()*6
    return(
        <div className="random">
            <p>{ valueOne }</p>
        </div>
    )
}

export default Random;