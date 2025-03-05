import React from 'react';

function Hero() {
    return ( 
        <div class='container p-5 mb-5'>
            <div class='row text-center'>
                <h1 class='mb-3'>To Invest Like A Pro</h1>
                <button class='p-2' style={{margin:"0 auto", width:"20%"}}>Sign up Here</button>
                <p class='mt-3'> An Online platform to invest in stocks, mutual funds, and much more.</p>
                <img src='media/images/homeHero.jpeg' alt='HeroImage' class='mt-3'/>
            </div>
        </div>
     );
}

export default Hero;