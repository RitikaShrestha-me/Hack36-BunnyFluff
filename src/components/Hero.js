import hopeImage from '../assets/hope-hpe.png';
import hopeO from '../assets/hope-o.png';
import dot from '../assets/dot.png'
import help from '../assets/help.png'
import React, { useState, useEffect } from "react";

const Hero = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="hero-section">
            <div className='hope'>
                <img src={dot} alt="dot" className="dot-left" />
                <div className="dot-left-content">
                    <h3>Pandamic</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur
                    </p>
                </div>
                <img src={dot} alt="dot" className="dot-right" />
                <div className="dot-right-content">
                    <img alt='help' width="100%" src={help} />
                </div>
                <img alt='Hope' className='hope-img' src={hopeImage} />
                <img alt='Hope' style={{ transform: `translateY(min(${offsetY * 0.9}px,660px))` }} className='hope-o' src={hopeO} />
            </div>
            <div className="home-buttons">
                <button onClick={() => window.location.href = '/Login'} className="home-buttons-button" style={{
                    border: 'none',
                    color: 'white',
                    backgroundColor: '#3a006f',
                }}>
                    Sign In
                </button>
                <button onClick={() => window.location.href = '/Register'} className="home-buttons-button" style={{
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


// function parallax(element, distance, speed){
//     const item = document.getElementsByClassName(element);

//     item.style.transform = `translateY(${distance * speed}px)`;
//   }

//   window.addEventListener('scroll', function(){
//     parallax('hope-o', window.scrollY, 1);
//   });

export default Hero;