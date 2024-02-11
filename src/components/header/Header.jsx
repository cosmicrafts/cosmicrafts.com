import React from 'react';
import './header.scss';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Use useNavigate instead of useHistory
import logo from '../../assets/images/logo.svg';

const Header = () => {
    const navigate = useNavigate(); // Use useNavigate hook
    const location = useLocation();

    const handleLogoClick = () => {
        navigate("/", { state: { slide: 'welcome' } });
    };

    return (
        <div className="header">
            <div className="header__inner container">
                <div className="header__logo" onClick={handleLogoClick}>
                    <img src={logo} alt="Company Logo" />
                </div>
                <ul className="header__nav">
                    <li><Link to="/" state={{ slide: 'welcome' }}> overview</Link></li>
                    <li><Link to="/factions">factions</Link></li>
                    <li><Link to="/" state={{ slide: 'champion' }}>characters</Link></li>
                    <li><Link to="/" state={{ slide: 'team' }}>Team</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
