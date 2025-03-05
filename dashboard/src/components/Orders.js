import React from 'react';

import {Link} from "react-router-dom";

function Orders() {
    return ( 
        <div class='orders'>
            <div class='no-orders'>
                <p>You haven't placed any orders today</p>

                <Link to={"/"} class='btn'> Get Started</Link>
            </div>
        </div>
    );
}

export default Orders;