import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-5'>
            <div className='row '>
                <div className='col-5'>
                    <h2 className='mb-5'><b>Unbeatable pricing
                    </b></h2>
                    
                    <p className='mb-5 '>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=''>See Pricing <i class="fa-solid fa-arrow-right"></i></a>

                </div>
                <div className='col-2'></div>
                <div className='col-5 text-center'>
                    
                    <div className='row border' style={{ margin: "0 auto" ,margin:"20px"}} >
                        <div className='col-6 border p-3'>
                        <h3 className='m-2'>₹0</h3>
                        <p>Free equity delivery
                        and direct mutual funds</p>
                             
                        </div>
                        <div className='col-6 p-3'>
                        <h3 className='m-2'>₹20</h3>
                        <p>Intraday and
                        F&O</p>
                            
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
     );
}

export default Pricing;