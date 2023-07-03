import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import pokemon from './assets/pokemon-game.jpg';
import codm from './assets/call-of-duty-mobile.jpg';
import stardew from './assets/stardew-valley.jpg';
import './index.css';

const SlidingElement = () => {
  return ( 
    <div className="all">
        <div className="featured">
            <h2>Featured Games</h2>
        </div>
        
        <div className="carouselWrap" >
        <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs={false} >
            <a href="/ReviewPage">
                <div>
                    
                    <p className="legend">Pokemon </p>
                    
                        <img className = "carousel-image" src={pokemon} />
                    
                    
                    
                </div>
            </a>
            <a href="/ReviewPage">
                <div>
                    
                        <p className="legend">Call of Duty Mobile</p>
                    
                        <img className = "carousel-image" src={codm} />
                    
                    
                    
                </div>
            </a>
            <a href="/ReviewPage">
                <div>
                    
                        <p className="legend">Stardew Valley</p>
                    
                        <img className = "carousel-image" src={stardew} />
                    
                    
                    
                </div>
            </a>
            
        </Carousel>
    </div>
    </div>
    
    
  );
};

export default SlidingElement;