import React from 'react';

function Education() {
    return ( 
        <div className='container m-5 p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img style={{height:'70%'}} src='media/images/education.svg' className='mt-5 text-center'/>
                </div>
                <div className='col-6 mt-2'>
                        <h2 className='mb-4'>Free and open market education</h2>
                        <p className='mb-5'> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href='' className=' mt-5'>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                        
                        <p className='mt-5 mb-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href='' className='mb-5 mt-5'>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>

            </div>
            
        </div>
     );
}

export default Education;