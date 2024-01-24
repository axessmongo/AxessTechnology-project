import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Services from './pages/Services';
import Technologies from './pages/Technologies';
import Homenew from './pages/Homenew';
import Card from './components/Card';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import EmailVerify from './pages/EmailVerify';
import {  Navigate } from "react-router-dom";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Categories from './components/Categories';
import CategoriesIn  from './components/CategoriesIn'
import Demo from './components/Demo';

function Routing() {
    const user = localStorage.getItem("token");
    return (
        
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Navbar />}> */}
                    <Route path="/" element={<Categories />}/>              
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
                    {/* <Route path="/users/:id/verify/:token" element={<EmailVerify />} /> */}
                    <Route path="/register" element={<Register />} />
                    <Route path='/services' element={<Services />} />
                    <Route path="/technologies" element={<Technologies />} />
<<<<<<< HEAD
                    <Route path="pricing" element={<Pricing />} />
                    <Route path='/contact' element={<Contact />} />
=======
                    <Route path="/Pricing" element={<Pricing />} />
                    <Route path='/footer' element={<Footer />} />
                    <Route path='/categoriesin' element={<CategoriesIn />} />
                    <Route path="demo" element={<Demo />} />


>>>>>>> 3d9d35ade4ed1b8ee9a0a86f8b1cb9e9f02c98d2
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing