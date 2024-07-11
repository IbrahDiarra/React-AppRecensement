import React from 'react';
import './Login.css';
import LoginForm from './LoginForm/LoginForm';
import LoginNavBar from './LoginNavBar/LoginNavBar';


const Login = () => {
  return (
        <>
            <LoginNavBar/>
            <div className='login-container'>
                <LoginForm/>
            </div>
        </>
  )
}

export default Login