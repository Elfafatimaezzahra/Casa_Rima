import React from 'react';
import Header from '../Template/Header';
import Footer from '../Template/Footer';
import photo_home from '../../img/salon.jpg'
import CardLanding from './Card_landing';
import Contact from './Contact';


function LandingContent() {
    return (
        <>
            <Header />
            <div className='landing_parag'>
                <img src={photo_home} alt="photo_home" className='photo_home' />
                <div className='paragraph'>
                    <h2>BIENVENUE CHEZ CASA RIMASS</h2>
                    <p>Découvrez dès maintenant notre site web de location d'appartements et
                        laissez-nous vous aider à trouver le logement parfait qui correspond à votre style de vie et à votre budget.</p>
                    <div>
                        <a href="/home">
                            <button>Nos Offres</button>
                        </a>
                    </div>
                </div>

            </div>
            <h2 className='titre_card'>Le plus loué</h2>
            <CardLanding />
            <div className="myForm" id='myForm'>
            <Contact />
            </div>
           
            <Footer />

        </>
    )
}

export default LandingContent;