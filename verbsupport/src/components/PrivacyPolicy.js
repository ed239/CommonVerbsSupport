import React from "react";
import './PrivacyPolicy.css';

const PrivacyPolicy = () =>{
    return(
        <div className="AppP">
        <div className="text">
            <h1>Privacy Policy</h1>
            <p>Effective: May 2024 <br></br>
                <br></br>Welcome to Learn Hebrew On The Go, a mobile application dedicated to helping users learn Hebrew. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we handle your information when you use our app.</p>
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We do not collect or store any usage data related to your interactions with the app.</p>
            <h3>Data Storage</h3>
            <p>Learn Hebrew On The Go uses Swift User Defaults to store data locally on your device. This data includes your customization of the learning and favorites tabs. This information is stored only on your device and is not transmitted to any third-party services.</p>
            <p>The data stored on your device will remain until you delete the app or manually clear the data from your device settings.</p>
            <h3>Purpose For Storing Data On Your Device</h3>
            <p>The data stored is solely for providing a seamless and personalized user experience for you to be able to categorize verbs and find them easily. It allows the app to remember which verbs you saved in between sessions.</p>
            <h3>Third Party Services</h3>
            <p>No third-party services that collect or process personal data are used. This means that your information is not shared with or accessible to any external entities.</p>
            <h3>User Rights</h3>
            <p>You have the right to uninstall the app at any time, which will delete all locally stored data associated with the app.</p>
            <h3>Contact Us</h3>
            <p>Please email onthegolanguages@gmail.com for any issues. </p>
            <p>Privacy Policy for Learn Hebrew On Go by Eden Dubrovsky</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;