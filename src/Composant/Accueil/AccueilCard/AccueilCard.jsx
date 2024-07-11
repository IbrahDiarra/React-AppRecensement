import React from 'react';
import './AccueilCard.css';

const AccueilCard = ({iconUrl, text, titre, nombre}) => {
    return (
      <div className="contact-details-card">
          <div className="info">
            <h6>{titre}</h6>
            <h4 >{nombre}</h4>
          </div>
          <div className="icon">
              <img src={iconUrl} alt={text} />
          </div>   
      </div>
    )
  }

export default AccueilCard;