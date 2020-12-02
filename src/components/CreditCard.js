import React from 'react';

function CreditCard(props) {

    let srcImg = props.type === "visa" ? "2.png" : "2.png";
    
    return (
        <div class="container" style={{"width": "400px", "height": "200px", "background-color": `${props.bgColor}`, "color": `${props.color}`}}>
            <div style={{"width": "5px", "max-width": "50%"}}>
                <img class="d-flex img-fluid contain" src={srcImg} />
            </div>
            
            <p className="card-number">{props.number}</p>
            <p className="expiration-month">{props.expirationMonth}</p>
            <p className="expiration-year">{props.expirationYear}</p>
            <p className="bank">{props.bank}</p>
            <p className="owner">{props.owner}</p>
            
        </div>
    )
}
export default CreditCard;