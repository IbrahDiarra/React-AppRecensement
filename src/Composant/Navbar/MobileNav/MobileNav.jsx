import React from 'react';
import "./MobileNav.css";

export const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className='mobile-menu-container'>
                <h5>AWEC</h5>

                <ul>
                    <li>
                        <span className="menu-item">Accueil</span>
                    </li>
                    <li>
                        <span className="menu-item">Recenseurs</span>
                    </li>
                    <li>
                        <span className="menu-item">Marchands</span>
                    </li>
                    

                    <button className="contact-btn" onClick={() => {}}>
                        Login
                    </button>
                </ul>
            </div>
        </div>
    </>
  )
}
