import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [phone, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone, password })
      });

      if (response.ok) {
        //const data = await response.json();
        alert('Authentification réussie');
        // Stockez le token ou redirigez l'utilisateur
        // par exemple: localStorage.setItem('token', data.token);
      } else {
        alert('Numero de telephone ou mot de passe incorrect');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la connexion');
    }
  };

  return (
    <div className="contact-form-content">
      <h6>PAGE CONNEXION</h6>
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <span>Telephone</span>
          <input type="text" name="phone" placeholder='Telephone' value={phone} onChange={handleChangeEmail} required />
        </div>
        <div className="name-container">
          <span>Mot de Passe</span>
          <input type="password" name="password" placeholder='Mot de Passe' value={password} onChange={handleChangePassword} required />
        </div>
        <div className='remember'>
          <div className='cbox'>
            <input type="checkbox" name="remember" id="" />
            <label htmlFor="">Se souvenir</label>
          </div>
          <span className='forgot-password'>Mot de passe oublié?</span>
        </div>
        <button type="submit">SOUMETTRE</button>
      </form>
    </div>
  );
};

export default LoginForm;
