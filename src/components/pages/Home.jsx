import React, { useState } from 'react';
import Header from "../Template/Header"
import Footer from "../Template/Footer"
import HomeBanner from "../Home/Banner"
import ShowCards from "../Home/ShowCard"
import offres from '../../datas/logements.json'


function Home() {
    const [query, setQuery] = useState("");

    const keys =  ["title", "location", "tags"]

    // console.log(offres[1])

    const search = (offres)=>{
        return offres.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(query))
        );
    };
    return (
        <>
            <Header />
            <HomeBanner />
            <input type="text" placeholder="Search..." className="search" onChange={(e) => setQuery(e.target.value)}/>
            <ShowCards offres={search(offres)} />
            <Footer />
        </>
    )
}

export default Home