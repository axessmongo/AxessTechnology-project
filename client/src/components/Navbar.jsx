import React, { useState, useEffect } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import logo from '../assets/images/logo/logo.png'
import About from './About'
import '../assets/css/hamburgers/hamburgers.scss'

function Navbar() {

    const [fixed, setFixed] = useState(false);
    const [nav, setNav] = useState(false);

    document.addEventListener('click', function (event) {
        var navbar = document.getElementById('navbarSupportedContent');
        var isClickInsideNavbar = navbar.contains(event.target);
      
        if (!isClickInsideNavbar) {
          // Clicked outside the navbar, close it
          navbar.classList.remove('show'); // Assuming 'show' is the class that makes the navbar visible
        //   setNav(false);
        }
      });

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 100 && window.scrollY < 800) {
                setFixed('fixed-1');
            } else if (window.scrollY > 800) {
                setFixed('fixed-2');
            } else {
                setFixed(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <div className='d-flex py-3 py-lg-0 justify-content-between bg-white justify-content-lg-around align-items-center upper-nav border-bottom container-fluid flex-wrap' data-aos='fade-down' data-aos-duration='500'>
                <div className='d-flex share order-2 order-lg-1 '>
                    <Link><i className="bi bi-instagram"></i></Link>
                    <Link><i className="bi bi-whatsapp"></i></Link>
                    <Link><i className="bi bi-twitter-x"></i></Link>
                </div>
                <NavLink to='/' className='d-none d-lg-flex justify-content-center col-12 col-lg-4 order-1 order-lg-2'>
                    <p>Axess</p>
                    <img src={logo} alt="" />
                    <p>Technology</p>
                </NavLink>
                <div className=' order-3 order-lg-3'>
                    <NavLink to={'/login'} className='gold-btn px-4'>
                        <span className='d-block'>Login</span>
                    </NavLink>
                </div>
            </div>
            <div>
                <nav className={`navbar navbar-expand-lg bg-body-tertiary p-0 position-relative z-3 ${fixed == 'fixed-1' ? 'fixed-1' : ''} ${fixed == 'fixed-2' ? 'fixed-1 fixed-2' : ''}`}>
                    <div className="container-fluid">
                        <div className="d-lg-none d-flex justify-content-between w-100 py-2 align-items-end">
                            <Link to='/' className="navbar-brand col-1">
                                <img src={logo} alt="" />
                            </Link>
                            <button
                                className={`navbar-toggler shadow-none border-0 hamburger hamburger--spring-r ${nav && 'is-active'}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation" onClick={() => setNav(!nav)}>
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav align-items-center mx-auto mb-2 mb-lg-0  overflow-hidden" data-aos='fade-up'>
                                <li className="nav-item">
                                    <NavLink to={'/'} activeclassname="active" className="nav-link" aria-current="page" >
                                        Home
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to={'/services'} activeclassname="active" className="nav-link" >
                                        Services
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/ourworks"} activeclassname="active" className="nav-link" >
                                        Our works
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/about"} activeclassname="active" className="nav-link" >
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/contact"} activeclassname="active" className="nav-link" >
                                        Contact
                                    </NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink to={"/collaborate"} activeclassname="active" className="nav-link" >
                                        Collaborate with us
                                    </NavLink>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar