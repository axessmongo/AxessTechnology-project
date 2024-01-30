import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Services from './pages/Services';
import About from './About';
import Technologies from './pages/Technologies';
import Homenew from './pages/Homenew';
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
import ScrollTop from './assets/images/ScrollTop';
import Loader from './components/Loader';
import Testing from './pages/Testing';
import Ai from './pages/Ai';
import Forgotpassword from './pages/Forgotpassword';
import PasswordReset from './pages/PasswordReset';
import Webdev from './pages/Webdev'

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
                    <Route path='/forgotpassword' element={<Forgotpassword />} />
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
                    <Route path='/ai' element={<Ai />} />
                    <Route path='/webdevelopment' element={<Webdev/>} />



                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing