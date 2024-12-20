import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image'className='mb-5'/>
                <h1 className='mt-2'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='p-2 btn btn-primary' style={{width:'35%' , margin: "0 auto"   }}>Sign up</button>
            </div>

        </div>
     );
}

export default Hero;