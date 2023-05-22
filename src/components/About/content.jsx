import React from 'react';
import Collapse from "../Template/Collapse";
import photo_about from '../../img/photo_about.jpg'

function AboutContent() {
    return (
        <>
        <section className='content_about'>
           <img src={photo_about} alt="photo_about" className='offre_figure_cover' />
           <div className='about_parag'>
               <h2>A Propos de Nous</h2>
               <p>Bienvenue sur notre site web de location d'appartements, votre destination de confiance pour trouver le logement idéal. 
                Que vous soyez à la recherche d'un appartement moderne en centre-ville, 
                d'une maison spacieuse en banlieue ou d'un studio confortable pour une courte durée, 
                notre plateforme conviviale vous permettra de naviguer facilement à travers une large sélection de propriétés disponibles à la location.

                 <br/><br/>Notre équipe dévouée travaille en étroite collaboration avec des propriétaires vérifiés et des agents immobiliers de confiance pour vous offrir une expérience de location sécurisée et sans tracas. 
                 Chaque liste d'appartement est accompagnée de photos détaillées, de descriptions complètes et d'informations sur les commodités locales, 
                 vous permettant ainsi d'avoir une vision claire de chaque propriété avant même de la visiter.</p>
           </div>
        </section>
        <section className="about_collapses">
            <div className="about_collapses_content">
                <Collapse
                    title='Fiabilité'
                    content='Les annonces postées sur CASA RIMA garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et toutes les informations 
                    sont régulièrement vérifiées par nos équipes.'
                />
            </div>
            <div className="about_collapses_content">
                <Collapse
                    title='Respect'
                    content='La bienveillance fait partie des valeurs fondatrices de CASA RIMA. 
                    Tout comportement discriminatoire ou de perturbation du voisinage
                    entraînera une exclusion de note plateforme.'
                />
            </div>
            <div className="about_collapses_content">
                <Collapse
                    title='Service'
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une 
                    expérience parfaite. N'hésitez pas à nous contacter si vous avez 
                    la moindre question."
                />
            </div>
            <div className="about_collapses_content">
                <Collapse
                    title='Sécurité'
                    content="La sécurité est la priorité de CASA RIMA. Aussi bien pour nos hôtes que 
                    pour les voyageurs, chaque logement correspond aux critères de sécurité
                    établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont 
                    bien respectés. Nous organisons également des ateliers sur la sécurité 
                    domestique pour nos hôtes."
                />
            </div>
        </section>
        </>
    )
}

export default AboutContent;