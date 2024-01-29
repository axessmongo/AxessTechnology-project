import React from 'react'
import axios from 'axios'
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/css/reg.scss";
import "../assets/css/index.scss";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


function Register() {

	const [data, setData] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
		password: "",
	}); 
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		
		setData({ ...data, [input.name]: input.value });
	}; 

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/register";
			// console.log(data,res)
			const { data: res } = await axios.post(url, data);
			console.log(data,res)
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			console.log("error",error)
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};


	return (
		<div>
			<Navbar/>
			<div className='reg'>
				<div className='signup_container'>
					<div className='signup_form_container'>
						<div className='left'>
							<h1>Welcome Back</h1>
							<Link to="/login">
								<button type="button" className='green_btn'>
									Sign in
								</button>
							</Link>
						</div>
						<div className='right'>
							<form className='form_container' onSubmit={handleSubmit}>
								<h1>Create Account</h1>
								<input
									type="text"
									placeholder="First Name"
									name="fname"
									onChange={handleChange}
									value={data.fname}
									required
									className='input'
								/>
								<input
									type="text"
									placeholder="Last Name"
									name="lname"
									onChange={handleChange}
									value={data.lname}
									required
									className='input'
								/>
								<input
									type="email"
									placeholder="Email"
									name="email"
									onChange={handleChange}
									value={data.email}
									required
									className='input'
								/>
								<input
									type="number"
									placeholder="Phone-Number"
									name="phone"
									onChange={handleChange}
									value={data.phone}
									required
									className='input'
								/>
								<input
									type="password"
									placeholder="Password"
									name="password"
									onChange={handleChange}
									value={data.password}
									required
									className='input'
								/>
								{error && <div className='error_msg'>{error}</div>}
								<button type="submit" className='green_btn'>
									Register
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	)
}

export default Register