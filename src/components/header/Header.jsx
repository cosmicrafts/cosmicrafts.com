import React from 'react';
import './header.scss';
import logo from '../../assets/images/logo.png'; // Check if this path is correct

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner container">
                <div className="header__logo">
                    {/* Add a descriptive alt text */}
                    <img src={logo} alt="Logo" />
                </div>
                <ul className="header__nav">
                    <li><a href="#">overview</a></li>
                    <li><a href="#">factions</a></li>
                    <li><a href="#">characters</a></li>
                    <li><a href="#">team</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
