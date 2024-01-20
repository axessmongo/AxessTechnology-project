import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Login2.scss';

function Login2() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',

    });

    const [errors, setErrors] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        // Validate email
        if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        } else {
            newErrors.email = '';
        }

        // Other validations for name, password, etc. can be added here

        setErrors(newErrors);
        return isValid;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Process signup logic here
            console.log('Form data:', formData);
        }
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Process signin logic here
            console.log('Form data:', formData);
        }
    };

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        const handleSignUpClick = () => {
            container.classList.add('right-panel-active');
        };

        const handleSignInClick = () => {
            container.classList.remove('right-panel-active');
        };

        signUpButton.addEventListener('click', handleSignUpClick);
        signInButton.addEventListener('click', handleSignInClick);

        // Cleanup event listeners when the component is unmounted
        return () => {
            signUpButton.removeEventListener('click', handleSignUpClick);
            signInButton.removeEventListener('click', handleSignInClick);
        };
    }, []);

    return (
        <div className='Login'>
            <div className="container-fluid" id="container">
                <div className="form-container  sign-up-container">
                    <form className='bg-axess-gold-3' onSubmit={handleSignUp}>
                        <h1>Create Account</h1>
                        <div className="d-flex share">
                            <Link><i className="bi bi-google"></i></Link>
                            <Link><i className="bi bi-facebook"></i></Link>
                            <Link><i className="bi bi-twitter-x"></i></Link>
                        </div>
                        <span className='span-regi'>or use your email for registration</span>
                        <input
                            type="text"
                            placeholder="Fname"
                            name="FirstName"
                            value={formData.fname}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            placeholder="Lname"
                            name="LastName"
                            value={formData.lname}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            placeholder="PhoneNumber"
                            name="Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        <span className="error">{errors.email}</span>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            placeholder="Re-Type Password"
                            name="password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        <button className='clicks ghosts' type="submit">Sign Up</button>
                    </form>
                </div>

                <div className="form-container bg-axess-gold-3 sign-in-container">
                    <form onSubmit={handleSignIn}>
                        <h1>Sign in</h1>
                        <div className="d-flex share">
                            <Link><i className="bi bi-google"></i></Link>
                            <Link><i className="bi bi-facebook"></i></Link>
                            <Link><i className="bi bi-twitter-x"></i></Link>
                        </div>
                        <span className='span-regi'>or use your account</span>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <span className="error">{errors.email}</span>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <a href="#">Forgot your password?</a>
                        <button className='clicks' type="submit">Sign In</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay bg-green-1">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className='clicks ghosts' id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start the journey with us</p>
                            <button className='clicks ghosts' id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login2;
