import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-logo">
                    <div>logo img</div>
                    <div>logo name</div>
                    <div>
                        what is this shop all about
                    </div>
                </div>
                <div className="footer-browse">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                </div>
                <div className="footer-contact">
                    <p>icon Address</p>
                    <p>icon Email</p>
                    <p>fbIcon TwitterIcon</p>
                </div>
            </div>

            <h1 className='copyright'>&copy; All rights reserves in 2024</h1>
        </div>
    )
}

export default Footer
