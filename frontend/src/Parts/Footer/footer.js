import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import instagram from '../../Assets/img/footer/instagram.png';
import facebook from "../../Assets/img/footer/facebook.png";

import '../../Assets/Style/Footer/footer.scss';


const footer = () => {
    return (
        
        <div className='footer-main'> 
            <div class="container footercontainer">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p class="col-md-4 mb-0 text-muted">© 2022 Bakeschool</p>

                    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <svg class="bi me-2" width="40" height="32"></svg>
                    </a>
                    
                    <ul class="nav col-md-4 justify-content-end">
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><img src={instagram}/></a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><img src={facebook} /></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default footer
