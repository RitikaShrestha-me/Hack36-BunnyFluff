import { Button } from "antd";

function DonateCard(props){
    return (
        <div className='donate-card'>
            <div className = 'donate-card-image'>
                <img alt='' src={props.imageUrl} className='image' />
            </div>
            <div className = 'donate-card-title'>
                <h3>{props.title}</h3>
            </div><br />
            <div className = 'donate-card-body'>
                <p>{props.body}</p>
                <h4>Contact: {props.number}</h4>
                <Button onClick = {event =>  window.location.href= './Fund'}>Fund It</Button>
            </div>
        </div>
    );
}

export default DonateCard;