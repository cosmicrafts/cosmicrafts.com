import React, { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        const navElement = document.querySelector('.header__nav'); 
    
        if (isOpen) {
          navElement.classList.add('closing'); 
          setTimeout(() => {
            navElement.classList.remove('nav-active', 'closing'); 
            setIsOpen(false); // Update state after animation completes
          }, 400); 
        } else {
          setIsOpen(true); // Set state first 
          navElement.classList.add('nav-active'); // Then add class
        }
      };
    
    return (
        <div className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <Link to="/" 
                          state={{ slide: 'welcome' }} 
                          onClick={() => setIsOpen(false)}> {/* Added to close menu  */}
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="burger-menu" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size="30" /> : <FaBars size="30" />}
                </div>
                <ul className={`header__nav ${isOpen ? 'nav-active' : ''}`}>
                    <li><Link to="/" state={{ slide: 'welcome' }} onClick={toggleMenu}>Overview</Link></li>
                    <li><Link to="/factions" onClick={toggleMenu}>Factions</Link></li>
                    <li><Link to="/" state={{ slide: 'champion' }} onClick={toggleMenu}>Characters</Link></li>
                    <li><Link to="/team" onClick={toggleMenu}>Team</Link></li>
                    <li><Link to="/privacy-policy" onClick={toggleMenu}>Privacy Policy</Link></li> {/* Added Privacy Policy link */}
                </ul>
            </div>
        </div>
    );
};

export default Header;
