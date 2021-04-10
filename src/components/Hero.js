import hopeImage from '../assets/hope-hpe.png';    
import hopeO from '../assets/hope-o.png';    


const Hero = () => {
    return ( 
        <div className="hero-section">
            <div className='hope'>
                <img alt='Hope' className='hope-img' src={hopeImage} />
                <img alt='Hope' className='hope-o' src={hopeO} />
            </div>
            <div className="home-buttons">
                <button onClick={() =>  window.location.href='/Login'} className="home-buttons-button" style={{
                    border: 'none',
                    color: 'white',
                    backgroundColor: '#3a006f',
                }}>
                    Sign In
                </button>
                <button onClick={() =>  window.location.href='/Register'} className="home-buttons-button" style={{
                    borderColor: '#3a006f',
                    color: '#3a006f',
                    backgroundColor: 'inherit',
                }}>
                    Get Contribution
                </button>
            </div>
        </div>
     );
}
 
export default Hero;