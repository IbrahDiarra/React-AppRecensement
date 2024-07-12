import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = e.target.elements.phone.value;
    const password = e.target.elements.password.value;

    if (phone === '0545885512' && password === '1234567') {
      navigate('/accueil');
    } else {
      alert('Numéro de téléphone ou mot de passe incorrect');
    }
  };

  return (
    <div className="contact-form-content">
      <h6>PAGE CONNEXION</h6>
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <span>Telephone</span>
          <input type="text" name="phone" placeholder='Telephone' required />
        </div>
        <div className="name-container">
          <span>Mot de Passe</span>
          <input type="password" name="password" placeholder='Mot de Passe' required />
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
