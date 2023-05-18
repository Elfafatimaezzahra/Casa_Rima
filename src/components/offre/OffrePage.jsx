/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useParams } from 'react-router-dom';
import offres from '../../datas/logements.json';
import Collapse from '../Template/Collapse';
import SLider from '../Template/SLider';
import Rating from './Rating';
import Error404 from "../notFound/content"

function OffrePage() {

    const { id } = useParams()
    const offre = offres.find(offre => offre.id === id)
    if (offre === undefined) {
        return <>
            <Error404 />
        </>
    }

    return (
        <section key={offre.id} className='offre_page'>
            <SLider
                img={offre.pictures}
            />
            <header className='offre_page_header'>
                <article className='offre_page_header_infos'>
                    <h1 className='offre_page_header_infos_title'>{offre.title}</h1>
                    <h2 className='offre_page_header_infos_subtitle'>{offre.location}</h2>
                    <div className='offre_page_header_infos_tags'>
                        {offre.tags.map((tag, i) => (
                            <p key={i} className='offre_page_header_infos_tags_tag'>{tag}</p>
                        ))}
                    </div>
                </article>

                <article className='offre_page_header_hoster'>
                    <div className='offre_page_header_hoster_infos'>
                        <p className='offre_page_header_hoster_infos_name'>{offre.host.name}</p>
                        <img src={offre.host.picture} alt='host-cover' className='offre_page_header_hoster_infos_img' />
                        
                    </div>
                    <p className='phone_host'>Tel : {offre.contact}</p>
                    <Rating
                        scaleValue={offre.rating}
                    />
                </article>
            </header>

            <article className='offre_page_collapses'>
                <div className='offre_page_collapses_content'>
                    <Collapse
                        title='Description'
                        content={offre.description}
                    />
                </div>
                <div className='offre_page_collapses_content'>
                    <Collapse
                        title='Équipements'
                        content={offre.equipments.map((equipment, i) => (
                            <ul key={i}>
                                <li>• {equipment}</li>
                            </ul>
                        ))}
                    />
                </div>
            </article>
        </section>
    )
}

export default OffrePage;


// https://www.youtube.com/watch?v=jUzjqnFhPMY&t=2986s