import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5  pt-5'>
            <div className='row'>
                <div className='col-5'>
                    <h1 className='mt-5 mb-5'>Trust with confidence</h1>
                    <h3 className='mb-2'>Customer-first always</h3>
                    <p className='mb-5 text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h3 className='mb-2'>No spam or gimmicks</h3>
                    <p className='mb-5 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h3 className='mb-2'>The Zerodha universe</h3>
                    <p className='mb-5 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 className='mb-2'>Do better with money</h3>
                    <p className=' text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-7 mt-2 text-center'>
                        <img style={{height:'50%'}} src='media/images/ecosystem.png'/>
                    
                    
                    <div className='row' style={{ margin: "0 auto"}} >
                        <div className='col-6'>
                        <a href=''>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                             
                        </div>
                        <div className='col-6'>
                            <a href=''>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;