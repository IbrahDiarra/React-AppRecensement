import React from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  return (
    <div className="contact-form-content">
        <h6>Enregistrement d'un recenseur</h6>
        <form action="">
            
            <div className="input-container">
                <div className='input-box'>
                    <label htmlFor="">Nom utilisateur</label>
                    <input type="text" name="username" placeholder='Nom utilisateur' required/>
                </div>
                <div className='input-box'>
                    <label htmlFor="">Mot de Passe</label>
                    <input type="password" name="password" placeholder='Mot de passe' id="" required/>
                </div>  
            </div>

            <div className="input-container">
                <div className='input-box'>
                    <label htmlFor="">Nom</label>
                    <input type="text" name="fistname" placeholder='Nom' id="" required/>
                </div>
                <div className='input-box'>
                    <label htmlFor="">Prenom</label>
                    <input type="text" name="lastname" placeholder='Prenom' id="" required/>
                </div>  
            </div>
          
            <div className="input-container">
                <div className='input-box'>
                    <label htmlFor="">Numero de Tel</label>
                    <input type="text" name="phone" placeholder='Numero de Tel' id="" required/>
                </div>
                <div className='input-box'>
                    <label htmlFor="">Role</label>
                    <input type="text" name="role" placeholder='Role' id="" />
                </div> 
            </div>
            
            <div className='input-box'>
                <label htmlFor="">Quartier</label>
                <input type="text" name="quarter" placeholder='Quartier' id="" />
            </div>
            
            <div className="button-container">
                  <button>Voir La Liste</button>
                  <button>SOUMETTRE</button>
            </div>
            
        </form>
    </div>
  )
}

export default RegisterForm;