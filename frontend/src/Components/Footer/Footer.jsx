import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">

                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    <div className="col-md-6 item text">
                        <h3>Dream</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque necessitatibus libero reiciendis amet sequi ipsa illo animi ducimus excepturi voluptatum laudantium, adipisci odio soluta voluptas at tempora totam omnis officiis veniam voluptatem ad beatae et?</p>
                    </div>

                    <div className="col item social">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <p className="copyright">Dream © 2021</p>
            </div>
        </footer>
    </div>
    )
}

export default Footer
