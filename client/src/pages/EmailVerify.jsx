import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import success from '../assets/images/success.png';
import axios from 'axios';

const EmailVerify = () => {
	const [verificationStatus, setVerificationStatus] = useState(null);
	const [loading, setLoading] = useState(true);
	const { id, token } = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `https://axesstechnology.in/email/${id}/verify/${token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setVerificationStatus('success');
			} catch (error) {
				console.error(error.response?.data || error.message);
				setVerificationStatus('error');
			} finally {
				setLoading(false); // Set loading to false once the request is completed
			}
		};

		verifyEmailUrl();
	}, [id, token]);

	return (
		<div>
			{loading ? (
				<div>Loading...</div>
			) : verificationStatus === 'success' ? (
				<div className='container'>
					<h1 className='text-center fw-semibold'>Email verified successfully</h1>
					<div className="text-center text-capitalize d-flex justify-content-center align-items-center">
						<img src={success} className='img-fluid h-25 w-25' alt="" />
					</div>
					<div className='d-flex justify-content-center mt-4'>
						<Link to="/">
							<button className='btn btn-success text-center '>Welcome to homepage</button>
						</Link>
					</div>

				</div>
			) : (
				<div>
					<h1>Verification Failed</h1>
					<p>Invalid Link or Email Already Verified</p>
				</div>
			)}
		</div>
	);
};

export default EmailVerify;
