import Card from './card'
import Help from '../assets/help.png';


const Contributions = () => {
    return (
        
        <div className="contributions">
            <h2>CONTRIBUTIONS</h2>
            <div className="cards">
                <Card
                    imageUrl = {Help}
                    title = 'Fund Them'
                    body = 'Hi'
                />
                <Card
                    imageUrl = {Help}
                    title = 'Give Something They Require'
                    body = 'Hi'
                />
                <Card
                    imageUrl = {Help}
                    title = 'Feed Them'
                    body = 'Hi'
                />
            </div>
        </div>
    );
}

export default Contributions;