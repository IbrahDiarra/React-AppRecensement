import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    role: '',
    quartier: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Utilisateur enregistré avec succès');
      } else {
        alert('Erreur lors de l\'enregistrement');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'enregistrement');
    }
  };

  return (
    <div className="contact-form-content">
      <h6>Enregistrement d'un recenseur</h6>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className='input-box'>
            <label>Nom utilisateur</label>
            <input type="text" name="username" placeholder='Nom utilisateur' value={formData.username} onChange={handleChange} required />
          </div>
          <div className='input-box'>
            <label>Mot de Passe</label>
            <input type="password" name="password" placeholder='Mot de passe' value={formData.password} onChange={handleChange} required />
          </div>
        </div>

        <div className="input-container">
          <div className='input-box'>
            <label>Nom</label>
            <input type="text" name="firstname" placeholder='Nom' value={formData.firstname} onChange={handleChange} required />
          </div>
          <div className='input-box'>
            <label>Prenom</label>
            <input type="text" name="lastname" placeholder='Prenom' value={formData.lastname} onChange={handleChange} required />
          </div>
        </div>

        <div className="input-container">
          <div className='input-box'>
            <label>Numero de Tel</label>
            <input type="text" name="phone" placeholder='Numero de Tel' value={formData.phone} onChange={handleChange} required />
          </div>
          <div className='input-box'>
            <label>Role</label>
            <input type="text" name="role" placeholder='Role' value={formData.role} onChange={handleChange} />
          </div>
        </div>

        <div className='input-box'>
          <label>Quartier</label>
          <input type="text" name="quartier" placeholder='Quartier' value={formData.quarter} onChange={handleChange} />
        </div>

        <div className="button-container">
          <button type="submit">SOUMETTRE</button>
          <button><a href="/voir-recenseur">VOIR LA LISTE</a></button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
