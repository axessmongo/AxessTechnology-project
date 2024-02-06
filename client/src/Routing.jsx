import React, { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Services from './pages/Services';
import About from './About';
import Technologies from './components/Technologies';
import Card from './components/Card';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import EmailVerify from './pages/EmailVerify';
import { Navigate } from "react-router-dom";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Categories from './components/Categories';
import CategoriesIn from './components/CategoriesIn'
import Demo from './components/Demo';
import Development from './pages/Development';
import SoftwareDev from './components/SoftwareDev';
import ScrollTop from './components/ScrollTop';
import Loader from './components/Loader';
import Testing from './pages/Testing';
// import Ai from './pages/Ai';
import Webdev from './pages/Webdev';
import PasswordReset from './pages/PasswordReset';
import ForgotPassword from './pages/Forgotpassword';
import DigitalMarketing from './pages/DigitalMarketing' ;  
import Policy from './pages/Policy';

function Routing() {
    const user = localStorage.getItem("token");
    return (
// hgjh
        <div>
            <BrowserRouter>
                {/* <Loader /> */}
                <ScrollTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {user && <Route path="/" element={<Home />} />}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Navigate replace to="/login" />} />
                    <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
                    <Route path='/forgotpassword' element={<ForgotPassword />} />
                    <Route path="/PasswordReset/:id/:token" element={<PasswordReset />} />
                    <Route path='/software' element={<SoftwareDev />} />
                    <Route path="/register" element={<Register />} />
                    <Route path='/services' element={<Services />} /> 
                    <Route path='/about' element={<About />} />
                    <Route path="/technologies" element={<Technologies />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/ourworks' element={<CategoriesIn />} />
                    <Route path='/development' element={<Development />} />
                    <Route path='/testing' element={<Testing />} />
                    {/* <Route path='/ai' element={<Ai />} /> */}
                    <Route path='/webdevelopment' element={<Webdev />} />
                    <Route path='/digitalmarketing' element ={<DigitalMarketing/>}/>
                    <Route path='/privacypolicy' element ={<Policy/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing