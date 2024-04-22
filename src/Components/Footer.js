import React from 'react';

const Footer = () => {
    return (
        <section className="footer">
            <div className="box-container">
                {/* Branches */}
                <div className="box">
                    <h3>our branches</h3>
                    <a href="#"><i className="fa-solid fa-location-dot"></i> india</a>
                    <a href="#"><i className="fas fa-map-marker"></i> USA</a>
                    <a href="#"><i className="fas fa-map-marker"></i> france</a>
                    <a href="#"><i className="fas fa-map-marker"></i> africa</a>
                    <a href="#"><i className="fas fa-map-marker"></i> japan</a>
                </div>

                {/* Quick Links */}
                <div className="box">
                    <h3>quick links</h3>
                    <a href="#home"><i className="fas fa-arrow-right"></i> home</a>
                    <a href="#about"><i className="fas fa-arrow-right"></i> about</a>
                    <a href="#menu"><i className="fas fa-arrow-right"></i> menu</a>
                    <a href="#review"><i className="fas fa-arrow-right"></i> review</a>
                    <a href="#book"><i className="fas fa-arrow-right"></i> book</a>
                </div>

                {/* Contact Info */}
                <div className="box">
                    <h3>contact info</h3>
                    <a href="#"><i className="fas fa-phone"></i> +123-456-7890</a>
                    <a href="#"><i className="fas fa-phone"></i> +111-222-3333</a>
                    <a href="#"><i className="fas fa-envelope"></i> coffee@gmail.com</a>
                    <a href="#"><i className="fas fa-envelope"></i> Perú, Lima</a>
                </div>

                {/* Social Media Links */}
                <div className="box">
                    <h3>social media</h3>
                    <a href="#"><i className="fab fa-facebook-f"></i> facebook</a>
                    <a href="#"><i className="fab fa-twitter"></i> twitter</a>
                    <a href="#"><i className="fab fa-instagram"></i> instagram</a>
                    <a href="#"><i className="fab fa-linkedin"></i> linkedin</a>
                    <a href="#"><i className="fab fa-twitter"></i> twitter</a>
                </div>
            </div>
        </section>
    );
}

export default Footer;
