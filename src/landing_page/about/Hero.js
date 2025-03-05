import React from 'react';

function Hero() {
    return ( 
        <div class='container mt-5'>
            
            <div class='row text-center border-bottom p-5'>
                <h3><span id='about-brand' class='text-center'><b>TRADE-EASE</b></span></h3><br/><br/>
                <p class='text-muted mb-5' style={{fontSize:"25px"}}>The name itself embodies our aim: making trading effortless. <br/>We provide a seamless and efficient platform designed to simplify and enhance your trading experience.</p>
            </div>

            <div class='border-bottom mt-5'>
                <div class='row mt-4 mb-3'>
                    <div class='col-6'>
                        <h4 class='text-center mb-5' style={{color:'rebeccapurple'}}>Our Mission</h4>
                        <p class='text-center ' style={{fontSize:"18px"}}>At <span>TRADE-EASE</span>, our mission is to simplify and enhance the trading experience for everyone. We strive to eliminate barriers by providing a seamless, intuitive, and efficient platform that empowers traders of all levels. Through innovative technology, real-time insights, and robust security, we ensure that trading is not just accessible but also smooth and hassle-free.</p>
                    </div>
                
                    <div class='col-6 mb-5'>
                        <h4 class='text-center mb-5' style={{color:'rebeccapurple'}}>Our Vision</h4>
                        <p class='text-center ' style={{fontSize:"18px"}}>We envision a future where trading is effortless, transparent, and inclusive.<br/><span>TRADE-EASE</span> aims to revolutionize the trading landscape by bridging the gap between complexity and convenience, making financial markets more approachable for individuals and businesses alike. Our goal is to be a trusted partner in every trader's journey, providing the tools and support needed to succeed.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;
