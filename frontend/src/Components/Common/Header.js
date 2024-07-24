import React from 'react';

import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    return (
            <header className="header-container">
                <div className="header-left">Home Page</div>
                <div className="header-right">
                    Izmir Vucaj
                    <i className="fa-solid fa-user header-icon"></i> {/* Font Awesome icon */}
                </div>
            </header>
     
    );
}

export default Header;
