import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Services from './pages/Services';

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={Home} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path='/services' element={<Services />} >
                        <Route index element={<Services />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing