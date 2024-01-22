import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Services from './pages/Services';
import Technologies from './pages/Technologies';

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={Home} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path='/services' element={<Services />} />
                    <Route path="/technologies" element={<Technologies/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing