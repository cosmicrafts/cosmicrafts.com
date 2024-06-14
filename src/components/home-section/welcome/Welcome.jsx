import React from 'react';
import './welcome.scss';
import HomeSection from '../HomeSection';
import VideoBackground from './VideoBackground'; // Note the uppercase "V"
import ImageSlider from './ImageSlider'; // Import the ImageSlider component
import Button from '../../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faApple, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
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
              <span>METAVERSE READY</span>
              <h2 className="subtitle">Galactic strategy clash in real-time!</h2>
            </div>
            <div className="description">
              Play free, battle your way to victory, and collect NFTs & tokens that boost your Metaverse empire.
            </div>
            <div className="btns">
              <a href="https://cosmicrafts.com/Cosmicrafts.exe" target="_blank" rel="noopener noreferrer">
                <Button className="btn-second">
                  <FontAwesomeIcon icon={faWindows} className="icon-margin" /> Windows
                </Button>
              </a>
              <a href="https://cosmicrafts.com/Cosmicrafts.dmg" target="_blank" rel="noopener noreferrer">
                <Button className="btn-second">
                  <FontAwesomeIcon icon={faApple} className="icon-margin" /> Mac
                </Button>
              </a>
              <a href="https://cosmicrafts.com/Cosmicrafts.AppImage" target="_blank" rel="noopener noreferrer">
                <Button className="btn-second">
                  <FontAwesomeIcon icon={faLinux} className="icon-margin" /> Linux
                </Button>
              </a>
              <a href="https://cosmicrafts.fandom.com/" target="_blank" rel="noopener noreferrer">
                <Button className="btn-main">
                  <FontAwesomeIcon icon={faBook} className="icon-margin" /> Learn More
                </Button>
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
