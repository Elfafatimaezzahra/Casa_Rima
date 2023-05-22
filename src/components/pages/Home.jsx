import React, { useState } from 'react';
import Header from "../Template/Header"
import Footer from "../Template/Footer"
import HomeBanner from "../Home/Banner"
import ShowCards from "../Home/ShowCard"
import offres from '../../datas/logements.json'


function Home() {
    const [data, setData] = useState(offres);
    const [query, setQuery] = useState("");

    const searchList =  ["title"]

    // console.log(offres[1])

    const search = ()=>{
        return data.filter((item) =>
        searchList.some((list) =>
          item[list].toLowerCase().includes(query.toLowerCase())
        )
      );
    };
    return (
        <>
            <Header />
            <HomeBanner />
            <input type="text" placeholder="Search by title" className="search" onChange={(e) => setQuery(e.target.value)}/>
            <ShowCards data={search()} />
            <Footer />
        </>
    )
}

export default Home