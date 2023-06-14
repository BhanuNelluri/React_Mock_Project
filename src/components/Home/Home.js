import React, { useState } from 'react';
import './Home.css'
import Video from '../../video/video.mp4';

export default function Home() {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <div className="HeroContainer">
            <div className="HeroBg">
                <video className="VideoBg" autoPlay loop muted src={Video} type="video/mp4" />
            </div>
            <div className="HeroContent">
                <div className="HeroH1">
                    Welcome to Arthmate
                </div>
                <div className="HeroP">
                    Embedded <span>Finance</span> as a service
                </div>
            </div>
        </div>
    )
}
