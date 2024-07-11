import React, { useState } from 'react'
import LoginMobile from './LoginMobile/LoginMobile';
import './LoginNavBar.css'

const LoginNavBar = () =>{
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <LoginMobile isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <span>AWEC</span>

                    <ul>
                        <button className="contact-btn" onClick={() => {}}>
                            BIENVENUE
                        </button>
                    </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className={"material-symbols-outlined"} style={{fontSize:"1.8rem"}}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    ); 
};

export default LoginNavBar