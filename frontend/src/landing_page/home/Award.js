import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row '>
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p style={{marginTop:"20px"}}>2+ million Zerodha clients contibute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row mt-2'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6 '>
                            <ul>
                                <li>Stocks and IPO</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Gold</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png'/>
                </div>

            </div>
            
        </div>
     );
}

export default Awards;