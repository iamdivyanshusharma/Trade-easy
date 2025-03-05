import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    return ( 
        <div class='conatiner border-top'>       
            <div class='row'>
                <div class='col-6 pb-5'>
                    <img src='/media/images/pricing.svg' alt='pricing'/>
                </div>

                <div class='col-6 mt-5 p-5'>
                    <h1 class='mb-5'>Pricing Plans</h1>
                    <p class='mt-5'> We plan to step forward with the ambition to promote the concept of discounted broking and price transparency in India.<br/><br/> <span class='text-muted'>No Hidden Charges. No Scam.</span></p>
                    <br/>
                    <Link to='/pricing' style={{textDecoration:"none", color:"rebeccapurple"}}>Checkout Pricings <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </Link>
                </div>
            </div>
        </div>
     );
}

export default Pricing;