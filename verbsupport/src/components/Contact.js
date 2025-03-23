import React from "react";
import './Contact.css';
import logo from '../AppLogo.png';
import logoRu from '../RussianLogo.png';

const Contact = () => {
    return(
        <div className='AppC'>
        <div className='column'>
            <div className='textC'>
                <h1>Contact Information</h1>
                <div className="logo-container">
                        <img src={logo} className='App-logoC' alt='Logo' />
                        <img src={logoRu} className='App-logoC' alt='Logo' />
                </div>
                <h2>For any issues or inquiries please email: <br></br><br></br> <a href="mailto:onthegolanguages@gmail.com" style={{ color: 'white' }}>onthegolanguages@gmail.com</a></h2>
            
            </div> 
            
        </div>
        </div>
    );
};

export default Contact;