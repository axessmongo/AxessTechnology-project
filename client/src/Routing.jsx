import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Services from './pages/Services';
import Technologies from './pages/Technologies';
import Homenew from './pages/Homenew';
import Card from './components/Card';

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Navbar />}> */}
                    <Route path="/" element={<Card />}>
                        <Route path='' element={<Home/>} />
                    </Route>
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path='/services' element={<Services />} />
                    <Route path="/technologies" element={<Technologies/>}/>
                    <Route path="/home" element={<Homenew/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing