import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import logo from '../assets/images/logo/logo.png'
import About from './About'

function Navbar() {
    return (
        <div>
            <div className='d-flex justify-content-around align-items-center upper-nav border-bottom container-fluid'>
                <div className='d-flex share'>
                    <Link><i className = "bi bi-instagram"></i></Link>
                    <Link><i className = "bi bi-whatsapp"></i></Link>
                    <Link><i className = "bi bi-twitter-x"></i></Link>
                </div>
                <Link to='/' className='d-flex justify-content-center'>
                    <p>Axess</p>
                    <img src={logo} alt="" />
                    <p>Tech</p>
                </Link>
                <div>
                    <Link to={'/login'} className='gold-btn px-4'>
                        <span className='d-block'>Login</span>
                    </Link>
                </div>
            </div>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
                    <div className="container-fluid">
                        {/* <Link to='/' className="navbar-brand">
                            Navbar
                        </Link> */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0  overflow-hidden">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link active" aria-current="page" >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" >
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'services'} className="nav-link" >
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to= {"technologies"} className="nav-link" >
                                        Technology
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" >
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" >
                                        Collaborate with us
                                    </Link>
                                </li>                              
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <Home />
            <About/>
        </div>
    )
}

export default Navbar