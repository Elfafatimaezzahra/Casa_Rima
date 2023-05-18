import React from 'react';
import AboutBanner from "../About/Banner"
import AboutContent from "../About/content"
import Header from "../Template/Header"
import Footer from "../Template/Footer"

function About() {
    return (
        <>
            <Header />
            <AboutBanner />
            <AboutContent />
            <Footer />
        </>
    )
}

export default About