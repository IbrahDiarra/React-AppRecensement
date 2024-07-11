import React from 'react';
import './LoginMobile.css';

const LoginMobile = ({isOpen, toggleMenu}) => {
    return (
      <>
          <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
              <div className='mobile-menu-container'>
                  <h5>AWEC</h5>
  
                  <ul>
                      <button className="contact-btn" onClick={() => {}}>
                          BIENVENUE
                      </button>
                  </ul>
              </div>
          </div>
      </>
    )
  }
  

export default LoginMobile