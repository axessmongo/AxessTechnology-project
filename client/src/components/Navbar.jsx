import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import logo from '../assets/images/logo/logo.png'

function Navbar() {
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center upper-nav border-bottom container-fluid'>
                    <div>
                        <button className='btn btn-success'>Employee Login</button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <p>Axess</p>
                        <img src= {logo} alt="" />
                        <p>Tech</p>
                    </div>
                    <div>
                        <button className='btn btn-success'>Corporate Login</button>
                    </div>
                </div>
            <div className="container-fluid my-3">
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
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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
                                    <Link className="nav-link" >
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" >
                                        Contact
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="btn btn-outline-success" >
                                        Login
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <Home />
        </div>
    )
}

export default Navbar