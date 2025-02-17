import React from 'react';
import './ContactInfo.css'; // Assuming you have a separate CSS file for styling

const ContactInfo = () => {
    return (
        <>
            <div className="contact-style-one-info">
                <h2>Contact Information</h2>
                <p>
                    Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.
                </p>
                <ul id='contact-info'>
                    <li className="contact-item">
                        <div className="icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="content">
                            <h5 className="title">Hotline</h5>
                            <a href="tel:+4733378901">+4733378901</a>
                        </div>
                    </li>
                    <li className="contact-item" data-wow-delay="300ms">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="content">
                            <h5 className="title">Our Location</h5>
                            <p>
                                55 Main Street, The Grand Avenue 2nd Block, <br /> New York City
                            </p>
                        </div>
                    </li>
                    <li className="contact-item" data-wow-delay="500ms">
                        <div className="icon">
                            <i className="fas fa-envelope-open-text"></i>
                        </div>
                        <div className="content">
                            <h5 className="title">Official Email</h5>
                            <a href="mailto:info@agrul.com">info@agrul.com</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;
