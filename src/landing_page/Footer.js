import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (  
        <footer style={{backgroundColor: "rgb(250,250,250"}}>
            
        
        <div class='container border-top p-5'>
            <div class='row'>
                <div class='col-6 text-center'>
                    <h3><span><b>TRADE-EASE</b></span></h3>
                    <p class='text-muted text-small'>&copy; 2025, TradeEase Brokers Pvt. Ltd.™ (non-reg)</p>
                    <p class='mt-3 mb-5'> An Online platform to invest in stocks, mutual funds, and much more.</p>
                    <p>Made With &#9829; By Yash Kesariya</p>
                </div>

                <div class='col-6 text-center'>
                    <Link style={{textDecoration:"none", color:"rebeccapurple"}} to="/future" >Future <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </Link>
                    <br/><br/>
                    <Link style={{textDecoration:"none", color:"rebeccapurple"}} to="/about">About <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </Link>
                    <br/><br/>
                    <Link style={{textDecoration:"none", color:"rebeccapurple"}} to="/signup">Signup <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </Link>
                    <br/><br/>
                    <Link style={{textDecoration:"none", color:"rebeccapurple"}} to="/support">Support <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </Link>
                </div>
            </div>
        </div>

        </footer>
    );
}

export default Footer;