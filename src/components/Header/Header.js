import React, { useState, useEffect } from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import UserModal from '../User/UserModal';

export default function Header({ isOpen, setIsOpen }) {
    const [scrollNav, setScrollNav] = useState(false);
    const [showUserModal, setShowUserModal] = useState(false);
    const user = useSelector((state)=>state.Auth);
    

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
                    <div className="NavItem">
                        <a className="NavLinks" href='/employee'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >Employees</a>
                    </div>
                    <div className="NavItem">
                    {user.name==""?
                    <a className="NavLinks" href='/signin'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >SignIn</a>  :  
                        <a className="NavLinks" onClick={() => setShowUserModal(true)}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >{user.name}</a>  }
                     {showUserModal && <UserModal setShowUserModal={setShowUserModal} />}
                    </div>
                   

                </div>
            </div>
        </div >
    )
}


