import Card from './DonateCard'

import Food1 from '../assets/food1.jpg'
import Food2 from '../assets/food2.jpg'
import Food3 from '../assets/food1.jpg'

import Stuff1 from '../assets/stuff1.jpg'
import Stuff2 from '../assets/stuff2.jpg'
import Stuff3 from '../assets/stuff3.jpg'

import Money1 from '../assets/money1.jpg'
import Money2 from '../assets/money2.jpg'
import Money3 from '../assets/money1.jpg'

const Donate = () => {
    return (
        <div className='donate'>
            <div className='donate-fund'>
                <h2>Fund Them</h2>
                <div className='donate-fund-cards'>
                    <Card
                        imageUrl={Food1}
                        title='Have not ate since 5 days'
                        redirect='/fund'
                        number = '9876543210'
                        body='You have money and want to help someone fulfill their basic needs? Help by giving money.'
                    />
                    <Card
                        imageUrl={Money2}
                        title='Need Money for Corona Treatment of Wife'
                        redirect='/fund'
                        number = '9876543210'
                        body='You have money and want to help someone fulfill their basic needs? Help by giving money.'
                    />
                    <Card
                        imageUrl={Money3}
                        title='Person does not have a family or source of income'
                        redirect='/fund'
                        number = '9876543210'
                        body='You have money and want to help someone fulfill their basic needs? Help by giving money.'
                    />
                </div>
            </div>
            <div className='donate-stuff'>
                <h2>Donate Stuff</h2>
                <div className='donate-stuff-cards'>
                    <Card
                        imageUrl={Stuff1}
                        title='No money to rear the child'
                        redirect='/fund'
                        number = '9876543210'
                        body='You have money and want to help someone fulfill their basic needs? Help by giving money.'
                    />
                    <Card
                        imageUrl={Stuff2}
                        title='No source of income to house the children'
                        redirect='/fund'
                        number = '9876543210'
                        body='You have money and want to help someone fulfill their basic needs? Help by giving money.'
                    />
                    <Card
                        imageUrl={Stuff3}
                        title='No Home, No Food, No Clothes'
                        redirect='/fund'
                        number = '9876543210'
                        body='You have money and want to help someone fulfill their basic needs? Help by giving money.'
                    />
                </div>
            </div>
            <div className='donate-food'>
                <h2>Feed Them</h2>
                <div className='donate-food-cards'>
                    <Card
                        imageUrl={Food1}
                        title='Have not ate since 5 days'
                        redirect='/fund'
                        number = '9876543210'
                        body='You have money and want to help someone fulfill their basic needs? Help by giving money.'
                    />
                    <Card
                        imageUrl={Food2}
                        title='It is my Birthday, but no one to Celebrate'
                        redirect='/fund'
                        number = '9876543210'
                        body='You have money and want to help someone fulfill their basic needs? Help by giving money.'
                    />
                    <Card
                        imageUrl={Food3}
                        title='Have not ate since 5 days'
                        redirect='/fund'
                        number = '9876543210'
                        body='You have money and want to help someone fulfill their basic needs? Help by giving money.'
                    />
                </div>
            </div>
        </div>
    );
}

export default Donate;