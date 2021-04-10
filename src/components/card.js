import React from 'react'

// import Help from '../assets/help.png';

function Card(props){
    
    return (
        <div className='card' onClick={redirect()}>
            <div>
                <img alt='' src={props.imageUrl} className='image' />
            </div>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                <p>{props.body}</p>
            </div>
        </div>
    );
}

function redirect(){

}

export default Card;