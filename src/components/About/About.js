import React from 'react';
import './About.css';
import BikeLogo from '../../logo/bikelogo';



export default function About() {

    return (
        <div className="contactContainer">
            <div className="contactNav">
                <h3 className="contactH">About Us</h3>
            </div>
            <div className="contactContent">
                <div className="bikeLogo">
                    <BikeLogo width="100%" height="100%" />
                </div>
                <div className="form">
                Arthmate is India's premier embedded fintech platform leveraging technology to provide on-demand seamless deployment of credit across fintechs, digital platforms and SME anchors. With our at-scale credit exchange platform, we strive to transform digital lending through proprietary tech and advanced analytics solutions.
                </div>
            </div>
        </div>
    )
}
