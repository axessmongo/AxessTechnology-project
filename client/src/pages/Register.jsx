import React from 'react'
import axios from 'axios'
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../assets/css/reg.scss";


function Register() {

    const [data, setData] = useState({
		fname: "",
		lname: "",
		email: "",
		phone:"",
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
			const url = "http://localhost:4000/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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


  return (
    <div className='reg'>
        <div className='signup_container'>
			<div className='signup_form_container'>
				<div className='left'>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className='white_btn'>
							sign in
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
							placeholder="phone-Number"
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
  )
}

export default Register