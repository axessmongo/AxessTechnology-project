import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/Login.scss';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);

      if (response.status === 200) {
        toast.success('Logged in successfully');
      } else if (response.status === 401) {
        toast.error('Invalid Email or Password');
      } else if (response.status === 400) {
        toast.info('An email has been sent to your account. Please verify.');
      } else {
        console.log('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      toast.error('Unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='login bg-axess-gold-3'>
        <div className='login_container'>
          <div className='login_form_container'>
            <div className='left'>
              <form className='form_container' onSubmit={handleSubmit}>
                <h1>Login to Your Account</h1>
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  onChange={handleChange}
                  value={formData.email}
                  required
                  className='input'
                />
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={handleChange}
                  value={formData.password}
                  required
                  className='input'
                />
                <button type='submit' className='green_btn' disabled={loading}>
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
                <ToastContainer />
              </form>
            </div>
            <div className='right'>
              <h1>New Here ?</h1>
              <Link to='/register'>
                <button type='button' className='green_btn'>
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
