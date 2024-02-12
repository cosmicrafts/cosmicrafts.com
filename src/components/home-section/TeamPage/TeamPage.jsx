import React from 'react';
import './TeamPage.scss';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedinIn } from 'react-icons/fa';

const SocialMediaSlide = () => {
    return (
        <div className="social-media-slide">
            <h2 className="social-media-slide__title">Connect with Us</h2>
            <p className="social-media-slide__intro">Stay updated and engaged with us on social media!</p>
            <div className="social-media-slide__icons">
                <a href="https://twitter.com/cosmicrafts" target="_blank" rel="noopener noreferrer" className="social-media-slide__icon"><FaTwitter /></a>
                <a href="https://instagram.com/cosmicraftz" target="_blank" rel="noopener noreferrer" className="social-media-slide__icon"><FaInstagram /></a>
                <a href="https://facebook.com/cosmicrafts" target="_blank" rel="noopener noreferrer" className="social-media-slide__icon"><FaFacebook /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-media-slide__icon"><FaLinkedinIn /></a>
            </div>
            <p className="social-media-slide__recommendation">Follow us for updates, behind-the-scenes insights, and community interaction!</p>
        </div>
    );
};

export default SocialMediaSlide;
