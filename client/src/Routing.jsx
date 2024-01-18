import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login'
import About from './About';
import Sample from './pages/Sample';

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<About />}>
                        <Route index element={Home} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/sample" element={<Sample />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing