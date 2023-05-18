import React from 'react';
import Header from "../Template/Header"
import Footer from "../Template/Footer"
import HomeBanner from "../Home/Banner"
import ShowCards from "../Home/ShowCard"


function Home() {
    return (
        <>
            <Header />
            <HomeBanner />
            <ShowCards />
            <Footer />
        </>
    )
}

export default Home