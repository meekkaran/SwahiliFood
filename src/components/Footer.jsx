import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <section className="subscribe">
                <p className="subscribeheader">
                    Join the swahili food community and get amazing offers and discounts
                </p>
                <p className="subscribetext">
                    You can unsubscribe at any time.
                </p>
                <div className="input">
                    <form>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Your email"
                        className="footer-input" />
                      <button>Subscribe</button>
                    </form>   
                </div>
            </section>
            <div className="links">
                <div className="linkwrap">
                    <div className="link items">
                        <h2>About us</h2>
                        <p>How it works</p>
                        <p>Testimonials</p>
                        <p>Careers</p>
                        <p>Investors</p>
                        <p>Terms of service</p>
                    </div>
                    <div className="link items">
                        <h2>About us</h2>
                        <p>How it works</p>
                        <p>Testimonials</p>
                        <p>Careers</p>
                        <p>Investors</p>
                        <p>Terms of service</p>
                    </div>
                </div>
                <div className="linkwrap">
                    <div className="link items">
                        <h2>Videos</h2>
                        <p>How it works</p>
                        <p>Testimonials</p>
                        <p>Careers</p>
                        <p>Investors</p>
                        <p>Terms of service</p>
                    </div>
                    <div className="link items">
                        <h2>Social media</h2>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Youtube</p>
                        <p>Twitter</p>
                    </div>
                </div>
            </div>
            <section className="socialmedia">
                <div className="icons">
                <i className="fab fa-facebook-instagram"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
                </div>
            </section>
        </div>
    )
}

export default Footer
