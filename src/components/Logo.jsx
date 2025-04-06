import React from 'react';
import './logo.css'; 
import profileImg from '../images/NU Logo.png';

function Logo() {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };

    return (
        <div className="d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
                <img
                    src={profileImg}
                    alt="NU Logo"
                    className="h-[60px] w-auto" 
                />
              <h1 className="logo-text">
                NATIONAL UNIVERSITY
                </h1>
            </a>
         
        </div>
    );
}

export default Logo;