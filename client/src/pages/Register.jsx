import React from 'react'
import axios from 'axios'
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/register.scss";
// import "../assets/css/index.scss";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {

	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {
			const response = await axios.post(
			  '/api/register',
			  formData
			);  
			console.log("res",response)
			if (response.status === 201) {
				console.log("reg",response)
			  toast.success('Registration successful. Verification email sent.');
			}else if (response.status === 409){
				console.log("LLLLL")
			  toast.error('User already exists.');
			} else {
			  console.log('Unexpected response:', response.status);
			  
			}
		  }catch(error) {
			console.log("err",error)
			console.error('Error during registration:', error);
			toast.error('Internal Server Error');
		  }
	  };

	return (
		<div>
			<Navbar />
			<div className='reg'>
				<div className='signup_container'>
					<div className='signup_form_container  row justify-content-center'>
						<div className='left col-md-6'>
							<div>
								<h1 className='text-center'>Welcome Back</h1>
								<Link to="/login">
									<button type="button" className='green_btn'>
										Sign in
									</button>
								</Link>
							</div>
						</div>
						<div className='col-md-6 right'>
							<form className='form_container' onSubmit={handleSubmit}>
								<h1>Create Account</h1>
								<input
									type="text"
									placeholder="First Name"
									name="fname"
									onChange={handleChange}
									value={formData.fname}
									required
									className='input'
								/>
								<input
									type="text"
									placeholder="Last Name"
									name="lname"
									onChange={handleChange}
									value={formData.lname}
									required
									className='input'
								/>
								<input
									type="email"
									placeholder="Email"
									name="email"
									onChange={handleChange}
									value={formData.email}
									required
									className='input'
								/>
								<input
									type="number"
									placeholder="Phone-Number"
									name="phone"
									onChange={handleChange}
									value={formData.phone}
									required
									className='input'
								/>
								<input
									type="password"
									placeholder="Password"
									name="password"
									onChange={handleChange}
									value={formData.password}
									required
									className='input'
								/>
								<button type="submit" className='green_btn'>
									Register
								</button>
								<ToastContainer />
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Register