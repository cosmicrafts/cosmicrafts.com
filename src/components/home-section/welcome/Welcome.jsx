// Welcome.jsx

import React from 'react';
import './welcome.scss';
import HomeSection from '../HomeSection';
import VideoBackground from './VideoBackground'; // Note the uppercase "V"
import ImageSlider from './ImageSlider'; // Import the ImageSlider component
import Button from '../../button/Button';
import 'swiper/css/mousewheel';

const Welcome = (props) => {
  return (
    <HomeSection className={`welcome ${props.isActive ? 'active' : ''}`}>
      <VideoBackground />

      <div className="welcome__grid">
        <div className="welcome__info">
          {/* Info Content */}
          <div className="welcome__info__content">
            <div className="title">
              <span>Real-time</span>
              <h2 className="subtitle">Galactic strategy clash!</h2>
            </div>
            <div className="description">
              Play free, battle your way to victory, and collect valuable NFTs & tokens that boost your galactic empire.
            </div>
            <div className="btns">
              <a href="https://play.cosmicrafts.com" target="_blank" rel="noopener noreferrer">
                <Button className="btn-main">PLAY NOW</Button>
              </a>
              <a href="https://cosmicrafts.fandom.com/" target="_blank" rel="noopener noreferrer">
                <Button className="btn-second">LEARN MORE</Button>
              </a>
            </div>
          </div>
        </div>

        <div className="welcome__slider">
          <ImageSlider />
        </div>
      </div>
    </HomeSection>
  );
};

export default Welcome;
