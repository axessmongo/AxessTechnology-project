import React, { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Services from './pages/Services';
import About from './About';
import Technologies from './components/Technologies';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import EmailVerify from './pages/EmailVerify';
import { Navigate } from "react-router-dom";
import Contact from './components/Contact';
import Ourworks from './components/Ourworks'
import Development from './pages/Development';
import SoftwareDev from './components/SoftwareDev';
import ScrollTop from './components/ScrollTop';
import Loader from './components/Loader';
import Testing from './pages/Testing';
import Webdev from './pages/Webdev';
import PasswordReset from './pages/PasswordReset';
import ForgotPassword from './pages/Forgotpassword';
import DigitalMarketing from './pages/DigitalMarketing';
import Policy from './pages/Policy';
import Popup from './pages/Popup';
import Admindashboard from './Dashboard/Admindashboard';
import Adminproject from "./Dashboard/Adminproject"
import Clientdashboard from './Dashboard/Clientdashboard';
import Empproject from "./Dashboard/Empproject"
import ClientProject from './Dashboard/ClientProject'
import Empdashboard from './Dashboard/Empdashboard'
import Empreg from './Dashboard/Empreg';
import Digitalcontact from './components/Digitalcontact';
import Digitalcontact1 from './components/Digitalcontact1';
import Ourworknew from './components/Ourworknew';




function Routing() {
    const user = localStorage.getItem("token");
    return (
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
                    <Route path="/PasswordReset/:id/:token" element={<PasswordReset/>} />
                    <Route path='/software' element={<SoftwareDev />} />
                    <Route path="/register" element={<Register />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/about' element={<About />} />
                    <Route path="/technologies" element={<Technologies />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path='/contact' element={<Contact />} />
                    {/* <Route path='/ourworks' element={<Ourworks />} /> */}
                    <Route path='/ourworks' element={<Ourworknew />} />
                    {/* <Route path='/ourworks2' element={<Ourworknew />} /> */}
                    <Route path='/development' element={<Development />} />
                    <Route path='/testing' element={<Testing />} />
                    <Route path='/webdevelopment' element={<Webdev />} />
                    <Route path='/digitalmarketing' element={<DigitalMarketing />} />
                    <Route path='/privacypolicy' element={<Policy />} />
                    <Route path='/popup' element={<Popup />} />
                    <Route path='/admindashboard' element={<Admindashboard />} />
                    <Route path='/adminproject' element={<Adminproject />} />
                    <Route path='/clientdashboard' element={<Clientdashboard />} />
                    <Route path='/empdashboard' element={<Empdashboard />} />
                    <Route path='/clientproject' element={<ClientProject />} />
                    <Route path='/empproject' element={<Empproject />} />
                    <Route path='/empreg' element={<Empreg />} />
                    <Route path='/digitalcontact' element={<Digitalcontact/>}/>
                    <Route path='/Digitalcontact1' element={<Digitalcontact1/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing