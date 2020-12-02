import React from 'react';

function BoxColor(props) {
    return (
        <div style={{"backgroundColor": `rgb(${props.r}, ${props.g}, ${props.b})`, "width": "600px", "height": "80px"}}>
        <p> rgb( {props.r}, {props.g}, {props.b} ) </p>
        </div>
    )
}

export default BoxColor;
