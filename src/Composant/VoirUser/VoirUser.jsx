import React from 'react';
import './VoirUser.css';
import NavBar from '../Navbar/Navbar';
import UserTable from './UserTable/UserTable'

const VoirUser = () => {
  return (
    <>
        <NavBar/>
        <div className="voir-user-container">
          <UserTable/>
        </div>
    </>
  )
}

export default VoirUser;