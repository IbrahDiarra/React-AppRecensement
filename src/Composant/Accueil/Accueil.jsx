import React from 'react';
import './Accueil.css';
import NavBar from '../Navbar/Navbar';
import Home from './home/home';

const Accueil = () => {
  return (
    <>
        <NavBar/>
        <div className="home-container">
            <Home/>
        </div>
    </>
  )
}

export default Accueil;