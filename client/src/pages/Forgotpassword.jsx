import React, { useState } from 'react';
import axios from 'axios';
import "../assets/css/forgotpasswd.scss";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'http://54.161.23.121:5000/api/resetPassword';
            const response = await axios.post(url, { email });
            setMsg(response.data.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                // Handle specific error scenarios if needed
            }
        }
    };

    return (
        <div className='forgetpassword'>
            <div className='container'>
                <form className='form_container' onSubmit={handleSubmit}>
                    <p className="fs-6 fw-semibold">Kindly enter your E-mail ID</p>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        className='input'
                    />
                    <button type="submit" className='green_btn'>
                        Submit
                    </button>
                </form>
                {msg && <p className='mt-5 pt-4 display-6 text-success fs-6'>{'E-mail is verfied'}</p>}
            </div>
        </div>
    );
}

export default ForgotPassword;
