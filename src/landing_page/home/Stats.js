import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
    return ( 
    <div class='container  p-5 border-top'>
        <div class='row'>
            <div class='col-6 mt-5 p-5'>
                <h1 class='pb-3 mb-5'>Our Key Policies</h1>

                <h5><b>Trust With Confidence</b></h5>
                <p class='text-muted'><i>We as a platform provide various risk-free investment options to invest in.</i></p>
        
                <h5><b>Customer-first always</b></h5>
                <p class='text-muted'><i>Not just best investment options but we also provide the best customer assistance required.</i></p>
                
                <h5><b>No spam or gimmicks</b></h5>
                <p class='text-muted'><i>No spam, gimmicks, "gamification", or annoying push notifications. High-Quality and User-friendly UI for the ease of our users.</i></p>

                <h5><b>The <span>TRADE-EASE</span> Universe</b></h5>
                <p class='text-muted'><i>Not just a platform, but we plan to provide a full proof process that let's our users learn and invest with ease.</i></p>
            </div>
            
            <div class='col-6 mt-5 p-5'>
                <img src='media/images/policies.svg' alt='policy-image'/>
                <div class='text-center mt-5'>
                <Link  class='mx-4' to='/future' style={{textDecoration:"none", color:"rebeccapurple"}}>
                    Future of TRADE-EASE <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                <Link to='/signup' style={{textDecoration:"none", color:"rebeccapurple"}}>Join TRADE-EASE now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                </div>
            </div>

        </div>
    </div>
     );
}

export default Stats;