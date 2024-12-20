import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='container'>

            <nav 
                class="navbar navbar-expand-lg bg-white border-bottom" 
                style={{backgroundColor:'#FFF'}}
            >
                <div class="container">
                    <Link class="navbar-brand" to="/"><img src='media/images/logo.svg' style={{width:'25%'}}/>
                    </Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/signup">signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="product">Product</Link>
                            </li>
                            
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/Support">Support</Link>
                            </li>
                            
                            
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;