import React , {useState} from "react";
import './Navbar.css';
import { MobileNav } from "./MobileNav/MobileNav";

const NavBar = () =>{
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <span>AWEC</span>

                    <ul>
                        <li>
                            <a href="/accueil"  className="menu-item">Accueil</a>
                        </li>
                        <li>
                            <a href="/recenseur" className="menu-item">Recenseurs</a>
                        </li>
                        <li>
                            <a href="/marchands" className="menu-item">Marchands</a>
                        </li>
                        

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

export default NavBar