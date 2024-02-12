// Header component
import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner container">
                <div className="header__logo">
                    <Link to="/" state={{ slide: 'welcome' }}>
                        <img src={logo} alt="Company Logo" />
                    </Link>
                </div>
                <ul className="header__nav">
                    <li><Link to="/" state={{ slide: 'welcome' }}>Overview</Link></li>
                    <li><Link to="/factions">Factions</Link></li>
                    <li><Link to="/" state={{ slide: 'champion' }}>Characters</Link></li>
                    <li><Link to="/team">Team</Link></li> {/* Corrected route path */}
                </ul>
            </div>
        </div>
    );
};

export default Header;
