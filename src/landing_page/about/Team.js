import React from 'react';
//import { Link } from 'react-router-dom';

function Team() {
    return ( 
        <div class='conatiner mt-5'>
            <div class='row mb-5'>
                <h4 class='text-center mb-4' style={{color:'rebeccapurple'}}>Our Team</h4>
            </div>
            
            <div class='row mb-5 pl-3'>
                    <div class='col-6 pb-5 d-flex justify-content-center'>
                        <img src='media/images/yash.jpg' alt='yash' style={{width:'40%', borderRadius:'100%', border:'2px solid rebeccapurple'}}/>
                        <h5 class='text-muted p-5 mt-5'><a style={{textDecoration:"none"}} href='https://www.linkedin.com/in/yashkesariya'>Yash Kesariya </a>(Leader)</h5>
                    </div>
                    <div class='col-6 pb-5 d-flex justify-content-start'>
                        <img src='' alt='hardik' style={{width:'40%', borderRadius:'100%', border:'2px solid rebeccapurple'}}/>
                        <h5 class='text-muted p-5 mt-5'><a style={{textDecoration:"none"}} href=''>Hardik Mittal </a>(Member)</h5>
                    </div>
            </div>

            <div class='row mb-5'>
                    <div class='col-6 pb-5 d-flex justify-content-center'>
                        <img src='media/images/durgesh.jpg' alt='durgesh' style={{width:'40%', borderRadius:'100%', border:'2px solid rebeccapurple'}}/>
                        <h5 class='text-muted p-5 mt-5'><a style={{textDecoration:"none"}} href='https://www.linkedin.com/in/durgeshnikam1299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>Durgesh Nikam </a>(Member)</h5>
                    </div>
                    <div class='col-6  pb-5 d-flex justify-content-start'>
                        <img src='' alt='divyanshu' style={{width:'40%', borderRadius:'100%', border:'2px solid rebeccapurple'}}/>
                        <h5 class='text-muted p-5 mt-5'><a style={{textDecoration:"none"}} href=''>Divyanshu Sharma </a>(Member)</h5>
                    </div>
            </div>

            {/* <h2 class='text-center' style={{color:'rebeccapurple'}}> <b>Work In Progress!</b></h2> */}
        </div>
     );
}

export default Team;