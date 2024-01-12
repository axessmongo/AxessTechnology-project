import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './About';

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<About />}>
                        <Route index element = {Home}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing