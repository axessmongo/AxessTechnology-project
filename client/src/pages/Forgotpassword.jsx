import React, { useState } from 'react';
import axios from 'axios';
import "../assets/css/forgotpasswd.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url = 'https://axesstechnology.in/api/resetPassword';
          const response = await axios.post(url, { email });

          if (response.status === 200 && response.data.data.success) {
            toast.success('Password reset email sent successfully.');
          } else {
            toast.error('Failed to send password reset email. Please try again.');
          }
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
          }
          toast.error('Internal Server Error. Please try again later.');
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
                    <ToastContainer/>
                </form>
               
            </div>
        </div>
    );
}

export default ForgotPassword;
