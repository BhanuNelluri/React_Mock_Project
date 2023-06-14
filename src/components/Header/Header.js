import React, { useState, useEffect } from 'react'
import './Header.css';

export default function Header({ isOpen, setIsOpen }) {
    const [scrollNav, setScrollNav] = useState(false);



    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }


    const toggle = () => {

        setIsOpen(!isOpen);
        setScrollNav(!scrollNav);
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])


    return (
        <div className="Nav"  >
            <div className="NavbarContainer">
                <a href='/' className="NavLogo"
                    onClick={() => setIsOpen(false)}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                >
                <img src="https://bharatpe.com/desktop-path/img-webview/mamta.png" alt="Logo" width="150" height="70" class="d-inline-block align-text-top"/>
                </a>
                <a onClick={toggle} className="MobileIcon">
                    <div className="Line1"></div>
                    <div className="Line1"></div>
                    <div className="Line1"></div>
                </a>
                <div className="NavMenu">
                    <div className="NavItem">
                        <a className="NavLinks" href='/introduction'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            activeClass="active"
                        >Introduction</a>
                    </div>
                    <div className="NavItem">
                        <a className="NavLinks" href='/teams'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >Teams</a>
                    </div>
                    <div className="NavItem">
                        <a className="NavLinks" href='/about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >About</a>
                    </div>

                </div>
            </div>
        </div >
    )
}


