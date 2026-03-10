import React from 'react';

function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                {/* <img src='media/images/HomeHero.png' alt='Hero Image' className='mb-5' /> */}
                <h1 className='mt-5'>404 Not Found</h1>
                <p className='mb-5 fs-4'>Sorry, the page you are looking for doess not exist.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "20%",margin: "0 auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default NotFound;