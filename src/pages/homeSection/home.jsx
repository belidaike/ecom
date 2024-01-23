import React, { useState } from 'react'
import Hero from '../heroSection/hero'
import Shop from '../shopSection/shop'
import Benefit from '../benefitSection/benefit'
import Testimony from '../testimonySection/testimony'
import Footer from '../footerSection/footer'

const Home = () => {

    return (
        <main>
            <Hero />
            <Benefit />
            <Shop />
            <Testimony />
            <Footer />
        </main>
    )
}

export default Home
