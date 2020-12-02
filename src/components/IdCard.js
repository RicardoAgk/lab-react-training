import React from 'react';

function IdCard(props){
   return (
       <div>
           <div className="container">
             <p>First name: {props.firstName}</p>
             <p>Last name: {props.lastName}</p>
             <p>Gender: {props.gender}</p>
             <p>Height: {props.height}</p>
             <p>Birth: {props.birth}</p>
             <img src={props.picture}/>
           </div>
       </div>
   )
}

export default IdCard;