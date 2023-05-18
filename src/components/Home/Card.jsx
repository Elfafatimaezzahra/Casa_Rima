import React from 'react';

function Card({ id, title, cover }) {
    return (
        <li key={id} className='offre'>
            <a href={'/offre/' + id}>
                <figure className='offre_figure'>
                    <img src={cover} alt={title} className='offre_figure_cover' />
                    <figcaption className='offre_figure_figcaption'>
                        <h2 className='offre_figure_figcaption_title'>{title}</h2>
                    </figcaption>
                </figure>
            </a>
        </li>
    )
}

export default Card;