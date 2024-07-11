import React from 'react';
import './home.css';
import AccueilInfo from '../AccueilInfo/AccueilInfo';
import AccueilCard from '../AccueilCard/AccueilCard';


const Home = () => {
  return (
    <section className="contact-container">
        <div className="contact-content">
            <div style={{flex:1}}>
                <AccueilInfo/>
            </div>
            <div style={{flex:1}} className='info'>
                <AccueilCard
                    iconUrl="./assets/images/marchands.png"
                    text="ibrahdiarra40@gmail.com"
                    titre="Marchands"
                    nombre="259"
                />
                <AccueilCard
                    iconUrl="./assets/images/recenseur.png"
                    text="https://github.com/IbrahDiarra"
                    titre="Recenseurs"
                    nombre="15"
                />
            </div>
        </div>
    </section>
  )
}

export default Home;