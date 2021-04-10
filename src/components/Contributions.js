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
                    redirect = '/fund'
                    body = 'You have money and want to help someone fulfill their basic needs? Help by giving money.'
                />
                <Card
                    imageUrl = {Help}
                    title = 'Give Something They Require'
                    redirect = '/donate'
                    body = 'See if you have any information or things that you do not use anymore and can help someone by giving them.'
                />
                <Card
                    imageUrl = {Help}
                    title = 'Feed Them'
                    redirect = '/feed'
                    body = 'If you want to feed someone instead during this pandamic, buy them some food.'
                />
            </div>
        </div>
    );
}

export default Contributions;