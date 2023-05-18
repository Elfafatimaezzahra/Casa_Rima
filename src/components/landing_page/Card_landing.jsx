import React from 'react';
import Card from '../Home/Card';

function CardLanding() {
    return (
        <section className='offres_container'>
            <ul className='offres_list'>
                
                    <Card
                        id={"c67ab8a7"}
                        title={"Appartement cosy"}
                        cover={"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"}
                    />
                    <Card
                        id={"b9123946"}
                        title={"Appartement proche Canal Saint Martin"}
                        cover={"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"}
                    />
                    <Card
                        id={"0979876d"}
                        title={"Appartement de Standing - 10e"}
                        cover={"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg"}
                    />
                
            </ul>
        </section>
    )
}

export default CardLanding;