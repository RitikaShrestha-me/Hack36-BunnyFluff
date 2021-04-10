import React from 'react'

function Card(props){
    return (
        <div className='card' onClick={event =>  window.location.href= './donate'}>
            <div className = 'card-image'>
                <img alt='' src={props.imageUrl} className='image' />
            </div>
            <div className = 'card-title'>
                <h3>{props.title}</h3>
            </div><br />
            <div className = 'card-body'>
                <p>{props.body}</p>
            </div>
        </div>
    );
}


export default Card;