import React from 'react';
import Hero from './Hero';
import Promotion from './Promotion';
import Stats from './Stats'; 
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';
import Footer from '../Footer'
import Navbar from '../Navbar';

function HomePage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <Promotion />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </>
     );
}

export default HomePage;