import React from 'react';
import './VoirMarchand.css';
import NavBar from '../Navbar/Navbar';
import MarchandTable from './MarchandTable/MarchandTable';

const VoirMarchand = () => {
  return (
    <>
        <NavBar/>
        <div className="voir-user-container">
          <MarchandTable/>
        </div>
    </>
  )
}

export default VoirMarchand;