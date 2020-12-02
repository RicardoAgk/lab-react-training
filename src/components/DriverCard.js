import React from 'react';
import Rating from './Rating'

function DriverCard(props) {
    return (
        <div class="container" style={{"width": "400px", "height": "200px"}}>
            <p>{props.name}</p>
            <img style={{"width": "100px", "height": "100px", "border-radius": "50%"}} src={props.img} />
            <Rating>{props.rating}</Rating>
            <p>{props.car.model} {props.car.licensePlate}</p>
        </div>
    )
}

export default DriverCard;