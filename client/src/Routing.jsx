import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Login from './pages/Login';
import Login2 from './pages/Login2';
import Services from './pages/Services';
import Technologies from './pages/Technologies';
import Homenew from './pages/Homenew';

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route path='' element={<Home/>} />
                    </Route>
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path="/login" element={<Login2 />} />
                    <Route path='/services' element={<Services />} />
                    <Route path="/technologies" element={<Technologies/>}/>
                    <Route path="/home" element={<Homenew/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing