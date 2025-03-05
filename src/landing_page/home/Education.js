import React from 'react';

function Education() {
    return (  
    <div class='container border-bottom border-top'>
        <div class='row'>
            <div class='col-6'>
            <h1 class='mb-5 pb-2 pt-5'>Join <span><b>TRADE-EASE</b></span> Community</h1>
            <p>We aim to make <span><b>TRADE-EASE</b></span> the biggest and most active community in INDIA.<br/><br/>We also plan to launch a user-friendly application <span><b>INVEST-EASE</b></span> so that our users can learn about investments and finance alltogether from scratch, it is a work in progress.<br/><br/><br/>To Join <span><b>TRADE-EASE</b></span> Community, Click Below</p>
            <br/>
            <div>
                <a style={{textDecoration:"none", color:"rebeccapurple"}} href='/signup'>Signup Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            </div>

            <div class='col-6 d-flex justify-content-end'>
            <img src='/media/images/education.png' alt='pricing'/>
            </div>
        </div>
    </div>

   );
}

export default Education;