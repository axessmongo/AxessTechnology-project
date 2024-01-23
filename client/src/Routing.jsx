import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Services from './pages/Services';
import Technologies from './pages/Technologies';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import EmailVerify from './pages/EmailVerify';
import {  Navigate } from "react-router-dom";
import Footer from './components/Footer';

function Routing() {
    const user = localStorage.getItem("token");
    return (
        
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route path='' element={<Home/>} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Navigate replace to="/login" />} />
                    <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
                    <Route path="/register" element={<Register />} />
                    <Route path='/services' element={<Services />} />
                    <Route path="/technologies" element={<Technologies />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path='/footer' element={<Footer />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing