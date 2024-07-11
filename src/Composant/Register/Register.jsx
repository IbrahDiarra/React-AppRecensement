import React from 'react';
import './Register.css';
import RegisterForm from './RegisterForm/RegisterForm';
import NavBar from '../Navbar/Navbar';

const Register = () => {
  return (
    <>
        <NavBar/>
        <div className='register-container'>
             <RegisterForm/>
        </div>
    </>
  )
}

export default Register;