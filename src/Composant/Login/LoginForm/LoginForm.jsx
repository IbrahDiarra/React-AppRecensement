import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="contact-form-content">
        <h6>PAGE CONNEXION</h6>
        <form action="/accueil">
            <div className="name-container">
                <span>Email</span>
                <input type="email" name="email" placeholder='Email'/>     
            </div>
            <div className="name-container">
                 <span>Mot de Passe</span>
                <input type="password" name="password" placeholder='Mot de Passe'/>
            </div>
            <div className='remember'>
              <div className='cbox'>
                <input type="checkbox" name="remember" id="" />
                <label htmlFor="">Se souvenir</label>
              </div>
              <span className='forgot-password'>Mot de passe oublié?</span>
            </div>
           
            <button>SOUMETTRE</button>
        </form>
    </div>
  )
}

export default LoginForm;