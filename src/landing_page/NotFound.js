import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div class='container p-5 mt-5 mb-5'>
            <div class='row text-center'>
                <h2 class='mb-3'><span><b>404</b></span>, Page Not Found!</h2>
                <br/>
                <p class='mt-3'>Sorry, The Page You Are Looking For Does Not Exist.</p>
                <Link style={{color:'rebeccapurple',width:'20%',margin:"0 auto"}}to='/'>Go Home</Link>
            </div>
        </div>
     );
}

export default NotFound;