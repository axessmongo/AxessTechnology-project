import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login2.scss';

function Login2() {
    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        // Add more error fields if needed
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleInputChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
        setErrors({ ...errors, [input.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/api/users";
            const response = await axios.post(url, data);
            navigate("/login");
            console.log(response.data.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    const Handle = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/api/login";  // Adjust the URL for sign-in
            const response = await axios.post(url, data);
            // Handle successful sign-in, e.g., set user authentication
        } catch (error) {
            // Handle sign-in error
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setErrors({ ...errors, email: "Invalid email or password" });
            }
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

        return () => {
            signUpButton.removeEventListener('click', handleSignUpClick);
            signInButton.removeEventListener('click', handleSignInClick);
        };
    }, []);

    // The rest of your component code...

    return (
        <div className='Login'>
            <div className="container-fluid" id="container">
                <div className="form-container  sign-up-container">
                    <form className='bg-axess-gold-3' onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <div className="d-flex share">
                            <Link to="/google"><i className="bi bi-google"></i></Link>
                            <Link to="/facebook"><i className="bi bi-facebook"></i></Link>
                           
                        </div>
                        <span className='span-regi'>or use your email for registration</span>
                        <input
                            type="text"
                            placeholder="First name"
                            name="fname"
                           
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            name="lname"
                            
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                           
                        />
                        <input
                            type="number"
                            placeholder="Phone No"
                            name="phone"
                            
                        />
                        <span className="error">{errors.email}</span>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                           
                        />
                        <input
                            type="password"
                            placeholder="Re-Type Password"
                            name="confirmPassword"
                           
                        />
                        <button className='clicks ghosts' type="submit">Sign Up</button>
                    </form>
                </div>

                <div className="form-container bg-axess-gold-3 sign-in-container">
                    <form onSubmit={Handlesubmit1}>
                        <h1>Sign in</h1>
                        <div className="d-flex share">
                            <Link to="/google"><i className="bi bi-google"></i></Link>
                            <Link to="/facebook"><i className="bi bi-facebook"></i></Link>
                            
                        </div>
                        <span className='span-regi'>or use your account</span>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            
                        />
                        
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                           
                        />
                        <button className='clicks mt-2' type='button' >
                            Forget Password?
                        </button>
                        <button className='clicks mt-3' type="submit">Sign In</button>
                    </form>
                </div>

              
                <div className="overlay-container">
                    <div className="overlay bg-green-1">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className='clicks ghosts' type="button" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start the journey with us</p>
                            <button className='clicks ghosts' type="button" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login2;
