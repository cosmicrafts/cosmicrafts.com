import './credit.scss';
import { useRef, useEffect } from 'react';
import { bgVideo } from '../../../assets/videos';
import Button from '../../button/Button';
import logo from '../../../assets/images/cosmicfont.svg';

const Credit = (props) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const playVideo = () => {
            if (videoRef.current) {
                videoRef.current.muted = true; // Mute the video
                videoRef.current.play().catch((error) => {
                    console.error('Error playing video: ', error);
                });
            }
        };

        // Play the video when the component mounts
        playVideo();

        // Listen for the 'ended' event and replay the video when it finishes
        const replayVideo = () => {
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                playVideo();
            }
        };

        // Listen for the 'ended' event to replay the video
        videoRef.current.addEventListener('ended', replayVideo);

        // Cleanup event listener on component unmount
        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('ended', replayVideo);
            }
        };
    }, []);

    return (
        <div className={`credit overlay ${props.isActive ? 'active' : ''}`}>
            <video
                ref={videoRef}
                width="100%"
                height="auto"
                loop={true}
                className="overlay"
            >
                <source src={bgVideo} type="video/mp4" />
            </video>
            <div className="credit__content">
                {/* Add the logo here */}
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="title">
                    <span>Unleash the hero within</span>
                    <h2 className="main-color">ADVENTURE AWAITS</h2>
                </div>
                <div className="btns m-t-4">
                    <Button className="btn-main">PLAY NOW</Button>
                    <Button className="btn-second">GET STARTED</Button>
                </div>
            </div>
        </div>
    );
};

export default Credit;
