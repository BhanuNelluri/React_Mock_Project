import React from 'react';
import './Introduction.css';
import image1 from '../../images/developer.png'
import image2 from '../../images/bhanu.png'

export default function Introduction() {
    return (
        <div className="aboutContainer">
            <div className="aboutNav">
                <h3 className="aboutH">Introduction</h3>
            </div>
            <div className="aboutContent">
                <div className="education">
                    <div className="profile">
                        <img src={image2} alt="image" />
                    </div>
                    <div className="aboutme">
                        <div>
                        Arthimate offers a complete suite of cloud-based financial services, enabling on-demand deployment of credit and lending technology for Fintechs, Digital Platforms and SME Anchors.  </div>
                    </div>
                </div>
                <div className="skills">
                    <div className="techskills">
                        <h2>Credit Exchange</h2>
                        <div>
                            <span>Comprehensive lending product suite</span>
                        </div>
                        <div>
                            <span>Embedded loan sourcing</span>
                        </div>
                        <div>
                            <span>In-house NBFC</span>
                        </div>
                        <div>
                            <span>Co-lending with banks and NBCs</span>
                        </div>
                        <div>
                            <span>P2P lending</span> 
                        </div>
                    </div>
                    <div className="image">
                        <img src={image1} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}



