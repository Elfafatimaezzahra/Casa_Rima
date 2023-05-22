import React from 'react';
// import offres from '../../datas/logements.json'
import Card from './Card'

function ShowCards({data}) {
    return (
        <section className='offres_container'>
            <ul className='offres_list'>
                {data.map(({ id, title, cover }) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    )
}

export default ShowCards;